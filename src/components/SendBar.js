import React, { useState } from 'react';
import '../index.css';

const SendBar = ({ username: name }) => {
    const [message, setMessage] = useState('');

    const onMessageChange = e => setMessage(e.target.value);

    const onSendClick = e => {
        e.preventDefault();
        fetch('http://localhost:8080/api', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, message })
        })       
        .then(() => setMessage(''))
        .catch(error => console.log(error));
    }

    return (
        <div className="send-bar">
            <textarea value={message} onChange={onMessageChange} />
            <button onClick={onSendClick}>{'Send'}</button>
        </div>
    );
};

export default SendBar;
