import React from 'react'
import WordScrambleMain from './components/wordScrambleMain';

function App() {
  return (
    <div>
      <div className="links">
        <span className="links-item">
          <a href="https://tatoeba.org/">Tatoeba.org</a>
        </span>
        <span className="links-item">
          <a href="https://github.com/marcelostockle">GitHub Repository</a>
        </span>
      </div>
      <div className="header">
        <span className="header-title">CUSTOM TATOEBA UTILITIES</span>
      </div>
      <WordScrambleMain/>
    </div>
  );
}

export default App;