import React from 'react';
import PropTypes from 'prop-types';

const SocialButtons = ({ quote }) => {
  const tweet = `https://twitter.com/intent/tweet?text="${quote.content} - ${quote.author}"`;
  return (
    <div className="social">
      <a className="button" id="tweet-quote" aria-label="twitter" href={tweet} target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter" /></a>
    </div>
  );
};
SocialButtons.propTypes = {
  quote: PropTypes.shape({
    content: PropTypes.string,
    author: PropTypes.number,
  }).isRequired,
};
export default SocialButtons;
