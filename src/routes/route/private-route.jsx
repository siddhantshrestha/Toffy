import { redirect } from "react-router-dom"
import Home from "../../pages/Home"
import Post from "../../pages/post"
import Layout from "../../pages/Layout"
import Detail from "../../pages/detail"

const loginStatus = true

const privateRoutes = [
  {
    element: <Layout />,
    loader: () => {
      if (!loginStatus) {
        throw redirect("/login")
      }
      return null
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Post />,
    
      },
      {
        path: "posts/:pid",
        element: <Detail />,
      },
    ],
  },
]

export default privateRoutes
