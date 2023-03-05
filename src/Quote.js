import React from 'react';

const Quote = ({ quote }) => {
  return (
    <>
      <div className='quote-text' id='text'><i className="fa fa-quote-left"> </i>&nbsp;<span>{quote.content}</span></div>
      <div className='quote-author' id='author'>- {quote.author}</div>
    </>
  );
};

export default Quote;