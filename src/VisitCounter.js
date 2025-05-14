import React, { useEffect, useState } from 'react';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Get the current count from localStorage
    const currentCount = localStorage.getItem('visitCount') || 0;
    // Increment it
    const newCount = parseInt(currentCount) + 1;
    // Save it back to localStorage
    localStorage.setItem('visitCount', newCount);
    // Update state
    setVisitCount(newCount);
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-white p-2 rounded shadow no-print">
      Visits: {visitCount}
    </div>
  );
};

export default VisitCounter;