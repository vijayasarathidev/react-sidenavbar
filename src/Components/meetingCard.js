import React from 'react';
import './meetingCard.css'; 

function Meeting(props) {
    return (
        <div className="meetingContainer">
            <h2 className="meetingCard__heading">{props.heading}</h2>
            <h3 className="meetingCard__subheading">{props.subheading}</h3>
        </div>
    );
}

export default Meeting;
