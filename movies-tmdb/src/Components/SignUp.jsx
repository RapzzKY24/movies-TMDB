import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebase';
import '../Styles/SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        try {
            if (!email || !password) {
                throw new Error('Please enter both email and password');
            }
            
            if (password.length < 6) {
                throw new Error('Password must be at least 6 characters');
            }
            
            // Create user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User created successfully:', userCredential.user.uid);
            navigate('/login');
        } catch (err) {
            const errorCode = err.code;
            const errorMessage = err.message;
            console.error('Signup error:', errorCode, errorMessage);
            
            if (errorCode === 'auth/email-already-in-use') {
                setError('This email is already registered');
            } else if (errorCode === 'auth/invalid-email') {
                setError('Invalid email format');
            } else if (errorCode === 'auth/weak-password') {
                setError('Password is too weak (minimum 6 characters)');
            } else {
                setError(errorMessage || 'Failed to create account');
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="sign-up-container">
            <h1>Sign Up</h1>
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
                    minLength="6"
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Creating Account...' : 'Sign Up'}
                </button>
            </form>
            <NavLink to="/login">Already have an account? Login</NavLink>
        </div>
    );
}

export default SignUp
