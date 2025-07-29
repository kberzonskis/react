import { Link } from "react-router";

export function RegisterForm() {
    return (
 <div class="container">     
    <form action="action_page.php">
     
                
         <label for="username"><b>Username</b></label>
         <input type="text" placeholder="Create username" name="username" id="username" required></input>

         <label for="email"><b>Email</b></label>
         <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

         <label for="psw"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

         <button type="submit" class="registerbtn">Register</button>
     
     </form>
    </div>  
 
 )
 }
