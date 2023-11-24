import React from 'react';

const CatApi = ({ onDataFetched }) => {
  const fetchCatFacts = async () => {
    try {
      const response = await fetch('https://meowfacts.herokuapp.com/?count=1');
      const data = await response.json();
      onDataFetched(data.data[0]);
    } catch (error) {
      console.error('Error fetching cat facts:', error);
    }
  };

  return (
    <div>
      <button
        className="factButton"
        type="button"
        onClick={fetchCatFacts}>
      🐈
      </button>
    </div>
  );
};

export default CatApi;
