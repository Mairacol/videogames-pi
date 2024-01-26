// src/components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './modules/LandingPage.module.css'; // Importa el CSS modular

const LandingPage = () => {
    return (
        <div className={styles['landing-page']}>
            <div className={styles['background-image']}>
    
            </div>
            <Link to="/home" className={styles['link-button']}>Ingresar</Link>
        </div>
    );
};

export default LandingPage;
