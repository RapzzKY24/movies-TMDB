import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
        if (typeof onSearch === 'function') {
            onSearch(searchTerm);
        } else {
            console.error("onSearch is not a function:", onSearch);
        }
    }

    return (
        <div className="search-bar-container">
            <Form onSubmit={handlerSubmit}>
                <InputGroup className="search-input-group">
                    <Form.Control
                        type="text"
                        placeholder="Search for movies, TV shows..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <Button type="submit" className="search-button">
                        <FaSearch />
                    </Button>
                </InputGroup>
            </Form>
        </div>
    );
}

export default SearchBar;
