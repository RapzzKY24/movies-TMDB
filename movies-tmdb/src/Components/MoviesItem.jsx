import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaStar, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../Utils/data";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/MoviesItem.css";

const MoviesItem = ({ id, title, poster_path, overview, popularity, release_date }) => {
    const navigate = useNavigate();
    const imageUrl = poster_path ? `${IMAGE_URL}${poster_path}` : '';

    const handleMovieClick = () => {
        navigate(`/movie/${id}`);
    };

    return (
        <Card className="movie-card" onClick={handleMovieClick}>
            <Card.Img variant="top" src={imageUrl} alt={title} className="movie-image" />
            <Card.Body>
                <Card.Title className="movie-title">{title}</Card.Title>
                <div className="movie-info">
                    <FaStar className="movie-info-icon" />
                    <span>{popularity}</span>
                </div>
                <div className="movie-info">
                    <FaCalendarAlt className="movie-info-icon" />
                    <span>{release_date}</span>
                </div>
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id={`tooltip-${title}`}>
                            {overview}
                        </Tooltip>
                    }
                >
                    <div className="movie-info movie-info-overview">
                        <FaInfoCircle className="movie-info-icon" />
                        <span>Overview</span>
                    </div>
                </OverlayTrigger>
            </Card.Body>
        </Card>
    );
};

export default MoviesItem;
