import React from "react";
import "./Shake.css"
const Shake = props => (
<div className= {props.shake?'shake':''}>
    {props.children}
</div>
)

export default Shake;