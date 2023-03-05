import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Quote from './Quote';
import SocialButtons from './SocialButtons';

const App = () => {
  const [quote, setQuote] = useState(null);
  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data);
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div id="quote-box">
        {quote && <Quote quote={quote} />}
        <div className="buttons">
          {quote && <SocialButtons quote={quote} />}
          <button className="button" type="button" id="new-quote" onClick={() => fetchQuote()}>New quote</button>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default App;
