import React, { useState, useEffect } from 'react';
import Chat from './components/Chat';
import SendBar from './components/SendBar';
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8080/ws-chat/';

const App = () => {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState('');
    const [nameSubmitted, setNameSubmitted] = useState(false);

    const fetchMessages = () => {
        fetch('http://localhost:8080/api')
            .then(response => response.json())
            .then(messages => setMessages(messages))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchMessages();
    }, [])

    const onNameChange = e => setName(e.target.value);

    const onSubmitName = () => setNameSubmitted(true);

    if (!nameSubmitted) {
        return (
            <div>
                <label>{'Please enter your name to start chat: '}</label>
                <input value={name} onChange={onNameChange} />
                <button onClick={onSubmitName}>{'Enter'}</button>
            </div>
        );
    }

    return (
        <div>
            <SockJsClient
                url={SOCKET_URL}
                topics={['/topic/chat']}
                onConnect={() => console.log('connected')}
                onDisconnect={() => console.log('disconnected')}
                onMessage={message => setMessages([...messages, message])}
            />
            <Chat {...{ name, messages }} />
            <SendBar {...{ name }} />
        </div>
    );
    
}

export default App;
