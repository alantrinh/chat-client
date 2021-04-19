import React from 'react';
import Message from './Message';

const Chat = ({ username, messages }) => {
    return (
        <div>
            {messages.map(({ id, name, message, timestamp }) => (
                <Message
                    {...{
                        name,
                        message,
                        timestamp,
                        username
                    }}
                    key={id}
                />
            ))}
        </div>
    )
};

export default Chat;