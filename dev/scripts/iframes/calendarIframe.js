import React from 'react';
import Iframe from 'react-iframe';

const Calendar = () => {
    return (
        <div className="calendarIframe">
                <Iframe src="https://bambamboo.zenplanner.com/zenplanner/portal/calendar.cfm?type=Calendar&FRAME=true " 
                    style="width:100%; height:500px;" 
                    frameborder="0" id="idZenPlannerFrame">
                    <noframes>     
                    <a href="https://bambamboo.zenplanner.com/zenplanner/portal/calendar.cfm">Online Calendar</a>
                    </noframes> 
                </Iframe>

                <script src="https://bambamboo.zenplanner.com/zenplanner/skin/js/resize.js"></script>
            
        </div>
    );
}
export default Calendar;