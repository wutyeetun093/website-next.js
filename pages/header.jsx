import React from "react";
import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link a href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link a href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
