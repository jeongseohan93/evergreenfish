import React, { useEffect, useState } from 'react';
import '../styles/SlideText.css';

const keywords = ["맛집", "카페", "노트북", "원룸", "알바"];

function SlideText() {
    const [ index, setIndex ] = useState(0);
    const [ slide, setSlide ] = useState(false);

    useEffect(()=> {
        const interval = setInterval(()=>{
            setSlide(true);
            setTimeout(()=>{
                setIndex((prev) => (prev + 1) % keywords.length);
                setSlide(false);
            }, 400);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className={`slide-text ${slide ? "slide" : ""}`}>
            {keywords[index]}
        </span>
    );

}

export default SlideText;