import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MainLayout extends Component {
  constructor(props, context) {
    super(props, context);

    this.props = props;
  }

  render() {
    const { children, staticContext, ...others } = this.props;

    return (
      <div>
        <div
          style={{
            width: "100%",
            backgroundColor: "lightgrey",
            height: "40px"
          }}
        >
          <div
            style={{
              position: "relative",
              top: "50%",
              transform: "translateY(-50%)",
              a: {
                textDecoration: "none"
              }
            }}
          >
            <div
              style={{
                float: "right"
              }}
            >
              <NavLink to="/locale">Localization</NavLink>
            </div>
            <div
              style={{
                float: "right",
                marginRight: "10px"
              }}
            >
              <NavLink to="/theme">Theme</NavLink>
            </div>
            <div
              style={{
                float: "right",
                marginRight: "10px"
              }}
            >
              <NavLink to="/github">GitHub</NavLink>
            </div>
            <div
              style={{
                float: "right",
                marginRight: "10px"
              }}
            >
              <NavLink to="/fizzbuzz">Fizz Buzz</NavLink>
            </div>
          </div>
        </div>
        <div {...others}>{children}</div>
      </div>
    );
  }
}

MainLayout.propTypes = {};

export default MainLayout;
