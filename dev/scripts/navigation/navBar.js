import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <ul className='navIcons'>
                <li>
                    <Link to='/information'>
                        <button className="infoIcon icon" ></button>
                    </Link>
                </li>   
                <li>
                    <Link to='/schedule/adult-schedule'>
                        <button className="scheduleIcon icon" ></button>
                    </Link>
                </li> 
                <li>
                    <Link to='/pricing/pricing'>
                        <button className="pricingIcon icon"></button>
                    </Link>
                </li> 
                <li>
                    <Link to='contact/contact'>
                        <button className="contactIcon icon" ></button>
                    </Link>
                </li>
                <li>
                    <Link to='/login/login'>
                        <button className="loginIcon icon">Login</button>
                    </Link>
                </li>  
            </ul>   
        </div>
    )
}

export default NavBar;