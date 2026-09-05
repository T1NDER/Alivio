import { productData } from '@dataSections/DescriptionData';
import "@componentsSections/DescriptionSection/DescriptionSection.css";

export default function DescriptionSection() {
    const { subtitle, title, description, button, image } = productData;

    return (
        <section className="description-section" id="product">
            <div className="description-section__container">
                <div className="description-section__image-wrapper">
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="description-section__image"
                    />
                </div>

                <div className="description-section__content">
                    <span className="description-section__subtitle">{subtitle}</span>
                    <h2 className="description-section__title">{title}</h2>
                    <p className="description-section__text">{description}</p>
                    <button className="description-section__button">
                        {button.text}
                    </button>
                </div>
            </div>
        </section>
    );
}