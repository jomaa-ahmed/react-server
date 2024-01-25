import React,{Component} from "react";

class Amthal extends Component{

    constructor(){
        super();
        this.state= {mathal:{}};
    }

componentDidMount(){
    fetch("http://localhost:3005/amthal/random")
    .then(response => (response.json())
    .then(json=> this.setState({mathal:json}))
    )
}

    render() {
        return (
            <div>
             <h2>Today's Amthal</h2>
             <p>{this.state.mathal.title}</p>
             </div>
        );
    }
}

export default Amthal;