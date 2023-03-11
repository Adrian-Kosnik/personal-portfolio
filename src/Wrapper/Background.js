import React from "react";

function Background(props) {
    return(
        <div className="background-container">
            <div className="Background col-9">
                {props.children}
            </div>
        </div>
    );
};

export default Background;