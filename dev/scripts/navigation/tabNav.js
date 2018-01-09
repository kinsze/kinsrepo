import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RoutedTabs, NavTab } from 'react-router-tabs';
import AdultKungfu from '../information/adultKungFu.js';
import ChildrenKungfu from '../information/childrenKungFu.js';
import PersonalTraining from '../information/personalTraining.js';


// Using default styles:
//import 'styles/react-router-tabs.css';
 
const TabNav = ({ match }) => {
  return (
    <div>
      <RoutedTabs startPathWith={match.path}>
        <NavTab to='/information/adult-kungfu'>Adult Program</NavTab>
        <NavTab to='/information/children-kungfu'>Children Program</NavTab>
        <NavTab to='/information/personal-training'>Personal Training</NavTab>
      </RoutedTabs>
 
      <Switch>
        <Route exact path={`${match.path}`} render={() => <Redirect replace to={`${match.path}/adult-kungfu`} />} />
        <Route path={`${match.path}/information/adult-kungfu`} component={AdultKungfu} />
        <Route path={`${match.path}/information/children-kungfu`} component={ChildrenKungfu} />
        <Route path={`${match.path}/information/personal-training`} component={PersonalTraining} />
      </Switch>
    </div>
  );
};
 
export default TabNav;

{/*

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RoutedTabs, NavTab } from 'react-router-tabs';
import { Admins, Moderators, Users } from './components';
 
// Using default styles:
import 'styles/react-router-tabs.css';
 
const UsersPage = ({ match }) => {
  return (
    <div>
      <RoutedTabs startPathWith={match.path}>
        <NavTab to="/admins">Admins</NavTab>
        <NavTab to="/moderators">Moderators</NavTab>
        <NavTab to="/users">Users</NavTab>
      </RoutedTabs>
 
      <Switch>
        <Route exact path={`${match.path}`} render={() => <Redirect replace to={`${match.path}/admins`} />} />
        <Route path={`${match.path}/admins`} component={Admins} />
        <Route path={`${match.path}/moderators`} component={Moderators} />
        <Route path={`${match.path}/users`} component={Users} />
      </Switch>
    </div>
  );
};
 
export default UsersPage;





<div>
                    <ul className="navIcons" >
                        <li><Link  to='./information'><button className="infoIcon icon" onClick={this.handleInfoMenuDrop}></button></Link></li>
                        <li><Link  to='./schedule/adultSchedule'><button className="scheduleIcon icon" onClick={this.handleScheduleMenuDrop}></button></Link></li>
                        <li><Link  to='./pricing/pricing'><button className="pricingIcon icon"></button></Link></li>
                        <li><Link  to='./contact/contact'><button className="contactIcon icon" onClick={this.handleContactMenuDrop}></button></Link></li>
                        <li><Link  to='./login/login'><button className="loginIcon icon">Login</button></Link></li>      
                    </ul>
                </div>


*/}