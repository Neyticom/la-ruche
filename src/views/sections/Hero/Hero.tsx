import Illustration from '../../../assets/illu.png';
import Transition from '../../../assets/waves_transition.svg';
import './Hero.scss';

export default function Hero () {

    return (
        <main className="hero">
            <div className='hero__inner'>
                <div className='hero__content'>
                    <h2 className='hero-content__main-title'>Le réseau d'entraide<br/>des pros du BTP</h2>
                    <p className='hero-content__text'>Un réseau pour discuter, vendre,<br/>recruter, répondre à des appels d'offres<br/>et trouver du soutien.</p>
                    <div className='hero-content__buttons'>
                        <a href='#' className='hero-content__button-link'><button className='hero-content__button primary__button'>Rejoindre la Ruche</button></a>
                        <a href='#' className='hero-content__button-link'><button className='hero-content__button secondary__button'>Découvrir le projet</button></a>
                    </div>
                </div>
                <img src={Illustration} alt="Illustration de deux personnes travaillant dans le BTP qui discutent de La Ruche des Pros" className='hero__illustration'/>
            </div>
            <img src={Transition} aria-hidden="true" className='hero__transition'/>
        </main>
    )
}