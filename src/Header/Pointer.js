import React from "react";

function Pointer() {
    return (
        <div className="outerPointerContainer">
            <PointerDiv href="/" />
            <PointerDiv href="/ProjectGallery"/>
            <PointerDiv href="/Contact"/>
        </div>
    );
};

function PointerDiv({ href, ...props }) {
    const path = window.location.pathname
    return <div id="pointer" href={href} {...props} className={path === href ? "active" : "not-active"}></div>
};
 
export default Pointer;