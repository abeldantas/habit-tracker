import React, { useState } from 'react';

const HabitTracker = () => {
  // Get current date for "Jump to Today" functionality
  const today = new Date();
  
  // State for current month and year
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Names of months and days
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Check if current view is today's month/year
  const isCurrentMonthAndYear = currentMonth === today.getMonth() && currentYear === today.getFullYear();

  // Navigation functions
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToToday = () => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };

  // Function to get number of days in a month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar data for current month
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
    
    // Calculate days from previous month to display
    const daysFromPrevMonth = firstDayOfMonth;
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevMonthYear);
    
    // Start with days from previous month
    let days = [];
    for (let i = 0; i < daysFromPrevMonth; i++) {
      days.push({
        day: daysInPrevMonth - daysFromPrevMonth + i + 1,
        month: prevMonth,
        year: prevMonthYear,
        isCurrentMonth: false
      });
    }
    
    // Add days from current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        month: currentMonth,
        year: currentYear,
        isCurrentMonth: true
      });
    }
    
    // Calculate days from next month to display (to complete the grid)
    const totalDaysDisplayed = Math.ceil(days.length / 7) * 7;
    const daysFromNextMonth = totalDaysDisplayed - days.length;
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    
    // Add days from next month
    for (let i = 1; i <= daysFromNextMonth; i++) {
      days.push({
        day: i,
        month: nextMonth,
        year: nextMonthYear,
        isCurrentMonth: false
      });
    }
    
    // Convert flat array to matrix grouped by week
    const weeks = [];
    let week = [];
    for (let i = 0; i < days.length; i++) {
      week.push(days[i]);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    
    return weeks;
  };

  // Generate calendar data
  const calendarDays = generateCalendarDays();
  
  return (
    <div className="flex flex-col p-4 max-w-4xl mx-auto">
      {/* Header with navigation */}
      <div className="text-center mb-4 print-header">
        <div className="flex justify-between items-center mb-2">
          <button 
            onClick={goToPreviousMonth}
            className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300 transition-colors no-print"
          >
            ←
          </button>
          <div className="flex items-center justify-center w-full">
            <h1 className="text-2xl font-bold">{monthNames[currentMonth].toUpperCase()} {currentYear}</h1>
            {!isCurrentMonthAndYear && (
              <button 
                onClick={goToToday}
                className="ml-2 bg-blue-100 px-2 py-1 text-xs rounded hover:bg-blue-200 transition-colors no-print"
              >
                Today
              </button>
            )}
          </div>
          <button 
            onClick={goToNextMonth}
            className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300 transition-colors no-print"
          >
            →
          </button>
        </div>
        <div className="text-sm mt-1">Habit Tracker</div>
      </div>
      
      {/* Calendar */}
      <div className="border border-gray-300">
        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-gray-300">
          {dayNames.map((day, index) => (
            <div 
              key={index} 
              className={`text-center py-1 font-medium text-sm ${index === 0 || index === 6 ? 'bg-gray-200' : ''}`}
            >
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        {calendarDays.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7">
            {week.map((dayInfo, dayIndex) => (
              <div 
                key={dayIndex} 
                className={`border-r border-b border-gray-300 p-1 
                  ${!dayInfo.isCurrentMonth ? 'bg-gray-100 text-gray-400' : ''} 
                  ${(dayIndex === 0 || dayIndex === 6) && dayInfo.isCurrentMonth ? 'bg-gray-200' : ''} 
                  ${(dayIndex === 0 || dayIndex === 6) && !dayInfo.isCurrentMonth ? 'bg-gray-200 bg-opacity-50' : ''}
                  ${dayIndex === 6 ? 'border-r-0' : ''}
                  ${weekIndex === calendarDays.length - 1 ? 'border-b-0' : ''} aspect-square`}
              >
                <div className="h-24 flex flex-col p-0">
                  {/* Day number */}
                  <div className="text-right font-bold text-sm mb-0.5">{dayInfo.day}</div>
                  
                  {/* Habit tracking layout - 3-row grid with no internal padding */}
                  <div className="grid grid-rows-3 h-full">
                    {/* Weight - full width */}
                    <div className="border border-gray-400 h-full w-full pl-1 flex items-center text-xs">W</div>
                    
                    {/* Fat % - full width */}
                    <div className="border border-gray-400 h-full w-full pl-1 flex items-center text-xs border-t-0">F</div>
                    
                    {/* Checkboxes - 1x3 grid with no internal borders */}
                    <div className="grid grid-cols-3 h-full text-xs border-t-0">
                      {/* Exercise checkbox */}
                      <div className="border border-gray-400 flex items-center justify-center border-r-0">E</div>
                      
                      {/* Rest checkbox */}
                      <div className="border border-gray-400 flex items-center justify-center border-r-0">R</div>
                      
                      {/* Calories checkbox */}
                      <div className="border border-gray-400 flex items-center justify-center">C</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Simple Year/Month Selector - Hide when printing */}
      <div className="flex justify-center my-3 no-print">
        <div className="flex items-center">
          <label htmlFor="yearSelect" className="mr-2">Year:</label>
          <select 
            id="yearSelect" 
            value={currentYear}
            onChange={(e) => setCurrentYear(parseInt(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1"
          >
            {Array.from({ length: 20 }, (_, i) => currentYear - 5 + i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center ml-4">
          <label htmlFor="monthSelect" className="mr-2">Month:</label>
          <select 
            id="monthSelect" 
            value={currentMonth}
            onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1"
          >
            {monthNames.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Legend - Only show when printing */}
      <div className="bg-gray-100 p-3 my-4 text-sm print-only">
        <div className="font-bold mb-2">Legend:</div>
        <div className="flex flex-wrap gap-6 mb-3">
          <div><strong>W</strong>: Weight</div>
          <div><strong>F</strong>: Fat %</div>
          <div><strong>E</strong>: Exercise ☐</div>
          <div><strong>R</strong>: Rest ☐</div>
          <div><strong>C</strong>: Calories Tracked ☐</div>
        </div>
      </div>
      
      {/* Example and Documentation - Hide when printing */}
      <div className="bg-gray-100 p-3 my-4 text-sm no-print">
        <div className="font-bold mb-2">Legend:</div>
        <div className="flex flex-wrap gap-6 mb-3">
          <div><strong>W</strong>: Weight</div>
          <div><strong>F</strong>: Fat %</div>
          <div><strong>E</strong>: Exercise ☐</div>
          <div><strong>R</strong>: Rest ☐</div>
          <div><strong>C</strong>: Calories Tracked ☐</div>
        </div>

        <div className="font-bold mb-2">Example:</div>
        <div className="flex items-start gap-4">
          <div className="border border-gray-400 w-24 aspect-square bg-white">
            <div className="text-right font-bold text-sm p-0.5">7</div>
            <div className="grid grid-rows-3 h-5/6">
              <div className="border border-gray-400 h-full pl-1 flex items-center text-xs">W <span className="ml-2">79.5kg</span></div>
              <div className="border border-gray-400 h-full pl-1 flex items-center text-xs border-t-0">F <span className="ml-2">13.2%</span></div>
              <div className="grid grid-cols-3 h-full text-xs border-t-0">
                <div className="border border-gray-400 flex items-center justify-center border-r-0">E <span className="ml-1">✓</span></div>
                <div className="border border-gray-400 flex items-center justify-center border-r-0">R <span className="ml-1">✓</span></div>
                <div className="border border-gray-400 flex items-center justify-center">C <span className="ml-1">✗</span></div>
              </div>
            </div>
          </div>
          <div className="text-xs">
            <p className="mb-1"><strong>Weight:</strong> Record your weight in kg or lbs (e.g., 79.5)</p>
            <p className="mb-1"><strong>Fat %:</strong> Record your body fat percentage (e.g., 13.2%)</p>
            <p className="mb-1"><strong>Exercise:</strong> Mark with ✓ if you exercised that day</p>
            <p className="mb-1"><strong>Rest:</strong> Mark with ✓ if you got proper rest/went to bed early</p>
            <p className="mb-1"><strong>Calories:</strong> Mark with ✓ if you tracked your calories that day</p>
          </div>
        </div>
        
        <div className="text-xs mt-4 text-gray-600">
          <p>Print this page and track your daily habits. Fill in your weight and body fat percentage in their respective fields. For exercise, rest, and calorie tracking, mark a checkmark (✓) when completed or an X when not completed/skipped.</p>
        </div>
      </div>
      
      {/* Notes section */}
      <div className="border border-gray-300 p-2 print-notes mt-4">
        <div className="font-bold text-sm mb-1">Notes:</div>
        <div className="border-t border-gray-300 pt-1 h-20"></div>
      </div>
    </div>
  );
};

export default HabitTracker;