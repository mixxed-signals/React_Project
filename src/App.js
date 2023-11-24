import './App.css';
import React from 'react';

import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import Form from './Form'
import FactsList from './FactsList';
import DogApi from './DogApi';
import CatApi from './CatApi';
import LuckyApi from './LuckyApi';
import FactPage from './FactPage';


function App() {
  // useState to have controlled state of entered facts
  const[facts, setFacts] = useState([]);

  // callback function to handle submitted facts
  const handleAddFact = (newFact) => {
    // use spread to not overwrite
    setFacts([...facts, newFact]);
  };

  // callback function to handle resetting facts
  const handleResetFacts = () => {
    setFacts([]);
  }


  return (
    <div className="App">
      <div className="Notepad">
        <FactsList data={facts} onReset={handleResetFacts}/>
      </div>
      <div className="factButtonsContainer">
      {/* <Routes>
        <Route path="/fact/:factId" element={<FactPage />} />
      </Routes> */}
        <CatApi onDataFetched={handleAddFact} />
        <DogApi onDataFetched={handleAddFact} />
        <LuckyApi onDataFetched={handleAddFact} />
      </div>
      <Form onSubmit={handleAddFact}/>
    </div>
  );
}

export default App;
