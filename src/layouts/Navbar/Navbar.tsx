import { useState } from 'react';
import './Navbar.scss';

export default function Navbar() {

    const [isHovered, setIsHovered] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({top:0, behavior:"smooth"});
    }

    return (
        <nav className={isHovered ? "navbar--open" : "navbar"} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <ul className='navbar__list'>
                <li className='navbar__list-item--current'>
                    <a onClick={scrollToTop} className='navbar__list-item-link'>Accueil</a>
                </li>
                <li className='navbar__list-item'>
                    <a href="#discover" className='navbar__list-item-link'>Découvrir</a>
                </li>
                <li className='navbar__list-item'>
                    <a href="#follow" className='navbar__list-item-link'>Suivez-nous</a>
                </li>
                <li className='navbar__list-item'>
                    <a href="#team" className='navbar__list-item-link'>Équipe</a>
                </li>
                <li className='navbar__list-item'>
                    <a href="#faq" className='navbar__list-item-link'>FAQ</a>
                </li>
                <li className='navbar__list-item'>
                    <a href="#contact" className='navbar__list-item-link'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}