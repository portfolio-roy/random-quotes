import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote }) => (
  <>
    <div className="quote-text" id="text">
      <i className="fa fa-quote-left"> </i>
&nbsp;
      <span>{quote.content}</span>
    </div>
    <div className="quote-author" id="author">
      -
      {quote.author}
    </div>
  </>
);

Quote.propTypes = {
  quote: PropTypes.shape({
    content: PropTypes.string,
    author: PropTypes.number,
  }).isRequired,
};
export default Quote;
