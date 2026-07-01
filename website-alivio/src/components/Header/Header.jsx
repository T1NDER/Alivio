import { headerData, heroData } from '@data/Header/HeaderData';
import "@components/Header/Header.css";

const { logo, navLinks, authButtons } = headerData;

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__top">
                    <Logo/>
                    <Menu/>
                    <AuthButtons authButtons={authButtons}/>
                </div>

                <div className="header__bottom">
                    <Hero/>
                </div>
            </div>
        </header>
    );
}

function Logo() {
    return (
        <div className="header__logo">
            <a href={logo.href}>{logo.text}</a>
        </div>
    );
}

function Menu() {
    return (
        <nav className="menu">
            <ul>
                {navLinks.map(item => (
                    <MenuItem key={item.href} text={item.text} href={item.href} />
                ))}
            </ul>
        </nav>
    );
}

function MenuItem({ text, href }) {
    return <li><a href={href}>{text}</a></li>
}

function AuthButtons({ authButtons }) {
    return (
        <div className="auth-buttons">
            {Object.values(authButtons).map((btn) => (
                <AuthButton key={btn.href} {...btn} />
            ))}
        </div>
    );
}

function AuthButton({ text, href, variant }) {
    return (
        <button className={variant === 'primary' ? 'btn-primary' : 'btn-text'}>
            <a href={href}>{text}</a>
        </button>
    );
}


function Hero() {
    const { title, description, button, image} = heroData;
   
    return (
        <section className="hero">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={button.href} className="btn">{button.text}</a>
        <img src={image.src} alt={image.alt} />
        </section>
  );
}