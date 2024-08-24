import React, { useState, useEffect } from 'react';

const Message = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/api/message/')
            .then(response => response.json())
            .then(data => setMessage(data.message));
    }, []);

    return (
        <div>
            <h1>Hey, This Message is from Django API</h1>
            <p>{message}</p>
        </div>
    );
};

export default Message;
