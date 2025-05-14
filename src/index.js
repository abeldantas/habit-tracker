import React from 'react';
import ReactDOM from 'react-dom';
import HabitTracker from './HabitTracker';
import VisitCounter from './VisitCounter';

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
    padding-top: 1.5rem !important;
  }
  
  /* Hide elements with no-print class when printing */
  .no-print {
    display: none !important;
  }
  
  /* Only show elements with print-only class when printing */
  .print-only {
    display: block !important;
  }
  
  /* Center title in print view */
  .print-header {
    text-align: center !important;
    margin-top: 2rem !important;
    margin-bottom: 1.5rem !important;
  }
  
  .print-header h1 {
    width: 100% !important;
    text-align: center !important;
  }
  
  /* Add margin above notes in print view */
  .print-notes {
    margin-top: 2rem !important;
  }
}

/* Hide print-only elements when not printing */
.print-only {
  display: none !important;
}
`;

const App = () => {
  return (
    <div className="print-wrapper">
      <style>{styles}</style>
      <HabitTracker />
      <VisitCounter />
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