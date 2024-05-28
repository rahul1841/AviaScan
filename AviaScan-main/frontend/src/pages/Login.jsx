import loginImg from "../assets/Images/login.png"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Log in to access expert aircraft maintenance solutions"
      description2=" and enhance your flight safety."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login