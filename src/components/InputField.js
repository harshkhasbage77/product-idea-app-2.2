import React, { useState } from 'react';

const InputField = ({ onChildValueChange, onSubmit, productIdea }) => {
  const [inputText, setInputText] = useState('');
  const [finalProductIdea, setFinalProductIdea] = useState('');

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
    setFinalProductIdea(newText);
    onChildValueChange(newText);
    // onInputChange(newText);
  };

  const handleSubmit = () => {
    onSubmit();
    // Check if input is not empty before submitting
    if (inputText.trim() !== '') {
    //   onSubmit();
        console.log("onsubmit");
        console.log(finalProductIdea);
        setInputText('');
    }
    // Handle the case when input is empty
    else {
      alert('Please enter a product idea before submitting.');
    }
  };

  return (
    <div>
        <code>
          <label>Enter Product Idea:</label>
          <input className='input' type="text" value={inputText} onChange={handleInputChange} />
        </code>
      {/* <button onClick={handleSubmit}>Submit Product Idea</button> */}
      <br />
      <p>
        <code>Generating image for <span className='generatedText'> "{finalProductIdea}"</span></code>
      </p>
    </div>
  );
};

export default InputField;
