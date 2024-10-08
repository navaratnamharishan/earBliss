import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('token');

        // Redirect to the login page
        navigate('/login');
    };

    React.useEffect(() => {
        handleLogout();
    }, []);

    return (
        <div>
            <h2>Logging out...</h2>
        </div>
    );
};

export default Logout;
