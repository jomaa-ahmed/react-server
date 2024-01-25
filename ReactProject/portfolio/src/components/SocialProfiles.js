import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

class SocialProfiless extends React.Component{
    render() {
        return (
             <div style={{textAlign:"center"}}> 
                <h3>Call Me</h3>
                {
                    SOCIAL_PROFILES.map(PROFILE =>{
                        return <SocialProfile SocialProfile={PROFILE}/>
                    })
                }
                
             </div>
        );
    }
}

class SocialProfile extends React.Component{
    render() {
       const{image,link}= this.props.SocialProfile
        return (
             <a href={link}>
                <img src={image} alt="Social" style={{width:"20px",margin:"5px"}}></img>
             </a>
        );
    }
}

export default SocialProfiless;