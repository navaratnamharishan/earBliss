import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/login.css'

const Login = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const userData = {
            username,
            password
        };

        try {
            const response = await axios.post('http://localhost:8080/api/login', userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data && response.data.status) {

              localStorage.setItem('username',username)
              alert("Login Succesful ")
                // Handle successful login
                localStorage.setItem('token', 'your_token_here'); // Change this based on your logic
                // Redirect or perform any other action upon successful login
            } else {
                setError('Invalid username or password');
            }
        } catch (err) {
            console.error('Error during login:', err);
            setError('Error in login. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Log In</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserName :</label>
                    <input
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password :</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <br />
                <Link to="/register">I don't have an account</Link>
                <br />
            </form>
        </div>
    );
}

export default Login;
