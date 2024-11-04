import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LB = () => {
  const [topPlayers, setTopPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/leaderboard'); // Adjust the URL as necessary
        setTopPlayers(response.data);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
        setError('Failed to fetch leaderboard');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Consider a spinner or loading animation here
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (topPlayers.length === 0) {
    return <div>No players in the leaderboard yet.</div>;
  }

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {topPlayers.map((player) => (
          <li key={player.username}>
            {player.username} - {player.score} points
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LB;
