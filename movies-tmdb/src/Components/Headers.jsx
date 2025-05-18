import SearchBar from "./SearchBar";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Config/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Headers.css";
import { useState, useEffect } from "react";

const Headers = ({ handleSearch }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Set up auth state listener
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        // Clean up subscription
        return () => unsubscribe();
    }, []);

    const goToHome = () => {
        navigate("/");
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out successfully");
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <Navbar expand="lg" className="netflix-header" variant="dark">
            <Container>
                <Navbar.Brand
                    className="netflix-brand"
                    onClick={goToHome}
                    style={{ cursor: 'pointer' }}
                >
                    Movie TMDB
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                    </Nav>
                    {handleSearch && <SearchBar onSearch={handleSearch} />}
                    <Nav className="ms-auto">
                        {user ? (
                            <div className="d-flex align-items-center">
                                <span className="text-light me-3">{user.email}</span>
                                <Button 
                                    variant="outline-danger" 
                                    size="sm" 
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <Button 
                                variant="outline-light" 
                                size="sm" 
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Headers;
