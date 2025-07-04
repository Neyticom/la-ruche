import Rocket from '../../../assets/rocket.svg';
import Engagement from '../../../assets/engagement.svg';
import './Join.scss';

export default function Join() {

    const targets = [
        { target: 0, label: "Début des pré-inscriptions", showTarget: false },
        { target: 2000, label: "Ouverture pour les testeurs", showTarget: true },
        { target: 9000, label: "Lancement de l'application", showTarget: true }
    ];

    const maxTarget = Math.max(...targets.map(t => t.target));

    const currentCount = 1000;

    return (
        <section className="join">
            <div className="join__placement">
                <div className="join__left">
                    <h1 className='join__main-title'>Rejoindre la <br/>Ruche des Pros</h1>
                    <p className='join__subtitle'>Pré-inscrivez-vous avant l'ouverture et devenez acteur d'un outil pensé pour votre quotidien.</p>
                    <div className='progression__container'>
                        <div className='progression__bar'>
                            <div className='progression__mask'>
                                <div className='progression__fill' style={{ height: `${(currentCount / maxTarget) * 100}%`}}></div>
                            </div>
                            <div className='progression__item' style={{bottom: `${(currentCount / maxTarget * 89)}%`}}>
                                <img src={Rocket} alt="" className='progression__icon'/>
                            </div>
                        </div>
                        <ul className='progression__list'>
                            {targets.map( (target) =>         
                                <li key={target.target} className='progression__milestone' style={{bottom: `${(target.target / maxTarget * 100)}%`}}>
                                    <div className={`${currentCount > target.target ? "progression__round--passed" : "progression__round"}`}></div>
                                    {target.showTarget && <p className='progression__target'>{target.target} inscrits</p>}
                                    <p className='progression__action'>{target.label}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                    <button className='join__button'>Rejoindre la Ruche des Pros</button>
                    <p className='join__counter'>{currentCount} / {maxTarget} inscrits</p>
                </div>

                <div className="join__separator" aria-hidden="true"></div>

                <div className="join__right">
                    <p className="join__follow-hook">ou</p>
                    <h2 className="join__follow-title">Suivre la Ruche</h2>
                    <p className="join__follow-text">On vous informe uniquement lors des grandes étapes du projet par mail.</p>
                    <input className="join__follow-email" type="email" name="email" id="email" placeholder='Votre email' />
                    <button className="join__follow-button">Suivre le projet</button>
                </div>
            </div>
            <ul className="join__engagements">
                <li className="join__engagements-item">
                    <img className="join__engagement-icon" src={Engagement} alt="" />
                    <p className="join__engagement-text">Pas de spam</p>
                </li>
                <li className="join__engagements-item">
                    <img className="join__engagement-icon" src={Engagement} alt="" />
                    <p className="join__engagement-text">Zéro démarchage commercial</p>
                </li> 
                <li className="join__engagements-item">
                    <img className="join__engagement-icon" src={Engagement} alt="" />
                    <p className="join__engagement-text">Que du concret</p>
                </li>
            </ul>
        </section>
    )
}