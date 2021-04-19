import React from 'react';
import moment from 'moment';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';

const Message = props => {
    const { name, message, timestamp } = props;
    const timestampString = moment.utc(timestamp).format(DATE_TIME_FORMAT);

    return (
        <div>
            <span>{name}</span>
            <p>{message}</p>
            <span>{timestampString}</span>
        </div>
    );
};

export default Message;
