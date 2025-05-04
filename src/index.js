import React from 'react';
import ReactDOM from 'react-dom';
import HabitTracker from './HabitTracker';

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
  
  /* Hide navigation controls when printing */
  .no-print {
    display: none !important;
  }
}
`;

const App = () => {
  return (
    <div className="print-wrapper">
      <style>{styles}</style>
      <HabitTracker />
    </div>
  );
};

// Mount the App to your DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;