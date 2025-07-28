

export function LoginForm() {
    return (
 <div class="container">     
    <form action="action_page.php">
     
                
         <label for="username"><b>Username</b></label>
         <input type="text" placeholder="Create username" name="username" id="username" required></input>

         <label for="psw"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

         <button type="submit" class="registerbtn">Login</button>
     
     </form>
    </div>  
 
 )
 }
