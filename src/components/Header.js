import React, {useState} from "react";
import {Dialog} from "primereact/dialog";

function Header() {
    const [display, setDisplay] = useState(false);

    return (
        <>
            <Dialog visible={display} style={{ width: '50vw' }} onHide={() => setDisplay(false)}>
                <div className="login-form-container">
                    <i className="fas fa-times" id="form-close"></i>
                    <form action="">
                        <h3>sign-in</h3>
                        <input type="email" className="box" placeholder="enter your email" />
                        <input type="password" className="box" placeholder="enter your password" />
                        <input type="submit" value="sign-in now" className="btn" />
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">remember me</label>
                        <p>forget password? <a href="#">click here</a></p>
                        <p>don't have an account? <a href="#">register now</a></p>
                    </form>
                </div>
            </Dialog>
            <header>
                <div id="menu-bar" className="fas fa-bars"/>
                <a href="#" className="logo"><span>Sere</span>Travel</a>
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#book">Book</a>
                    <a href="#packages">Packages</a>
                    <a href="#services">Services</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#review">Review</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="icons">
                    <i className="pi pi-search"/>
                    <button className="basic-button" onClick={() => setDisplay(true)}>
                        <i className="pi pi-user"/>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;