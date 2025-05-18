import { useEffect, useState } from "react";
import Headers from "./Headers";
import MovieList from "./MovieList";
import { GetData, SearchMovies } from "../Utils/data";
import { Spinner, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MoviesWeb = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await GetData();
            setMovies(data);
            setLoading(false);
        };
        fetchMovies();
    }, []);

    const handleSearch = async (searchTerm) => {
        if (searchTerm.trim() === '') {
            setLoading(true);
            const data = await GetData();
            setMovies(data);
            setLoading(false);
            return;
        }

        setLoading(true);
        const results = await SearchMovies(searchTerm);
        setMovies(results);
        setLoading(false);
    };

    return (
        <>
            <Headers handleSearch={handleSearch} />
            {loading ? (
                <Container className="loading-container">
                    <Spinner animation="border" variant="danger" className="netflix-spinner" />
                </Container>
            ) : (
                <MovieList movies={movies} />
            )}
        </>
    );
};

export default MoviesWeb;
