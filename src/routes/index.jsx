import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthRoute from "./route/auth-route"
import PrivateRoute from "./route/private-route"
import PublicRoute from "./route/publicRoute"

const Router = () => {
  const router = createBrowserRouter([
    ...AuthRoute,
    ...PrivateRoute,
    ...PublicRoute,
  ])

  return <RouterProvider router={router} />
}

export default Router
