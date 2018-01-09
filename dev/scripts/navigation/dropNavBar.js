import React from 'react';
import { Link } from 'react-router-dom';

const DropNavBar = () => {
    return (
        <div>
            <ul className='dropToolBar'>
                <li><Link to='/information/adult-kungfu'>Adult Kung Fu</Link></li>
                <li><Link to='/information/children-kungfu'>Children Kung Fu</Link></li>
                <li><Link to='/information/personal-training'>Personal Training</Link></li>
                <li><Link to='/information/spar-ITA'>Sparring-ITA</Link></li>
                <li><Link to='/information/events'>Events</Link></li>
            </ul>
        </div>
    )

}

export default DropNavBar;