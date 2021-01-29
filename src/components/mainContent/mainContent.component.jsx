import React from 'react';

import './mainContent.styles.css'

import Header from '../header/header.component';

import Dashboard from '../dashboard/dashboard.component';

const MainContent = () => (

    <div className="mainContent">

        <Header />

        <Dashboard />
    </div>

);

export default MainContent;