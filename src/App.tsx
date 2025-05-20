import React from 'react';
import { Global, css } from '@emotion/react';
import Dashboard from "./modules/components/organism/Dashboard.tsx";



const App: React.FC = () => {
    return (
        <>
            <Global styles={globalStyles} />
            <Dashboard />
        </>
    );
};

const globalStyles = css`
  html, body {
    font-family: "Inter", system-ui, -apple-system, sans-serif;
    background-color: #f9fafb;
    color: #111827;
  }
  
`;

export default App;