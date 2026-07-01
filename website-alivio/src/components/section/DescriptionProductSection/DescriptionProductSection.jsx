import { productData } from '@data/Main/DescriptionData';
import "@components/section/DescriptionProductSection/DescriptionProductSection.css";

const { subtitle, title, description, button, image } = productData

export default function DescriptionProductSection() {
    return (
        <>
            <section className="DescriptionSection">
                <div className="description__container">
                    <div className="left__part">
                        <LeftPart/>
                    </div>

                    <div className="right__part">
                        <RightPart/>
                    </div>
                </div>
            </section>
        </>
    )
};

function LeftPart() {
    return (
        <>
         <img src={image.src} alt={image.alt} className="description__img"/>
        </>
    )
}

function RightPart() {
    return (
        <>
            <span className="description__subtitle">{subtitle}</span>
            <h2 className="description__title">{title}</h2>
            <p className="description__text">{description}</p>
            <button className="product-btn">{button.text}</button>
        </>
    )
}