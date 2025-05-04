# Habit Tracker

A customizable habit tracker calendar for tracking health and fitness habits.

## Features

- Interactive calendar view for any month and year
- Month and year navigation with minimal UI
- Track daily:
  - Weight
  - Body fat percentage
  - Exercise completion
  - Rest/early bedtime
  - Calorie tracking
- Weekend highlighting
- Display of days from adjacent months for complete weeks
- Printable design
- Responsive layout

## Live Demo

Visit the live demo at [https://abeldantas.github.io/habit-tracker](https://abeldantas.github.io/habit-tracker)

## Usage

This habit tracker is designed to be printed and filled in by hand. Each day contains:

- Fields for recording weight and body fat percentage
- Checkboxes for marking completed habits (exercise, rest, calorie tracking)

### Example

The calendar includes a visual example of how to fill in the tracker:
- Record weight (e.g., "79.5kg")
- Record body fat percentage (e.g., "13.2%")
- Mark completed habits with a checkmark (✓)
- Mark skipped habits with an X

### Print Tips

For optimal printing:
- Use Chrome or Edge for best results
- In the print dialog, select "More settings" and disable "Headers and footers"
- Select "Background graphics" to ensure all elements print correctly

## Development

This project is built with React and uses Tailwind CSS for styling.

### Running Locally

To run this project locally:

1. Clone the repository:
   ```
   git clone git@github.com:abeldantas/habit-tracker.git
   cd habit-tracker
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser to http://localhost:3000

### Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the main branch.

To manually deploy:

```
npm run deploy
```

### Future Improvements

- Save and load habit data
- Add customizable habit fields
- Create digital version for online tracking
- Add data visualization for progress tracking

## License

This project is licensed under the [CC BY-NC-SA 4.0 License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

### License Terms

- **Attribution** — You must give appropriate credit to Abel Dantas, provide a link to the license, and indicate if changes were made.
- **NonCommercial** — You may not use the material for commercial purposes.
- **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

See the [LICENSE](./LICENSE) file for more details.
