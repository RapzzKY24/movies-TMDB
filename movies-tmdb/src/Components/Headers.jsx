import SearchBar from "./SearchBar";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Headers.css";

const Headers = ({ handleSearch }) => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Headers;
