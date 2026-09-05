import { worksData } from '@dataSections/WorksData';
import "@componentsSections/WorksSection/WorksSection.css";

export default function WorksSection() {
    const { header, steps } = worksData;
    const { subtitle, title, description } = header;

    return (
        <section className="works-section" id="how-it-works">
            <div className="works-section__container">
                <div className="works-section__header">
                    <div className="works-section__header-left">
                        <h3 className="works-section__subtitle">{subtitle}</h3>
                        <h2 className="works-section__title">{title}</h2>
                    </div>

                    <div className="works-section__header-right">
                        <p className="works-section__description">{description}</p>
                    </div>
                </div>

                <div className="works-section__cards">
                    {steps.map((item, idx) => (
                        <HowItWorksCard key={idx} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function HowItWorksCard({ number, title, description, image }) {
    return (
        <div className="works-section__card">
            <span className="works-section__card-number">{number}</span>
            <h3 className="works-section__card-title">{title}</h3>
            <p className="works-section__card-description">{description}</p>

            {image && (
                <img src={image.src} alt={image.alt} className="works-section__card-image" />
            )}
        </div>
    );
}