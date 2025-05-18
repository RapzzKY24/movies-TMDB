import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import Headers from "../Components/Headers";
import MovieList from "../Components/MovieList";
import { GetData } from "../Utils/data";
import "../Styles/Homepage.css";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            const data = await GetData();
            setMovies(data);
            setLoading(false);
        };

        fetchMovies();
    }, []);

    const handleSearch = async (searchTerm) => {
        if (searchTerm.trim() === "") {
            return;
        }

        navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <>
            <Headers handleSearch={handleSearch} />
            <div className="home-container">
                <Container>
                    <div className="home-header">
                        <h1 className="home-title">Popular Movies</h1>
                    </div>

                    {loading ? (
                        <div className="loading-container">
                            <Spinner animation="border" variant="danger" className="netflix-spinner" />
                        </div>
                    ) : (
                        <MovieList movies={movies} />
                    )}
                </Container>
            </div>
        </>
    );
};

export default HomePage;