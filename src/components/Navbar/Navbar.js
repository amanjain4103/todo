import React from 'react';
import './Navbar.css'
const Navbar = (props) => {
    return(
        <div className="nav">
            {(props.currentRoute==="main")?
                <div>
                    <a href="#" onClick={props.handleLogin}>LOGIN</a>
                    <a href="#">REGISTER</a>
                </div>
                :
                <div>
                    <a href="#" onClick={props.handleLogout}>LOGOUT</a>
                </div>
            
            }
            
            
            {/* <img src="" alt="some Image"></img> */}
        </div>
    )
}

export default Navbar;