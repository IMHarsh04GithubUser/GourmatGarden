import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Pages.module.css'

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
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (topPlayers.length === 0) {
    return <div>No players in the leaderboard yet.</div>;
  }

  return (
    <div className={styles.leaderboard}>
      <h2 className={`text-center ${styles.lb_heading}`}>Leaderboard</h2>
      <table className="table table-striped">
        <thead className='text-center'>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Username</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {topPlayers.map((player, index) => (
            <tr key={player.username}>
              <th scope="row">{index + 1}</th>
              <td>{player.username}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LB;
