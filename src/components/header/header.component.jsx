import React from 'react';

import './header.styles.css';

// List of Material Icons 
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/Message';
import Avatar from '@material-ui/core/Avatar';

// import images from static/assets
import Logo from '../../static/logo.jpg';
import profilePic from '../../static/avatar1.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header--content">
                <div className="header--content--rightSide">

                    <MessageIcon className="headerIcons" />
                    <NotificationsNoneIcon className="headerIcons"/>
                    <Avatar src={profilePic} className="headerIcons"/>

                </div>
            </div>
            

        </div>
        
    )
}


export default Header;