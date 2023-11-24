import React from 'react';

const LuckyApi = ({ onDataFetched }) => {
  const fetchRandomFacts = async () => {
    try {
      const response = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
      const data = await response.json();
      onDataFetched(data.joke);
    } catch (error) {
      console.error('Error fetching random facts:', error);
    }
  };

  return (
    <div>
      <button className="factButton" type="button" onClick={fetchRandomFacts}>
      🎲
      </button>
    </div>
  );
};

export default LuckyApi;
