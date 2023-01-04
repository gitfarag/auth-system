import { useParams } from "react-router-dom"
import LoginForm from "../../components/loginForm/loginForm"
import SignUp from "../../components/signUpForm/signUp"
import './login.css'


const Login = () => {
  const {type} = useParams()
  return (
    <>
        {
      type==="login"?
      <div  className="loginWrapper">
        <LoginForm/>
        </div>
      :<div  className="loginWrapper">
        <SignUp/>
        </div>
    }
    </>
  )
}

export default Login