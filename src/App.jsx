/* All the imports need for the file to run successfully */
import React from 'react';
import Gallery from './Gallery';

function App() {
  return (
    /* Main div with an App className */
    <div className="App">
      <header>
        <h1>Tour Comparison App</h1>
      </header>
      {/* Rendring the imported gallery component */}
      <Gallery />
    </div>
  );
}

export default App;
