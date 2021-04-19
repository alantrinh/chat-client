import React from 'react';
import moment from 'moment';
import '../index.css';

const DATE_TIME_FORMAT = 'YYYY MMM DD HH:mm';

const Message = ({ name, message, timestamp, username }) => {
    const timestampString = moment.utc(timestamp).format(DATE_TIME_FORMAT);
    console.log('username', username);
    console.log('name', name);
    const isOwnMessage = username === name;
    const className = 'message' + (isOwnMessage ? ' own-message' : '');

    return (
        <div className={className}>
            <span>{name}</span>
            <p className="contents">{message}</p>
            <span>{timestampString}</span>
        </div>
    );
};

export default Message;
