import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        try {
            // Validate inputs
            if (!email || !password) {
                throw new Error('Please enter both email and password');
            }
            
            // Sign in user
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in successfully:', userCredential.user.uid);
            navigate('/');
        } catch (err) {
            const errorCode = err.code;
            const errorMessage = err.message;
            console.error('Login error:', errorCode, errorMessage);
            
            // Handle specific Firebase errors
            if (errorCode === 'auth/invalid-email') {
                setError('Invalid email format');
            } else if (errorCode === 'auth/user-not-found') {
                setError('No account found with this email');
            } else if (errorCode === 'auth/wrong-password') {
                setError('Incorrect password');
            } else if (errorCode === 'auth/too-many-requests') {
                setError('Too many failed login attempts. Please try again later');
            } else {
                setError('Failed to login. Please check your credentials');
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <NavLink to="/signup">Don't have an account? Sign Up</NavLink>
        </div>
    );
}

export default Login
