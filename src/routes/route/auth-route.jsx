import { redirect } from "react-router-dom"
import Login from "../../pages/Login"


const loginStatus = false

const authRoute =[
  {
    path:"/login",
 loader: ()=>{
    if(loginStatus){
      throw redirect('/home')
    }
    return null
  },
  element: <Login />  
  }
]

export default authRoute