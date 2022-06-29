import React, {useContext, useState} from "react";
import luggage from "../assets/images/bag.png"
import { GlobalContext } from "../context/GlobalContext";
import {Dialog} from "primereact/dialog";
import { Calendar } from 'primereact/calendar';

function Book() {
    const { bookForm, setBookForm } = useContext(GlobalContext)
    const [display, setDisplay] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBookForm({ ...bookForm,[name]: value });
    }
    console.log(bookForm)
    return (
        <section className="book" id="book">
            <Dialog visible={display} style={{ width: '50vw' }} onHide={() => setDisplay(false)}>
                <h2>Reserve your booking to: {bookForm.place}</h2>
                <p>For {bookForm.guests} guests</p>
                <p>From {bookForm.arrival.toLocaleString()}</p>
                <p>To {bookForm.departure.toLocaleString()}</p>
            </Dialog>
            <h1 className="heading">
                <span>b</span>
                <span>o</span>
                <span>o</span>
                <span>k</span>
                <span className="space"></span>
                <span>n</span>
                <span>o</span>
                <span>w</span>
            </h1>
            <div className="row">

                <div className="image">
                    <img
                        src={luggage}
                        alt="" />
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="inputBox">
                        <h3>where to</h3>
                        <input name="place" value={bookForm.place} onChange={handleChange} type="text" placeholder="place name" />
                    </div>
                    <div className="inputBox">
                        <h3>how many</h3>
                        <input name="guests" value={bookForm.guests} onChange={handleChange} type="number" placeholder="number of guests" />
                    </div>
                    <div className="inputBox">
                        <h3>arrivals</h3>
                        <Calendar id="basic" name="arrival" value={bookForm.arrival} onChange={handleChange} />
                    </div>
                    <div className="inputBox">
                        <h3>leaving</h3>
                        <Calendar id="basic" name="departure" value={bookForm.departure} onChange={handleChange} />
                    </div>
                    <button onClick={() => setDisplay(true)} type="submit" className="btn">Book Now</button>
                </form>
            </div>
        </section>
    )
}

export default Book;