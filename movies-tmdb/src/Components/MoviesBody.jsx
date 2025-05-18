import React from "react";

const MoviesBody = ({ overview, popularity, releaseDate }) => {
    return (
        <>
            <div>
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>
            <div>
                <strong>Popularity:</strong> {popularity}
            </div>
            <div>
                <strong>Release Date:</strong> {releaseDate}
            </div>
        </>
    );
}

export default MoviesBody