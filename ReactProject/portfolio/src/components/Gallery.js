import React from "react";
import IMAGES from "../data/images"
import ImageShadhow from "react-image-shadow";
import "react-image-shadow/assets/index.css";

const Gallery = () => {
    return (
        <div>
            {IMAGES.map(imageObject => {
                return <Image src={imageObject.image} desc={imageObject.description} />
            })}
        </div>
    );
}

const Image=({src,desc})=> {
  
    return (
        <div className="gallery">
            <a target="_blank" href={src} rel="noreferrer">
            <ImageShadhow src={src} /> 
            </a>
            <p>{desc}</p>
        </div>
    )
}
export default Gallery;