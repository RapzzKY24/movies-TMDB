import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import MovieDetailPage from "./Pages/MovieDetailPage";
import SearchResultsPage from "./Pages/SearchResultsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import LoginPages from "./Pages/LoginPages";
import SignUpPage from "./Pages/SignUpPages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <div className="app-container">
      <Container fluid className="p-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/*" element={<LoginPages />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

