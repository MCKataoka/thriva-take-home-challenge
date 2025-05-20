# Thriva Frontend Take-Home Challenge

This project is a solution for the Thriva Frontend Developer take-home challenge. It displays a user's blood test results based on normal ranges and provides sorting functionality.



## Features

- Fetches and displays user blood test results
- Color codes results (red for high, blue for low, green for normal)
- Sortable results by:
    - Alphabetical order
    - Test value
    - Severity (how far outside normal range)
- Highlights when a result has changed status (moved in or out of normal range)

## Technologies Used

- **React**
- **TypeScript**
- **Emotion**
- **Vite**
- **Lucide React**
- **Axios**

## How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/thriva-challenge.git
   cd thriva-take-home-challenge
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

For this project I used Brad Frost's Atomic Design structure, which encourages breaking down componets into its simplest form and building the UI buy bilding those small components.

```
src/
├── modules/
│   ├── @types/
│   │   └── interfaces.ts         # Types used in app
│   ├── components
│   │   ├── atoms/
│   │   │   └── components.tsx    # Styled Components
│   │   ├── molecules/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── ResultCard.tsx    
│   │   ├── organism/
│   │   │   └── Dashboard.tsx     # Result Dashboard
│   ├── helpers  
│   │   └── index.ts              # Utility functions for analyzing results
│   └── styles
│       └── colors.ts             # Color styling
├── services/
│   └── api.ts                    # API service for data fetching
├── App.tsx                       # Main application component
└── main.tsx                      # Entry point
```

## My Approach

### Analysis and Planning

I started by analyzing the requirements and the provided JSON data to understand what needed to be displayed. The key requirements were:

1. Fetch and display test results
2. Color code based on how the result compared to normal range
3. Make results sortable
4. Highlight status changes

Since the test only requires one dasboard, I decided against using a coplex state architecture and opted to keep all of the results in the mains `Dashboard.tsx`

I started by writing the API and making sure that it was pulling the data correctly.

Then I made some basic unstyled components that would display the results. Then definined what helper functions I would need to write, then wrote them and ensured they worked well with the results data.

I finally was ready to create the components. Originally i wrote it all in two files, `Dashboard` and `ResultCard`, but then to clean the code I simplified to the atomic structure. I designed the component structure to be modular and based on an atomic design, so small compoenents can be reused in other features to add to the app.

I tested values and UI throughout, but once everything was built started to more edgecases.



### Technical Decisions

- **React with TypeScript**: Provides a good framework with type safety
- **Emotion CSS**: Chosen for its clean component-oriented styling
- **Axios**: For retrieving data from the mock API
- **State management**: Used React's useState and useEffect hooks for managing component state
- **Vite**: As the build tool for faster development

## Testing

If I were to spend more time I would write some unit tests for the components

I verified the solution works correctly by:

1. Testing with the provided mock data
2. Checking if load or error message appear correctly, if long load time or error in api
3. Ensuring all sorting methods function as expected
4. Changed mock data in Json file to make sure color would change accordingly
5. Validating responsive behavior on different screen sizes

## Time Spent

I spent approximately 7 hours on this exercise:
- About 30 minutes analyzing requirements and planning
- About 30 minutes setting up project
- About 3 hours building the compoenents
- About 2 hours building functionality and API
- About 1 hour testing and documentation

## Future Improvements

With more time, I would add:

1. **Detailed view**: Clicking a result could show detailed history with charts, already wrote a function for it in service
3. **Unit tests**: Add comprehensive test coverage with Jest and Testing Library
4. **State architecture**: Use something like redux to create a more robust state architecture so data is not all in the Dashboard.tsx
5. **Local storage**: Remember user's preferred sort option




