import Logo from '../../assets/icon.svg';
import { useEffect, useState } from 'react';
import './Header.scss';

export default function Header() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 766px)');
        const handleResize  = (event: MediaQueryListEvent | MediaQueryList) => {
            setIsMobile(event.matches);
        };

        handleResize(mediaQuery);
        mediaQuery.addEventListener('change', handleResize);

        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({top:0, behavior:"smooth"});
    }

    return(
        <header className='header'>
            <a href="#" className='header__logo-link'>
                <img src={Logo} alt="Logo de La Ruche des Pros" className='header__logo'/>
                <h1 className='header__logo-title'>La Ruche des Pros</h1>
            </a>
            {!isMobile && (
                <nav className='header-nav'>
                <ul className='header-nav__list'>
                    <li className='header-nav__list-item--current'>
                        <a onClick={scrollToTop} className='header-nav__list-item-link'>Accueil</a>
                    </li>
                    <li className='header-nav__list-item'>
                        <a href="#discover" className='header-nav__list-item-link'>Découvrir</a>
                    </li>
                    <li className='header-nav__list-item'>
                        <a href="#follow" className='header-nav__list-item-link'>Suivez-nous</a>
                    </li>
                    <li className='header-nav__list-item'>
                        <a href="#team" className='header-nav__list-item-link'>Équipe</a>
                    </li>
                    <li className='header-nav__list-item'>
                        <a href="#faq" className='header-nav__list-item-link'>FAQ</a>
                    </li>
                    <li className='header-nav__list-item'>
                        <a href="#contact" className='header-nav__list-item-link'>Contact</a>
                    </li>
                </ul>
            </nav>
            )}
        </header>
    )

}