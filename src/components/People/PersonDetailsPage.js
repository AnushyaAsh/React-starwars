import React from 'react';

function PersonDetailsPage({ person }) {
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h3>{person.name}</h3>
                </div>
                <div className="card-body">
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Skin Color: {person.skin_color}</p>
                    <p>Eye Color: {person.eye_color}</p>
                    <p>Birth Year: {person.birth_year}</p>
                    <p>Gender: {person.gender}</p>
                </div>
            </div>
        </div>
    );
}

export default PersonDetailsPage;
