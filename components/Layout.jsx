import React from "react";
import Header from "../pages/header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const withLayout = props => (
  <div style={layoutStyle}>
    <Header></Header>
    {props.children}
  </div>
);

export default withLayout;
