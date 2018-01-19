import React from 'react';

const Zenplanner = () => {
    return (
        <div>
            <Iframe url="https://bambamboo.zenplanner.com/zenplanner/portal/prospect.cfm?type=RequestInfo&FRAME=true "
            width="100%"
            height="500"
            id="idZenPlannerFrame"
            frameborder="0"
             /> 
            <noframes> 
                <a href="https://bambamboo.zenplanner.com/zenplanner/portal/prospect.cfm">Request Info</a>
            </noframes>  
        </div>
    );
}

const ScriptZenplanner = () => {
    return (
        <div>
            <script src="https://bambamboo.zenplanner.com/zenplanner/skin/js/resize.js"></script> 
        </div>
    );
}

export default { Zenplanner, ScriptZenplanner};