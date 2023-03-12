import React from "react";

function ProjectCard(props) {
    return (
        <div className="card" style={{width: "18rem", height: "100%"}}>
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <a href={props.liveGithub} target="blank" type="button" class="card-button btn btn-primary button-width">
                    {props.title}
                </a>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;