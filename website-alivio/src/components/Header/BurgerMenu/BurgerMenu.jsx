import { useState, useEffect } from "react";
import "@components/Header/BurgerMenu/BurgerMenu.css";

export default function BurgerMenu({ navLinks }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <button
                className={`burger ${isOpen ? "burger--active" : ""}`}
                onClick={toggleMenu}
                aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={isOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
                <ul className="mobile-menu__list">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <a 
                                href={item.href} 
                                onClick={closeMenu}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {isOpen && (
                <div className="mobile-menu__overlay" onClick={closeMenu}></div>
            )}
        </>
    );
}