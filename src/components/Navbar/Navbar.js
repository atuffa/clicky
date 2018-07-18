import React from "react";
import "./Navbar.css";

const Navbar = props => (
<nav className="navbar navbar-inverse">
  {/* <div className="container-fluid"> */}
    <div className="row">
        <div className="navbar-header col-md-3 text-center" id="center">
            <h3>Clicky Game!</h3>
        </div>
        <ul className="nav navbar-nav col-md-6 text-center">
            <h3>{props.info}</h3>
        </ul>
        <ul className="nav navbar-nav col-md-3">
            <h3>Score: {props.score} | TopScore: {props.topScore}</h3>
        </ul>
    </div>
  {/* </div> */}
</nav>
)

export default Navbar;