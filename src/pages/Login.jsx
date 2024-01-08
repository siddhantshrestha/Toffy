import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div>
      <Link to='/'>
        {" "}
        <p style={{ marginRight: "20px" }}>back to home</p>
      </Link>
      Login Page
    </div>
  )
}

export default Login
