import Hammer from '../../../assets/benefit_hammer.svg';
import Growth from '../../../assets/benefit_growth.svg';
import Calendar from '../../../assets/benefit_calendar.svg';
import Thumb from '../../../assets/benefit_thumb.svg';
import Network from '../../../assets/benefit_network.svg';
import Star from '../../../assets/benefit_star.svg';
import './Benefits.scss';

export default function Benefits() {
    return (
        <section className="benefits">
            <div className="benefits__app">
                <div className="benefits__item">
                <img src={Hammer} alt="" aria-hidden="true" className="benefits-item__icon"/>
                <div className="benefits-item__texts">
                    <p className="benefits-item__main-text">Projet co-construit</p>
                    <p className="benefits-item__text">avec des pros du bâtiment</p>
                </div>
                </div>
                <div className="benefits__item">
                    <img src={Growth} alt="" aria-hidden="true" className="benefits-item__icon"/>
                    <div className="benefits-item__texts">
                        <p className="benefits-item__main-text">La Ruche évolue</p>
                        <p className="benefits-item__text">au rythme des besoins du métier</p>
                    </div>
                </div>
                <div className="benefits__item">
                    <img src={Calendar} alt="" aria-hidden="true" className="benefits-item__icon"/>
                    <div className="benefits-item__texts">
                        <p className="benefits-item__main-text">On avance aussi vite</p>
                        <p className="benefits-item__text">que vos journées sont chargées</p>
                    </div>
                </div>
            </div>

            <div className="benefits__separator" aria-hidden="true"></div>

            <div className="benefits__client">
                <div className="benefits__item">
                <img src={Thumb} alt="" aria-hidden="true" className="benefits-item__icon"/>
                <div className="benefits-item__texts">
                    <p className="benefits-item__main-text">Obtenez des réponses</p>
                    <p className="benefits-item__text">fiables en quelques clics</p>
                </div>
                </div>
                <div className="benefits__item">
                    <img src={Network} alt="" aria-hidden="true" className="benefits-item__icon"/>
                    <div className="benefits-item__texts">
                        <p className="benefits-item__main-text">Tissez votre réseau local</p>
                        <p className="benefits-item__text">avec des professionnels de confiance</p>
                    </div>
                </div>
                <div className="benefits__item">
                    <img src={Star} alt="" aria-hidden="true" className="benefits-item__icon"/>
                    <div className="benefits-item__texts">
                        <p className="benefits-item__main-text">Votre profil est visible,</p>
                        <p className="benefits-item__text">vos compétences sont valorisées</p>
                    </div>
                </div>
            </div>
        </section>
    )
}