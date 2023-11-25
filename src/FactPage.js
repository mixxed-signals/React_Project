import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

// factpage will take prop which will be passed to in app.js
const FactPage = ({ facts }) => {
  // use the useParams hook to get parameters from URL -> get
  // path="/fact/:index" usdParams allows to retrieve index dynamically
  // returns onject {index: '1'}
  const { index } = useParams();
  const factIndex = parseInt(index, 10);

  console.log(factIndex);

  return (
    <div className="Notepad">
      <h2>Fact {factIndex}</h2>
      <br></br>
      <p>"{facts[factIndex - 1]}"</p>
      <br></br>
      <Link to="/" className="customLink">
      <ArrowLeftOutlined /> Back
      </Link>
    </div>
  );
};

export default FactPage;
