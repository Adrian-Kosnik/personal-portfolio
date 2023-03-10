import React from "react";

function ProjectCard(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                {/* <!-- Button trigger modal --> */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    {props.title}
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{props.title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src={props.image} />
                        <p>{props.description}</p>
                        {/* <p>{props.technology.one}</p> */}
                    </div>
                    </div>
                </div>
                </div>
                {/* <a><h5 className="card-title">{props.title}</h5></a> */}
                {/* <p className="card-text">{props.description}</p> */}
                {/* <a href={props.liveGithub} target="blank" className="btn btn-primary">Check it!</a> */}
            </div>
        </div>
    );
};

export default ProjectCard;