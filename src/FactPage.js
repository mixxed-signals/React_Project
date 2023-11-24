import React from 'react';

const FactPage = ({ fact }) => {
  return (
    <div className="FactPage">
      <h2>Fact</h2>
      <div className="Notepad">
        <p>{fact}</p>
      </div>
    </div>
  );
};

export default FactPage;
