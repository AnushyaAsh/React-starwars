import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AllPeople() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await axios.get('https://www.swapi.tech/api/people');
                setPeople(response.data.results);
            } catch (error) {
                console.error('Error fetching people data:', error);
            }
        };

        fetchPeople();
    }, []);

    return (
        <div className='container'>
            <h2>All People</h2><br></br><br></br>
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(person => (
                        <tr key={person.uid}>
                            <td>{person.name}</td>
                            <td><Link to={`/people/${person.uid}`}>Details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllPeople;
