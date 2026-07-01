import { howItWorksData } from '@data/Main/HotItWorksData';
import "@components/section/HotItWorksSection/HotItWorksSection.css";


const { header, steps } = howItWorksData;


export default function HowItWorksData() {
    return (
        <section className="HowItWorksData__section">
            <div className="HowItWorksData__container">
                <div className="HowItWorksData__top">
                    <TopPart/>
                </div>

                <div className="HowItWorksData__bottom">
                    <BottomPart steps={steps}/>
                </div>
            </div>
        </section> 
    );
}


function TopPart() {
    const { subtitle, title, description} = header;

    return (
        <div className="top-part">
            <div className="top-part__left">
                <h3>{subtitle}</h3>
                <h2>{title}</h2>
            </div>
            
            <div className="top-part__right">
                <p>{description}</p>
            </div>
        </div>
    );
}


function BottomPart() {
    return (
        <div className="cards__container">
            {steps.map((item, idx) => (
                <div key={idx} className="card">
                    <span className="number__card">{item.number}</span>
                    <h3 className="title__card">{item.title}</h3>
                    <p className="description__card">{item.description}</p>

                    {item.image && (
                        <img src={item.image.src} alt={item.image.alt} className="card__image"/>
                    )}
                </div>
            ))};
        </div>
    )
}

