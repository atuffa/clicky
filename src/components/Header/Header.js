import React from "react";
import "./Header.css"

const Header = (props) => (
    <div className="container-fliud header center-block">
        {props.children}
    </div>
);

export default Header;