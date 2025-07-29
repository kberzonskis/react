

export function LoginForm() {
    return (
 <div className ="container">     
    <form action="action_page.php">
     
                
         <label htmlFor="username"><b>Username</b></label>
         <input type="text" placeholder="Create username" name="username" id="username" required></input>

         <label htmlFor="psw"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" className="psw" id="psw" required></input>

         <button type="submit" className="registerbtn">Login</button>
     
     </form>
    </div>  
 
 )
 }
