import React from "react";
import first from "../assets/first.jpg"
import COURSES from "../data/courses";

const Courses = () => {
    return (
        <div>
            <h2>My Courses</h2>

            <div>
               {
                COURSES.map(COURSE => {
                    return <Course course={COURSE}/>
                })
               }
            </div>
        </div>
    )
}

const Course = (props) => {
     let temp = props.course;

    /*let title = props.course.title;
    let description = props.course.description;
    let image = props.course.image;
    let link = props.course.link; */

    const {title,description,image,link} = props.course;
    console.log(temp);
    return (
        <div className="card">
        <img  src={temp.image} alt="course" style={{width:"100%"}}></img>
        <h3 style={{color:"grey",fontSize:"20px"}}>{title}</h3>
        <p style={{fontSize:"17",padding:"4px"}}>{description}</p>
        <button onClick={()=>{
            window.location.href= link;
        }}>Enroll</button>
    </div>
    )
}
export default Courses;