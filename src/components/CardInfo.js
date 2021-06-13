import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

function CardInfo(props) {
    return (
        <div className="project-card-info">
            <p className="project-card-title">{props.projectTitle}</p>
            <p className="project-card-subtitle">{props.subTitle}</p>
            <div className="project-card-role">{props.roles}</div>
            <div className="project-card-type">{props.type}</div>
            <Link className="nav-link" to={props.path}></Link>
        </div>
    )
}

export default CardInfo;