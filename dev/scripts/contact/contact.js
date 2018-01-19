import React from 'react';
import Iframe from 'react-iframe';
import { Zenplanner, ScriptZenplanner } from '../iframes/zenPlannerIframe.js';

const Contact = () => {
    return (
        <div className="calendar">
            <ZenPlanner /><ScriptZenplanner />
        </div>
    );
}
export default Contact;