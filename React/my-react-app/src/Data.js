import React, { useState, useEffect } from 'react';

const Data = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('http://localhost:8000/api/data/')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h2>Data from Django API, How are you?</h2>
            <p>ID: {data.id}</p>
            <p>Name: {data.name}</p>
        </div>
    );
};

export default Data;
