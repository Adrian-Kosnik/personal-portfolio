import React from "react";

function Background(props) {
    return(
        <div className="Background">
            {props.children}
        </div>
    );
};

export default Background;