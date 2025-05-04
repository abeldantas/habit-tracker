import React from 'react';
import ReactDOM from 'react-dom';
import MayHabitTracker from './may2025';

// Basic CSS could be added here or in a separate file
const styles = `
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media print {
  body {
    background: none;
  }
  
  .print-wrapper {
    width: 100%;
    max-width: none;
  }
}
`;

const App = () => {
  return (
    <div className="print-wrapper">
      <style>{styles}</style>
      <MayHabitTracker />
    </div>
  );
};

// Mount the App to your DOM
// This is for React 17+, modify accordingly for your React version
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;