import React from 'react';

export default function Project(props){
    return(
        <a className="card" href={props.deployment}>
            <div>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-desc">{props.desc}</p>                               
            </div>        
            <img className="card-img" src={require(`../../assets/${props.img}`)} alt={props.title}/>
        </a>
    );
};
