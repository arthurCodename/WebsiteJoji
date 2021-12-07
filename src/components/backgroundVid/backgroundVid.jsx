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
        <div className="full-screen-video-container">
            <video autoPlay loop muted playsInline
         
             >
                <source src = {backVid} type='video/mp4'/>
            </video>
            <div className="full-screen-video-content" onClick={handleRoute}>Explore Joji </div>
        </div>
    )
}


