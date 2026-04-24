import { useEffect, useRef } from "react"

type GrainFieldBackgroundProps = {
  className?: string
}

const VERTEX_SHADER = `
attribute vec2 a_position;
attribute float a_size;
attribute float a_alpha;

varying float v_alpha;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  gl_PointSize = a_size;
  v_alpha = a_alpha;
}
`

const FRAGMENT_SHADER = `
precision mediump float;

varying float v_alpha;

void main() {
  vec2 point = gl_PointCoord - vec2(0.5);
  float radius = length(point);
  float grainMask = smoothstep(0.5, 0.32, radius);

  vec3 core = vec3(0.73, 0.56, 0.18);
  vec3 highlight = vec3(0.93, 0.82, 0.54);
  vec3 grainColor = mix(core, highlight, 1.0 - radius * 2.0);

  gl_FragColor = vec4(grainColor, grainMask * v_alpha);
}
`

export default function GrainFieldBackground({ className }: GrainFieldBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const gl = canvas.getContext("webgl", { alpha: true, antialias: true })

    if (!gl) {
      return
    }

    const compileShader = (shaderType: number, source: string) => {
      const shader = gl.createShader(shaderType)

      if (!shader) {
        return null
      }

      gl.shaderSource(shader, source)
      gl.compileShader(shader)

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader)
        return null
      }

      return shader
    }

    const vertexShader = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER)
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER)

    if (!vertexShader || !fragmentShader) {
      return
    }

    const program = gl.createProgram()

    if (!program) {
      return
    }

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program)
      return
    }

    gl.useProgram(program)

    const particleCount = 140
    const positions = new Float32Array(particleCount * 2)
    const sizes = new Float32Array(particleCount)
    const alphas = new Float32Array(particleCount)

    const grains = Array.from({ length: particleCount }, () => {
      const depth = Math.random() * 0.7 + 0.3

      return {
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
        vx: (Math.random() * 0.00045 + 0.00008) * depth,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.0016 + 0.0004,
        depth,
      }
    })

    const positionBuffer = gl.createBuffer()
    const sizeBuffer = gl.createBuffer()
    const alphaBuffer = gl.createBuffer()

    if (!positionBuffer || !sizeBuffer || !alphaBuffer) {
      return
    }

    const positionLocation = gl.getAttribLocation(program, "a_position")
    const sizeLocation = gl.getAttribLocation(program, "a_size")
    const alphaLocation = gl.getAttribLocation(program, "a_alpha")

    const resizeCanvas = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.floor(canvas.clientWidth * ratio)
      const height = Math.floor(canvas.clientHeight * ratio)

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        gl.viewport(0, 0, width, height)
      }
    }

    const render = (time: number) => {
      resizeCanvas()

      for (let i = 0; i < particleCount; i += 1) {
        const grain = grains[i]

        grain.y += grain.vx
        grain.x += Math.sin(time * grain.swaySpeed + grain.swayPhase) * 0.00022

        if (grain.y > 1.12) {
          grain.y = -1.2
          grain.x = Math.random() * 2 - 1
        }

        if (grain.x > 1.15) {
          grain.x = -1.12
        } else if (grain.x < -1.15) {
          grain.x = 1.12
        }

        positions[i * 2] = grain.x
        positions[i * 2 + 1] = grain.y
        sizes[i] = 3.4 + grain.depth * 5.2
        alphas[i] = 0.18 + grain.depth * 0.24
      }

      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)

      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW)
      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

      gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.DYNAMIC_DRAW)
      gl.enableVertexAttribArray(sizeLocation)
      gl.vertexAttribPointer(sizeLocation, 1, gl.FLOAT, false, 0, 0)

      gl.bindBuffer(gl.ARRAY_BUFFER, alphaBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, alphas, gl.DYNAMIC_DRAW)
      gl.enableVertexAttribArray(alphaLocation)
      gl.vertexAttribPointer(alphaLocation, 1, gl.FLOAT, false, 0, 0)

      gl.drawArrays(gl.POINTS, 0, particleCount)
      rafId = window.requestAnimationFrame(render)
    }

    let rafId = window.requestAnimationFrame(render)

    const handleResize = () => resizeCanvas()
    window.addEventListener("resize", handleResize)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener("resize", handleResize)

      gl.deleteBuffer(positionBuffer)
      gl.deleteBuffer(sizeBuffer)
      gl.deleteBuffer(alphaBuffer)

      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  )
}
