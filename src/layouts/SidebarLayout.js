import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import MainLayout from "./MainLayout";

class SidebarLayout extends Component {
  constructor(props, context) {
    super(props, context);

    this.props = props;
  }

  render() {
    const { children, ...others } = this.props;

    return (
      <MainLayout {...others}>
        <div
          style={{
            float: "left",
            height: "100vh",
            backgroundColor: "lightgrey",
            width: "20%"
          }}
        >
          <NavLink to="/">Home</NavLink>
        </div>
        <div
          style={{
            float: "left",
            marginLeft: "20px",
            width: "70vw",
            height: "100vh"
          }}
        >
          {children}
        </div>
      </MainLayout>
    );
  }
}

SidebarLayout.propTypes = {};

export default SidebarLayout;
