import { headerData } from '@data/Header/HeaderData';
import Hero from '@components/Header/Hero/Hero';
import BurgerMenu from '@components/Header/BurgerMenu/BurgerMenu';
import "@components/Header/Header.css";

export default function Header() {
    const { logo, navLinks, authButtons } = headerData;

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__top">
                    <div className="header__logo">
                        <a href={logo.href} className="header__logo-link">
                            {logo.text}
                        </a>
                    </div>

                    <nav className="header__nav">
                        <ul className="header__menu">
                            {navLinks.map(item => (
                                <li key={item.href} className="header__menu-item">
                                    <a href={item.href} className="header__menu-link">
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header__auth">
                        {Object.values(authButtons).map((btn) => (
                            <a
                                key={btn.href}
                                href={btn.href}
                                className={`header__auth-btn ${btn.variant === 'primary' ? 'header__auth-btn--primary' : 'header__auth-btn--text'}`}
                            >
                                {btn.text}
                            </a>
                        ))}
                    </div>

                    <BurgerMenu navLinks={navLinks} />
                </div>

                <div className="header__bottom">
                    <Hero />
                </div>
            </div>
        </header>
    );
}