import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import MovieDetailPage from "./Pages/MovieDetailPage";
import SearchResultsPage from "./Pages/SearchResultsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import LoginPages from "./Pages/LoginPages";
import SignUpPage from "./Pages/SignUpPages";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import { ThemeProvider } from "./Contexts/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Container fluid className="p-0">
          <Routes>
            {/* Protected Routes - Only accessible when logged in */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/movie/:id" 
              element={
                <ProtectedRoute>
                  <MovieDetailPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/search" 
              element={
                <ProtectedRoute>
                  <SearchResultsPage />
                </ProtectedRoute>
              } 
            />

            {/* Public Routes - Only accessible when logged out */}
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <LoginPages />
                </PublicRoute>
              } 
            />
            <Route 
              path="/signup" 
              element={
                <PublicRoute>
                  <SignUpPage />
                </PublicRoute>
              } 
            />

            {/* Always accessible */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

