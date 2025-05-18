import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Headers from "../Components/Headers";
import "../Styles/NotFound.css";

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <>
            <Headers />
            <div className="not-found-page">
                <Container>
                    <div className="not-found-content">
                        <h1 className="not-found-title">404</h1>
                        <h2 className="not-found-subtitle">Page Not Found</h2>
                        <p className="not-found-message">
                            The page you are looking for doesn't exist or has been moved.
                        </p>
                        <Button
                            variant="danger"
                            size="lg"
                            className="home-button"
                            onClick={handleGoHome}
                        >
                            <FaHome className="me-2" /> Go to Homepage
                        </Button>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default NotFoundPage;
