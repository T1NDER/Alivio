import { successStoryData } from '@dataSections/SuccessStoryData';
import "@componentsSections/SuccessStory/SuccessStory.css";

export default function SuccessStorySection() {
    const { section, video } = successStoryData;
    const { title, description, button } = section;
    const { thumbnail } = video;

    return (
        <section className="success-story" id="success-story">
            <div className="success-story__container">
                <div className="success-story__content">
                    <h2 className="success-story__title">{title}</h2>
                    <p className="success-story__description">{description}</p>
                    <button className="success-story__button">
                        {button.text}
                    </button>
                </div>

                <div className="success-story__video-wrapper">
                    <img 
                        src={thumbnail.src} 
                        alt={thumbnail.alt} 
                        className="success-story__image"
                    />
                    <button className="success-story__play-btn"></button>
                </div>
            </div>
        </section>
    );
}