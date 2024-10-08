import React, { useContext, useState, useEffect } from 'react';
import { MdLogin } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { FaCartPlus } from "react-icons/fa6";
import '../css/nav.css';
import { Link, useNavigate } from 'react-router-dom';
import { ValueContext } from '../global/valueContext.jsx';

const Navbar = () => {
    const { getTotalItemsInCart } = useContext(ValueContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState(() => localStorage.getItem('username') || '');
    const [isLoggedIn, setIsLoggedIn] = useState(!!username);
    const [searchTerm, setSearchTerm] = useState('');

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate('/login');
    };

    const handleCart = () => {
        navigate('/cart');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Navigate to search results page with the search term
        if (searchTerm) {
            navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
            setSearchTerm(''); // Clear the search input after searching
        }
    };

    useEffect(() => {
        setUsername(localStorage.getItem('username'));
        setIsLoggedIn(!!localStorage.getItem('username'));
    }, []);

    return (
        <div className='header'>
            <div className='top_header'>
                <div className='greet'>
                    {isLoggedIn ? <p>Welcome back, {username}!</p> : <p>Please log in.</p>}
                </div>
                <br />
                <div className='icon'>
                    <MdLocalShipping />
                </div>
                <div className='info'>
                    <p>Free Shipping When Shopping up to $1000</p>
                </div>
            </div>
            <div className='mid_header'>
                <div className='logo'>
                    <img src='/images/logo.jpg' alt='logo' />
                </div>
                <form className='search_box' onSubmit={handleSearch}>
                    <input
                        type='text'
                        placeholder='Search'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type='submit' className='submit-search'>
                        <FaSearch />
                    </button>
                </form>
                <div className='cart'>
                    <div className='cart-icon'>
                        <span className='cart-value'>{getTotalItemsInCart()}</span>
                        <FaCartPlus onClick={handleCart} />
                    </div>
                </div>
                <div className='user'>
                    <div className='icon'>
                        {!isLoggedIn && <MdLogin onClick={handleLogin} />}
                    </div>
                </div>
                <div className='user'>
                    <div className='icon'>
                        {isLoggedIn && <HiOutlineLogout onClick={handleLogout} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
