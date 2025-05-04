import React from 'react';

const MayHabitTracker = () => {
  // May 2025 starts on a Thursday
  // Sunday is first day of week per requirements
  const days = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31]
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="flex flex-col p-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">MAY 2025</h1>
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
        {days.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7">
            {week.map((day, dayIndex) => (
              <div 
                key={dayIndex} 
                className={`border-r border-b border-gray-300 p-1 ${day ? '' : 'bg-gray-100'} 
                  ${(dayIndex === 0 || dayIndex === 6) && day ? 'bg-gray-200' : ''} 
                  ${dayIndex === 6 ? 'border-r-0' : ''}
                  ${weekIndex === 4 ? 'border-b-0' : ''} aspect-square`}
              >
                {day && (
                  <div className="h-24 flex flex-col p-0">
                    {/* Day number */}
                    <div className="text-right font-bold text-sm mb-0.5">{day}</div>
                    
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
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Legend and Examples */}
      <div className="bg-gray-100 p-3 my-4 text-sm">
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
      </div>
      
      {/* Notes section */}
      <div className="border border-gray-300 p-2">
        <div className="font-bold text-sm mb-1">Notes:</div>
        <div className="border-t border-gray-300 pt-1 h-20"></div>
      </div>
      
      {/* Print instructions */}
      <div className="mt-4 text-xs text-gray-600">
        <p>Print this page and track your daily habits. Fill in your weight and body fat percentage in their respective fields. For exercise, rest, and calorie tracking, mark a checkmark (✓) when completed or an X when not completed/skipped.</p>
      </div>
    </div>
  );
};

export default MayHabitTracker;