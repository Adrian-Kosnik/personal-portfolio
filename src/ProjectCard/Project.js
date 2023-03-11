import React from "react";

function ProjectCard(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                {/* <!-- Button trigger modal --> */}
                <button type="button" class="btn btn-primary button-width" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    {props.title}
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;