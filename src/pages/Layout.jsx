import { Outlet } from "react-router-dom"
import Header from "../component/header"

const Layout = () => {
  return (
    <div>
      <h1>
        <Header />
      </h1>
      <Outlet />
      <h1 style={{ width: "100%", height: "200px", backgroundColor: "brown" }}>
        Footer
      </h1>
    </div>
  )
}

export default Layout
