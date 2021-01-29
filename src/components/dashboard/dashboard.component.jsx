import React from 'react'

import './dashboard.styles.css'

import Button from '@material-ui/core/Button';


const Dashboard = () => (
    <div className="dashboard">
            <div className="dashboard--header">

                <div className="dashboard--header--RightSide">

                    <h1> Dashboard </h1>
                    <p> Welcome back our user </p>

                </div>

                <div className="dashboard--header--LeftSide">

                    <Button className="date"> Today: Dec 2</Button>
                    
                </div>

            </div>
            <hr className="headerline"/>

            <div> 
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
                <p>CARDS</p>
            </div>

        </div>
);

export default Dashboard