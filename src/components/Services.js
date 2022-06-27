import React from "react";

function Services() {
    return (
        <section className="services" id="services">
            <h1 className="heading">
                <span>s</span>
                <span>e</span>
                <span>r</span>
                <span>v</span>
                <span>i</span>
                <span>c</span>
                <span>e</span>
                <span>s</span>
            </h1>
            <div className="box-container">
                <div className="box">
                    <i className="fas fa-hotel"></i>
                    <h3>accomodations</h3>
                    <p>Due to our partnerships with hotels and apartemnts around the world, we have the most affordable
                        stays on the market!</p>
                </div>
                <div className="box">
                    <i className="fas fa-utensils"></i>
                    <h3>meals</h3>
                    <p>Depending on the packages which are in selection, meals can be booked accordingly and maybe
                        included.</p>
                </div>
                <div className="box">
                    <i className="fas fa-bullhorn"></i>
                    <h3>safty protocol</h3>
                    <p>The safety of our clients is our top priority, that's why each package includes a travel
                        insurance for each person. For details click here.</p>
                </div>
                <div className="box">
                    <i className="fas fa-globe-europe"></i>
                    <h3>our world</h3>
                    <p>At the moment we have our biggest focuses on Europe, Asia and North America, and we are expanding
                        to new locations each month!</p>
                </div>
                <div className="box">
                    <i className="fas fa-plane"></i>
                    <h3>fastest travel</h3>
                    <p>We mainly offer the fastest source of travel, which is flying and our partner companies, are
                        world leading in their territory!</p>
                </div>
                <div className="box">
                    <i className="fas fa-hiking"></i>
                    <h3>adventures await</h3>
                    <p>Besides the accomodations and transport, in our packages we also include activities on the daily
                        basis while on vacation, including hikes, festivals, events etc.</p>
                </div>
            </div>
        </section>
    )
}

export default Services;