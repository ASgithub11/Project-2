// Signup page which allows users to create an account by providing their email and password
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
        }

        try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
            alert('Account created successfully');
            navigate('/login'); // Redirect to login page after successful signup
        } else {
            alert('Signup failed. Please try again.');
        }
        } catch (error) {
        console.error('Signup error:', error);
        alert('Signup failed. Please try again.');
        }
    };

    return (
        <div>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <button type="submit">Signup</button>
        </form>
        </div>
    );
};

export default Signup;
