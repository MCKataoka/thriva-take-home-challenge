import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create root element if it doesn't exist
const rootElement = document.getElementById('root') || document.createElement('div');
if (!rootElement.id) {
    rootElement.id = 'root';
    document.body.appendChild(rootElement);
}

// Create React root and render app
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);