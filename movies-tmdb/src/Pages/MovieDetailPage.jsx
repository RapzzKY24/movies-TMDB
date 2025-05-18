import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { FaStar, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import { IMAGE_URL, GetMovieById } from "../Utils/data";
import Headers from "../Components/Headers";
import "../Styles/MovieDetail.css";

const MovieDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true);
            const data = await GetMovieById(id);
            setMovie(data);
            setLoading(false);
        };

        fetchMovieDetails();
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Headers />
            <div className="movie-detail-container">
                <Container>
                    {loading ? (
                        <div className="loading-container">
                            <Spinner animation="border" variant="danger" className="netflix-spinner" />
                        </div>
                    ) : movie ? (
                        <>
                            <Button
                                variant="outline-light"
                                className="back-button mb-4"
                                onClick={handleBack}
                            >
                                <FaArrowLeft /> Back
                            </Button>

                            <Row className="movie-detail-content">
                                <Col md={4} className="movie-poster-container">
                                    <img
                                        src={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : ''}
                                        alt={movie.title}
                                        className="movie-detail-poster"
                                    />
                                </Col>
                                <Col md={8} className="movie-info-container">
                                    <h1 className="movie-detail-title">{movie.title}</h1>

                                    <div className="movie-detail-metadata">
                                        <div className="movie-detail-rating">
                                            <FaStar className="movie-info-icon" />
                                            <span>{movie.vote_average} ({movie.vote_count} votes)</span>
                                        </div>
                                        <div className="movie-detail-date">
                                            <FaCalendarAlt className="movie-info-icon" />
                                            <span>{movie.release_date}</span>
                                        </div>
                                    </div>

                                    <div className="movie-detail-overview">
                                        <h3>Overview</h3>
                                        <p>{movie.overview}</p>
                                    </div>

                                    {movie.genres && (
                                        <div className="movie-detail-genres">
                                            <h3>Genres</h3>
                                            <div className="genre-tags">
                                                {movie.genres.map(genre => (
                                                    <span key={genre.id} className="genre-tag">
                                                        {genre.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <div className="not-found-container">
                            <h2>Movie not found</h2>
                            <Button
                                variant="outline-light"
                                onClick={handleBack}
                            >
                                Go Back
                            </Button>
                        </div>
                    )}
                </Container>
            </div>
        </>
    );
};

export default MovieDetailPage;
