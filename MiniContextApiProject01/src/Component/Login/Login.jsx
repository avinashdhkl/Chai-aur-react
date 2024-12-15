import React, { useState, useContext } from 'react'
import UserContext from '../../Context/UserContext';


function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ userName, password });
    }
    return (
        <>
            <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='User Name' />
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <button onClick={handleSubmit}>Submit</button>
        </>

    )
}

export default Login