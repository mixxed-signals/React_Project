import React from 'react';

const DogApi = ({ onDataFetched }) => {
  const fetchDogFacts = async () => {
    try {
      const response = await fetch('https://dogapi.dog/api/v2/facts');
      const data = await response.json();
      onDataFetched(data.data[0].attributes.body);
    } catch (error) {
      console.error('Error fetching dog facts:', error);
    }
  };

  return (
    <div>
      <button
        className="factButton"
        type="button"
        onClick={fetchDogFacts}>
        🐕
      </button>
    </div>
  );
};

export default DogApi;
