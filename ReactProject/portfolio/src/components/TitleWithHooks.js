import { Component } from "@angular/core";
import React, { useEffect, useState } from "react";

const TITLES = [
  "a software enginner",
  "a football lover",
  "an enthusiastic learner",
];

const TitleWithHooks = () => {

    const[titleIndex,seTitleIndex] = useState(0);
    const[fadeIn,seTitfadeIn] = useState(true);


   
    useEffect(()=>{
        let Timeout=null;
        let titleInterval= null;
    
        setInterval(()=>{
            const titleIndex = (this.state.titleIndex+1) % TITLES.length;
           this.setState({titleIndex,fadeIn:true})     
        },4000);
    this.animateTtitles();
        setTimeout(()=>{
           this.setState({fadeIn:false})     
        },2000)
    },[titleIndex]);

  return (
    <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
      Iam {TITLES[titleIndex]}
    </p>
  );
};

export default TitleWithHooks;
