import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home/home.js';
import AdultKungFu from './information/adultKungFu.js';
import ChildrenKungFu from './information/childrenKungFu.js';
import PersonalTraining from './information/personalTraining.js';
import SparITA from './information/sparITA.js';
import Events from './information/events.js';
import AdultSchedule from './schedule/adultSchedule.js';
import ChildrenScheduleScarborough from './schedule/childrenScheduleScarborough.js';
import ChildrenScheduleToronto from './schedule/childrenScheduleToronto.js';
import Pricing from './pricing/pricing.js';
import Contact from './contact/contact.js';
import Login from './login/login.js';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';
import { Switch } from 'react-router';    
import { ajax } from 'jquery';
import { RoutedTabs, NavTab } from 'react-router-tabs';
import NavBar from './navigation/navBar.js';
import TabNav from './navigation/tabNav.js';



class App extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render()  {       
       
        return (
           
            <div className="wrapper">
                <Router><div><NavBar /></div></Router>   
                <div className="banner">
                    <div className="eLogo logo"></div>
                        <h1><span id='name'>BAMBOO</span> Kung Fu</h1>
                    <div className="cLogo logo"></div>
                </div>
            <div><TabNav /></div>
                <div id='content'>
                <Router>
                    <div className="infoBox">
                        <Switch>
                            <Route exact path='/' component={Home} /> 
                            <Route exact path='/home' component={Home} />
                            <Route exact path='/adult-kungfu' component={AdultKungFu}  />
                            <Route exact path='/children-kungfu' component={ChildrenKungFu}  />
                            <Route exact path='/personal-training' component={PersonalTraining}  />
                            <Route exact path='/sparring' component={SparITA}  />
                            <Route exact path='/spar-ITA' component={SparITA}  />
                            <Route exact path='/events' component={Events}  />
                            <Route exact path='/adult-schedule' component={AdultSchedule} />
                            <Route exact path='/children-schedule-toronto' component={ChildrenScheduleToronto} />
                            <Route exact path='/children-schedule-scarborough' component={ChildrenScheduleScarborough} />
                            <Route exact path='/pricing' component={Pricing} />
                            <Route exact path='/contact' component={Contact} />
                            <Route exact path='/login' component={Login} />
                            <Route render = { function () {
                                return <p> Page Not Found </p>
                            }} />
                        </Switch>  
                    </div>
                </Router>
                </div> 
            </div>
        )
    
    }
}

ReactDOM.render(<App />, document.getElementById('app'));