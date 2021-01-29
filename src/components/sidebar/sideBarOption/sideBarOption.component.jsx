import React from 'react';

import './sideBarOption.styles.css';


const SideBarOption = ({text, Icon}) => (
        <div className="sidebar--item">
         {Icon && <Icon className="sidebarOption--icon"/> }
          <h3> {text} </h3>
        </div>
);

export default SideBarOption;