import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <Link to='/'>Home</Link>
      <Link to='/login'>
        <p style={{ marginLeft: "20px", marginRight: "20px", marginTop: "0" }}>
          Login
        </p>
      </Link>
      <Link to='/posts'>post</Link>
    </div>
  )
}

export default Header
