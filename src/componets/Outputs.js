import React from 'react'

export default function Outputs(props){

    return(
        <div className="outputs-container">
            <div className="g-meme">
                <p className="out-question"></p>
                <img src={require(`../images/${props.img}`)} alt=""  />
                <p className="out-answer"></p>
            </div>
        </div>
    )
}