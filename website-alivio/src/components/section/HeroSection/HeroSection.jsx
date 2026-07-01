import { successStoryData } from '@data/Main/HeroData';
import "@components/section/HeroSection/HeroSection.css";

const { section, video } = successStoryData;

export default function HeroSection() {
    return (
        <>
            <section className="heroSection">
                <div className="container">
                    <div className="left__part">
                        <LeftPart/>
                    </div>
                    
                    <div className="right__part">
                        <RightPart/>
                    </div>
                </div>
            </section>
        </>
    );
}


function LeftPart() {
    const { title, description, button } = section;

    return (
        <>
          <h2>{title}</h2>  
          <p>{description}</p>
          <button className="hero-btn">{button.text}</button>
        </>
    );
}


function RightPart() {
    const { thumbnail } = video;

    return (
        <>
            <img src={thumbnail.src} alt={thumbnail.alt} className="hero__img"/>
            <button className="play-button"></button>
        </>
    );
}