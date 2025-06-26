
import Trusted from '../../../assets/trusted.svg';
import Verified from '../../../assets/verified.svg';
import Stars from '../../../assets/stars.svg';
import Comment from '../../../assets/comment.svg';
import Star from '../../../assets/star.svg';
import './Trust.scss';

export default function MainPage() {
    return(
        <section className='trust'>
            <hgroup className='trust__titles'>
                <h1 className='trust__main-title'>Travaillez avec des pros de confiance</h1>
                <h2 className='trust__subtitle'>Description de cette section en une phrase simple et efficace</h2>
            </hgroup>
            <div className='trust__content'>
                <div className='trust__items'>
                    <div className='trust__item'>
                        <img src={Verified} alt="Icone symbolisant les entreprises vérifiées" className='trust-item__icon' />
                        <p className='trust-item__text'><span className='trust__item-key'>Entreprises vérifiées</span> de façon<br/>systématique à l'inscription</p>
                    </div>
                    <div className='trust__item'>
                        <img src={Star} alt="Icone symbolisant le score de confiance" className='trust-item__icon' />
                        <p className='trust-item__text'><span className='trust__item-key'>Score de confiance</span> pour évaluer<br/>la fiabilité d'une société</p>
                    </div>
                    <div className='trust__item' >
                        <img src={Comment} alt="Icone symbolisant les avis de professionnels" className='trust-item__icon' />
                        <p className='trust-item__text'><span className='trust__item-key'>Avis visibles</span> uniquement après<br/>une collaboration authentique</p>
                    </div>
                </div>
                <div className='trust__example'>
                    <div className='trust-example__company'>
                        <header className='trust-example__company-header'>
                            <div className='trust-example__company-logo'>
                                <p className='trust-example__company-letters'>DB</p>
                            </div>
                            <div className='trust-example__company-informations'>
                                <h3 className='trust-example__company-name'>Dupont Bâtiment</h3>
                                <p className='trust-example__company-domain'>Rénovation énergétique</p>
                            </div>
                            <img src={Verified} alt="Icone symbolisant les entreprises vérifiées" className='trust-example__company-verified' />
                        </header>
                        <div className='trust-example__company-score'>
                            <img src={Trusted} alt="Icone symbolisant les entreprises de confiance" className='trust-example__company-trusted'/>
                            <p className='trust-example__company-interractions'>4,8/5 sur la base de 174 interactions</p>
                        </div>
                        <div className='trust-example__company-comments'>
                            <img src={Comment} alt="Icone symbolisant les avis de professionnels" className='trust-example__company-comment'/>
                            <p className='trust-example__company-count'>13 avis vérifiés</p>
                            <button className='trust-example__company-button'>Voir les avis</button>
                        </div>
                    </div>
                    <div className='trust-example__pro-review'>
                        <h4 className='trust-example__pro-name'>Mairie de Saint-Valmire :</h4>
                        <img src={Stars} alt="Avis de 4,5 sur 5 étoiles" className='trust-example__pro-score'/>
                        <p className='trust-example__pro-comment'>"Très bonne collaboration :<br/>sérieux, rapide, arrangeant."</p>
                    </div>
                </div>
            </div>
        </section>
    )
}