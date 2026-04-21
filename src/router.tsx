import { createBrowserRouter } from "react-router-dom"
import ComingSoon from "./pages/ComingSoon"

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <ComingSoon />
  }
])
