import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Cambiamos Switch por Routes
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';

const App = () => {
    return (
        <Router>
            <Routes> {/* Cambiamos Switch por Routes */}
                <Route path="/" element={<LandingPage />} /> {/* Usamos element en lugar de component */}
                <Route path="/home" element={<HomePage />} /> {/* Usamos element en lugar de component */}
            </Routes> {/* Cerramos Routes */}
        </Router>
    );
};

// Utiliza createRoot para iniciar la renderización de la aplicación
const root = createRoot(document.getElementById('root'));

// Renderiza tu aplicación dentro de createRoot
root.render(<App />);
