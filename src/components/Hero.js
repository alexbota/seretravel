import React, {useEffect, useRef, useState} from "react"
import {slideshow} from "../data/slideshow";

export function Hero() {
    const [currentVideo, setCurrentVideo] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        ref.current.load();
    }, [currentVideo])

    return (
        <div style={{ display: "flex", flexDirection: "column",  alignItems: "center", justifyContent: "center" }} className="slideshow-container">
            <div style={{ zIndex: "100", textAlign: "center" }}>
                <h1>DISCOVER OUR PLANET</h1>
                <p>Travel To New Places With Us, And Make Endless Memories</p>
                <a href="#gallery" type="submit" className="btn" value="book now">Discover More</a>
                <div className="controls">
                    <button className={`${currentVideo === 0 ? "vid-btn" :  "vid-btn active" }`} onClick={() => setCurrentVideo(0)}/>
                    <button className={`${currentVideo === 1 ? "vid-btn" :  "vid-btn active" }`} onClick={() => setCurrentVideo(1)}/>
                    <button className={`${currentVideo === 2 ? "vid-btn" :  "vid-btn active" }`} onClick={() => setCurrentVideo(2)}/>
                    <button className={`${currentVideo === 3 ? "vid-btn" :  "vid-btn active" }`} onClick={() => setCurrentVideo(3)}/>
                    <button className={`${currentVideo === 4 ? "vid-btn" :  "vid-btn active" }`} onClick={() => setCurrentVideo(4)}/>
                </div>
            </div>
            <video style={{ width: "100vw", height: "80vh", objectFit: "cover", position: "absolute" }} ref={ref} muted autoPlay playsInline loop>
                <source src={slideshow[currentVideo].video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Hero