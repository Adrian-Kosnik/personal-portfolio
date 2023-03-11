import React from "react";

function ProjectCard(props) {
    return (
        <div className="card" style={{width: "18rem", height: "100%"}}>
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                {/* <!-- Button trigger modal --> */}
                <a type="button" class="card-button btn btn-primary button-width" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    {props.title}
                </a>
                <p class="card-text">{props.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;