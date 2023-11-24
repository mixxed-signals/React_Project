import React from 'react';
import { useState } from "react";
import { UploadOutlined } from '@ant-design/icons';

// error message if input less than 10 characters
const InputErrorMessage = () => {
  return (
    <p className="FieldError">Please enter at least 10 characters</p>
  );
};

function Form({ onSubmit }) {
  const [fact, setFact] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // clear out textarea field
    setFact('');
    // call onSubmit callback with enetered fact
    onSubmit(fact);
    // reset the istouched after submission
    setIsTouched(false);
  };


  // 1. value prop
  // 2. callback onChange to receive changes and update state of input
  // 3. onSubmit prop in form tag
  // 4. isTouched to show error message
  // 5. reset button to clear the list
  return (
    <div>
      <form className="factForm" onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="fact"></label>
            <textarea
              id="fact"
              type="text"
              placeholder="Type an interesting fact"
              value={fact}
              onChange={e => {
                setFact(e.target.value);
                setIsTouched(true);
                }}/>
              {isTouched && fact.length < 10 ? (<InputErrorMessage />) : null}
          </div>
          <button
            disabled={!fact}
            className="uploadButton"
            type="submit">
            <UploadOutlined /></button>
        </fieldset>
      </form>
    </div>
  )
};

export default Form;
