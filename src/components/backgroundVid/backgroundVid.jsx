import React from 'react'
import backVid from "../video/slowdancingInTheDark.mp4"
import "./backgroundVid.css"
import { useHistory } from 'react-router-dom'

export default function BackgroundVideo(){
    
        const history = useHistory();
        
        const handleRoute = () =>{
            history.push('/home/explore')
        }

    return (
        <div>
            <video autoPlay loop muted playsInline
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1",
                overflow: 'hidden'
            }}
             >
                <source src = {backVid} type='video/mp4'/>
            </video>
            <div className="top-div"/>
            <div className="artistnameContainer">
            <div className="positionArtistName" onClick={handleRoute}>
                Explore Joji
            </div>
            </div>
        </div>
    )
}


