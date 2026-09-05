import { footerData } from '@data/Footer/FooterData';
import "@components/Footer/Footer.css";

export default function Footer() {
    const { header, navLinks } = footerData;
    
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <h3 className="footer__title">{header.text}</h3>

                    <ul className="footer__list">
                        {navLinks.map((item, idx) => (
                            <li key={idx} className="footer__item">
                                <a href={item.href} className="footer__link">
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>  
    );
}