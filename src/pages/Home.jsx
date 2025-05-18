import { Container } from "react-bootstrap";
import Headers from "../Components/Headers";
import MoviesWeb from "../Components/MoviesWeb";

const Home = ({ handleSearch }) => {
  return (
    <>
      <Headers handleSearch={handleSearch} />
      <Container fluid className="p-0">
        <MoviesWeb />
      </Container>
    </>
  );
};

export default Home;