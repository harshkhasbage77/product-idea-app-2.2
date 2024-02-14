import React from 'react';

const IconDisplay = ({ iconUrl, productIdea }) => {
    console.log(iconUrl);
    console.log(productIdea);    

  return (
    <div className='icon-display'>
        <div className='left'>
          Icon Recommendation:
        </div>
      {/* <p>{iconUrl+"900x900/?"+productIdea}</p> */}
      <div className='right'>
        {
        productIdea==""
        ?
        <p></p>
        :
        <img className='generated-icon' src={iconUrl+"200x200/?"+productIdea} alt="Category Icon" />
        }
      </div>
    </div>
  );
};

export default IconDisplay;
