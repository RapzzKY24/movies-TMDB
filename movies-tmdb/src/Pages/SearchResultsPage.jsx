import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Container, Button, Spinner } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { SearchMovies } from "../Utils/data";
import Headers from "../Components/Headers";
import MovieList from "../Components/MovieList";
import "../Styles/SearchResults.css";

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get("query") || "";
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!query.trim()) {
                navigate("/");
                return;
            }

            setLoading(true);
            const results = await SearchMovies(query);
            setMovies(results);
            setLoading(false);
        };

        fetchSearchResults();
    }, [query, navigate]);

    const handleSearch = async (searchTerm) => {
        if (searchTerm.trim() === "") {
            navigate("/");
        } else {
            navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
    };

    const handleBack = () => {
        navigate("/");
    };

    return (
        <>
            <Headers handleSearch={handleSearch} />
            <div className="search-results-container">
                <Container>
                    <div className="search-header">
                        <Button
                            variant="outline-light"
                            className="back-button"
                            onClick={handleBack}
                        >
                            <FaArrowLeft /> Back to Home
                        </Button>
                        <h2 className="search-title">
                            Search Results for: <span className="search-query">"{query}"</span>
                        </h2>
                    </div>

                    {loading ? (
                        <div className="loading-container">
                            <Spinner animation="border" variant="danger" className="netflix-spinner" />
                        </div>
                    ) : movies.length > 0 ? (
                        <MovieList movies={movies} />
                    ) : (
                        <div className="no-results-container">
                            <h3>No movies found matching "{query}"</h3>
                            <p>Try searching for a different term</p>
                        </div>
                    )}
                </Container>
            </div>
        </>
    );
};

export default SearchResultsPage;
