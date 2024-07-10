import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AnimatePresence>
            <Router>
                <App />
            </Router>
        </AnimatePresence>
    </React.StrictMode>
);