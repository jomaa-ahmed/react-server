import { Component } from "@angular/core";
import React from "react";


const TITLES=[
    "a software enginner",
    "a football lover",
    "an enthusiastic learner"
]

class Title extends React.Component{

    constructor(){
        super();
        this.state={titleIndex:0,fadeIn:true};
    }

    

    render() {
        return (
             <p className={this.state.fadeIn ? "title-fade-in" : "title-fade-out"}>
                Iam {TITLES[this.state.titleIndex]}
             </p>
        );
    }

    animateTtitles(){

        setInterval(()=>{
            const titleIndex = (this.state.titleIndex+1) % TITLES.length;
           this.setState({titleIndex,fadeIn:true})     
        },4000)

    }

    // memory managment (destory)
    componentWillUnmount(){
        clearInterval();
        clearTimeout();
    }

    //inset into DOM
    componentDidMount(){
        this.animateTtitles();
        setTimeout(()=>{
           this.setState({fadeIn:false})     
        },2000)
    }
}



export default Title;