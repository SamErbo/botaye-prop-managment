import React from 'react'

import './sidebar.styles.css'

// Material UI Icons 
import HomeIcon from '@material-ui/icons/Home';

import DashboardIcon from '@material-ui/icons/Dashboard';

import GroupIcon from '@material-ui/icons/Group';

import PaymentIcon from '@material-ui/icons/Payment';
// Components list
import SideBarOption from './sideBarOption/sideBarOption.component'


const SideBar = () => {
    return (
        <div className="sidebar--container">

            <div className="sidebar--header">
                <h4> Botaye </h4>
            </div>

            <div className="sidebar--body">
                <SideBarOption text="Dashboard" Icon={DashboardIcon}/>

                <SideBarOption text="Rooms" Icon={HomeIcon}/>

                <SideBarOption text="Tenants" Icon={GroupIcon}/>

                <SideBarOption text="Payments" Icon={PaymentIcon}/>
            </div>
            
        </div>
    )
}

export default SideBar