import React from 'react';

const AdultSchedule = () => {
    return (
        <div>
            <div className="scheduleContainer">
                <div className="locay">
                    <h2>Scarborough</h2>
                    <h3> 3400 Midland Avenue, Unit 3, Scarborough, ON</h3>
                    <ul className="classTime">
                        <li>Monday - 7:30pm - 9:00pm</li>
                        <li>Friday - 8:00pm - 9:30pm</li>
                        <li>Sunday - 11:00am - 12:30pm</li>
                    </ul>
                </div>
                <div className="locay">
                <h2>Toronto</h2>
                <h3>141 Spadina Avenue, Unit 205, Toronto, ON</h3>
                <ul className="classTime">
                        <li>Monday - 6:00pm - 7:00pm</li>
                        <li>Tuesday - 12:00pm - 1:30pm  /  6:00pm - 7:30pm   /  7:30pm - 9:00pm</li>
                        <li>Wednesday - 6:00pm - 7:00pm</li>
                        <li>Thursday - 12:00pm - 1:30pm  /  6:00pm - 7:30pm  /  7:30pm - 9:00pm</li>
                        <li>Saturday - 11:00am - 12:30pm</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default AdultSchedule;