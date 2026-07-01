import { footerData } from '@data/Footer/FooterData';
import "@components/Footer/Footer.css";

const { header, navLinks } = footerData;

export default function Footer() {
    return (
        <>
          <footer className="footer">
            <div className="footer__container">
                <div className="footer__part">
                    <h3>{header.text}</h3>

                    <ul>
                        {navLinks.map((item, idx) => (
                            <li key={idx}><a href={item.href}>{item.text}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
          </footer>  
        </>
    );
}

