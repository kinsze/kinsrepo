import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './home/home.js';
import AdultKungfu from './information/adultKungFu.js';
import ChildrenKungfu from './information/childrenKungFu.js';
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
import NavBar from './navigation/navBar.js';
import Zenplanner from './iframes/zenPlannerIframe.js';
import ScriptZenplanner from './iframes/scriptZenplanner.js';
import { render } from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render()  {       
        return (
                
            <div className="wrapper">
            
                <Router><div>
                <div><NavBar /></div>
                <div className="banner">
                    <div className="eLogo logo"></div>
                        <h1><span id='name'>BAMBOO</span> Kung Fu</h1>
                    <div className="cLogo logo"></div>
                </div>
                </div></Router>  
                <div id='content'>
                <Router><div>
                    <div></div>
                    <div className="infoBox">
                        <Switch>
                            
                            <Route exact path='/home' component={Home} />
                            <Route exact path='/adult-kungfu' component={AdultKungfu}  />
                            <Route exact path='/children-kungfu' component={ChildrenKungfu}  />
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
                        <AdultKungfu />
                        <Zenplanner />
                    </div>
                    
                </div></Router>
                </div> 
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

