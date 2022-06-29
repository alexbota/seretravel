import React from "react";
import { gallery } from "../data/gallery";

function Gallery() {
    return (
        <section className="gallery" id="gallery">
            <h1 className="heading">
                <span>g</span>
                <span>a</span>
                <span>l</span>
                <span>l</span>
                <span>e</span>
                <span>r</span>
                <span>y</span>
            </h1>
            <div className="box-container">
                    {gallery.map(data => {
                        return (
                            <div className="box">
                                <img src={data.image}
                                     alt="" />
                                <div className="content">
                                    <h3>{data.location}</h3>
                                    <p>{data.description}</p>
                                    <a href="#" className="btn">see more</a>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}

export default Gallery