import React from "react";
import styles from "./style.css";

const Block = (props) => {
    return (
        <div className="block">
            {props.child}
        </div>
    );
}

export default Block;