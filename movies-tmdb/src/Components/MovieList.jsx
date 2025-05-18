import MoviesItem from "./MoviesItem";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/MovieList.css";

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list-container">
            <Row className="g-4">
                {movies.map((movie) => (
                    <Col key={movie.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                        <MoviesItem {...movie} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MovieList;
