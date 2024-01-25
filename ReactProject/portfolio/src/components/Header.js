import React from "react";
import {Link} from "react-router-dom"

const Header=()=> {
    const style = {display:"inline-block",margin:"10px",marginBottom:"30px"}
    return(
        <div>
            <div>
                <h3 style={style}>
                    <Link to="/">Home</Link>
                </h3>
                <h3 style={style}>
                    <Link to="/amthal">amthal</Link>
                </h3>
                <h3 style={style}>
                    <Link to="/gallery">gallery</Link>
                </h3>
            </div>
        </div>
    )
}

export default Header;