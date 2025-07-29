import { LoginForm } from '../components/form/LoginForm';
 import merc from '../img/thinking.jpg';

export function Login() {
return (
<>
<div className='Logintitle'>
     <h1>Login Page</h1>
    <img className='thinking' src={merc} alt='merc'/>
    <h2>Please fill in this form to Login.</h2>
   
</div>

    {LoginForm()}
</>

)

}