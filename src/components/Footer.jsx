import { NavLink } from "react-router";

export function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom border-top  ">
              
                <p className="col-md-4 mb-0 text-body-secondary">&copy; 2025 Company, Inc</p>
                <ul className="nav col-md-8 justify-content-end">
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/about'>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/services'>Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/login'>Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/register'>Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/app'>App</NavLink>
                    </li>
                </ul>

                
            </footer>
        </div>
    );
}