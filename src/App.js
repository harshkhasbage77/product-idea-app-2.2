import React from 'react';
import { useState } from 'react';

import logo from './sync.png';
import './App.css';
import InputField from './components/InputField';
import IconDisplay from './components/IconDisplay';

function App() {

  const [inputText, setInputText] = useState('');
  const [productIdea, setProductIdea] = useState('');
  const [iconUrl, setIconUrl] = useState("https://source.unsplash.com/");

  const handleChildValue = (childValue) => {
    // Update the state in the parent component with the value from the child
    setProductIdea(childValue);
  };

  const [isEmpty, setIsEmpty] = useState(true);

  const handleSubmit = async (productIdea) => {
    // console.log("Product Idea is"+productIdea);
    // setIconUrl(setIconUrl+productIdea);

    console.log(iconUrl + " this is in app.js");
    // try {
    //   // Replace this with your actual API endpoint for icon recommendation
    //   const response = await fetch(`YOUR_ICON_API_ENDPOINT?productIdea=${encodeURIComponent(productIdea)}`);

    //   if (!response.ok) {
    //     throw new Error('Failed to fetch icon recommendation');
    //   }

    //   const data = await response.json();

    //   // Assuming your API returns an object with an 'iconUrl' property
    //   setIconUrl(data.iconUrl);
    // } catch (error) {
    //   console.error('Error fetching icon recommendation:', error.message);
    //   // Handle errors as needed
    // }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 className='intro-overlay'>Harsh Khasbage<br />Computer Science and Engineering<br />B.Tech, 3rd Year, IIT Kharagpur</h3>
        <h1>
          <code>
            Iterate AI Full Stack Task...
          </code>
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Product Idea Input, Icon, and Recommendation</code> - <a target="_blank" className="App-link"
            rel="noopener noreferrer" href="https://iterate-ai.notion.site/Product-Idea-Input-Icon-and-Recommendation-441bd15ea0404b6e8bcf3e1ced0090e2">📑 Problem Statement</a>
        </p>
        <a
          className="App-link"
          href="https://github.com/harshkhasbage77/product-idea-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>
          📂 Source Code
          </code>
        </a>
      </header>
      <header className="App-header Web-app">
        <div className='web-app-contianer'>
          <div className='icon-recommendation'>
            <InputField onChildValueChange={handleChildValue} onSubmit={handleSubmit} productIdea={productIdea} />
            <p>
              {/* Parent DEBUG: {productIdea} */}
            </p>
            {/* {productIdea===''?<p></p>:<IconDisplay iconUrl={iconUrl} productIdea={productIdea} />} */}
            <IconDisplay iconUrl={iconUrl} productIdea={productIdea} />
            {/* <img src={iconUrl} /> */}
            {/* console.log(iconUrl); */}

          </div>
          <div className='product-recommendation'>
          
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
