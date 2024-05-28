import signupImg from "../assets/Images/signup.png"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title=" Enhance Aircraft Maintenance and Flight Safety"
      description1="Sign up now to access advanced aircraft maintenance tools "
      description2=" and ensure optimal flight performance."
      
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup