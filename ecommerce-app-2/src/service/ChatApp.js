import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { useSelector } from 'react-redux';
import './ChatApp.css'; 

const ChatApp = () => {
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false); 
    const [initialMessageSent, setInitialMessageSent] = useState(false); 
    const user = useSelector((state) => state.user.user); 
    const isAuthenticated = useSelector((state) => state.user.status);

    useEffect(() => {
        if (isAuthenticated && user) {
            const newConnection = new signalR.HubConnectionBuilder()
                .withUrl('http://localhost:5295/chathub', {
                    transport: signalR.HttpTransportType.WebSockets, 
                    withCredentials: true 
                })
                .withAutomaticReconnect()
                .build();

            newConnection.start()
                .then(() => {
                    console.log('Connected to chat service!');
                    setConnection(newConnection);
                    newConnection.on('ReceiveMessage', (user, message) => {
                        setMessages(prevMessages => [...prevMessages, { user, message }]);
                    });
                })
                .catch(error => console.error('Connection failed: ', error));
        }
    }, [isAuthenticated, user]); 

    useEffect(() => {
        if (isOpen && !initialMessageSent && !messages.length) {
            sendMessage('Selam. Sorularınız mı var? Yazabilirsiniz!');
            setInitialMessageSent(true); 
        }
    }, [isOpen]); 

    const sendMessage = async (text = '') => {
        if (connection && (text || message.trim())) {
            try {
                const msg = text || message; 
                await connection.invoke('SendMessage', user.username, msg); 
                setMessage(''); 
            } catch (e) {
                console.error('Sending message failed: ', e);
            }
        }
        
    };

    const handleSendMessage = () => {
        sendMessage(); 
    };

    const toggleChat = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <div className={`chat-container ${isOpen ? 'open' : ''}`}>
            {isAuthenticated && user ? (
                <>
                    <div className="chat-header" onClick={toggleChat}>
                        {isOpen ? 'Kapat' : 'Canlı Destek'}
                    </div>
                    {isOpen && (
                        <div className="chat-box">
                            <div className="chat-messages">
                                {messages.map((msg, index) => (
                                    <div key={index}><b>{msg.user}:</b> {msg.message}</div>
                                ))}
                            </div>
                            <input 
                                type="text" 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                placeholder="Mesajınızı yazın..."
                            />
                            <button onClick={handleSendMessage}>Gönder</button>
                        </div>
                    )}
                </>
            ) : (
                <div>Giriş yapmanız gerekiyor</div>
            )}
        </div>
    );
};

export default ChatApp;
