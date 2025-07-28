import { RegisterForm } from "../components/forms/RegisterForm"
export function Register({child}) {
return (

<>
<div className="registerPage">
    <h1>Register</h1>
    
    <img className="logos" src="./src/img/foto (1).jpg" alt="logo" />
       <h2>Please fill in this form to create an account.</h2>
</div>
{RegisterForm()}

</>

)

}