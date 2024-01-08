import Layout from "../../pages/Layout"
const publicRoute = [
  {
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <>Page Not Found</>,
      },
    ],
  },
]

export default publicRoute
