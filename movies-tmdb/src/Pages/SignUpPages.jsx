import React, { useEffect } from "react";
import SignUp from "../Components/SignUp";
import { useNavigate } from "react-router-dom";
import { auth } from "../Config/firebase";
import "../Styles/SignUp.css";

const SignUpPage = () => {
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
    <div className="signup-page-container">
      <div className="signup-card">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
