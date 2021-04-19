import React from 'react';
import Message from './Message';

const Chat = ({ name, messages }) => {
    return (
        <div>
            <h1>Chat</h1>
            {messages.map(({ id, name, message, timestamp }) => (
                <Message
                    {...{
                        name,
                        message,
                        timestamp
                    }}
                    key={id}
                />
            ))}
        </div>
    )
};

export default Chat;