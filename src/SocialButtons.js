import React from 'react';

const SocialButtons = ({ quote }) => {
    const tweet = `https://twitter.com/intent/tweet?text="${quote.content} - ${quote.author}"`
  return (
    <div className='social'>
      <a className='button' id='tweet-quote' href={tweet} target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
    </div>
  );
};

export default SocialButtons;