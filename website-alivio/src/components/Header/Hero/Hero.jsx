import { heroData } from '@data/Hero/HeroData';
import "@components/Header/Hero/Hero.css";

export default function Hero() {
    const { title, description, button } = heroData;

    return (
        <section className="hero-section" id="home">
            <div className="hero-section__container">
                <div className="hero-section__content">
                    <h1 className="hero-section__title">{title}</h1>
                    <p className="hero-section__description">{description}</p>
                    <a href={button.href} className="hero-section__button">
                        {button.text}
                    </a>
                </div>
            </div>
        </section>
    );
}