import React, { useEffect } from "react";
import Login from "../Components/Login";
import { useNavigate } from "react-router-dom";
import { auth } from "../Config/firebase";
import "../Styles/Login.css";

const LoginPages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, redirect to home
        navigate("/");
      }
    });

    // Clean up subscription
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="login-page-container">
      <div className="login-card">
        <Login />
      </div>
    </div>
  );
};

export default LoginPages;
