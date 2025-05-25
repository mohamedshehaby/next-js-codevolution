'use client';
import {useState} from 'react';

const ClientComponentTwo = () => {
    const [name, setName] = useState('Sayed');
    return (
        <h1>
            Client Components Two
        </h1>
    );
};

export default ClientComponentTwo;