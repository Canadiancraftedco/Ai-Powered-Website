import React, { useState } from 'react';
import axios from 'axios';

export default function TripPlanner() {
    const [query, setQuery] = useState('');
    const [tripData, setTripData] = useState(null);

    const fetchTripRecommendations = async () => {
        if (!query) return;
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/recommend?query=${query}`);
            setTripData(response.data);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    return (
        <div>
            <h1>Plan Your Adventure</h1>
            <input type="text" placeholder="Enter trip location" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={fetchTripRecommendations}>Get AI Recommendations</button>
            {tripData && (
                <div>
                    <h2>Trip Recommendations:</h2>
                    <p>{tripData.weather}</p>
                    <p>{tripData.recommended_gear.join(', ')}</p>
                </div>
            )}
        </div>
    );
}
