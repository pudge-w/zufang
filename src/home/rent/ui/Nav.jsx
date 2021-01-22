/* eslint-disable */
import React from 'react';
import { NavBar } from "antd-mobile";

const NavBar1 = (props) => {
  return (
    <div style={{borderBottom: '1px solid #f5f5f5'}}>
      <NavBar
        mode="light"
      >{props.children}</NavBar>
    </div>
  );
}

export default NavBar1;