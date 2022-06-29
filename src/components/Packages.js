import React from "react";
import { locations } from "../data/locations";

function Packages() {
    console.log(locations);
    return (
        <section className="packages" id="packages">

            <h1 className="heading">
                <span>p</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
                <span>s</span>
            </h1>
            <div className="box-container">
                {locations.map(data => {
                    return (
                        <div className="box">
                        <img src={data.image} alt="" />
                            <div className="content">
                                <h3><i className="fas fa-map-marker-alt"></i>{data.location}</h3>
                                <p>{data.description}</p>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <div className="price"> {data.discount}€ <span>{data.price}€</span></div>
                                <a href="#" className="btn">book now</a>
                            </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Packages;