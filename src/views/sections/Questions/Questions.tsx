// import { useEffect } from 'react';
import Member1 from '../../../assets/member_1.svg';
import Member2 from '../../../assets/member_2.svg';
import Member3 from '../../../assets/member_3.svg';
import './Questions.scss';

export default function Questions() {

    // const handleFaqClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();
    //     const parent = event.currentTarget.parentElement;
    //     if (parent) {
    //         for(const child of parent.children) {
    //             if(child.nodeName === "P") {
    //                 const paragraph = child as HTMLParagraphElement;
    //                 paragraph.hidden = !paragraph.hidden;
    //             }
    //         }
    //     }
    // }

        // const handleScroll = () => {
        //     const datalist = document.getElementById('ent-choice');
        //     if (datalist) {
        //         datalist.innerHTML = '';
        //         test.forEach(ent => {
        //             const opt = document.createElement('option');
        //             opt.value = ent.denomination;
        //             opt.textContent = ent.siret;
        //             datalist.appendChild(opt);
        //         });
        //     }
        // }

    return (
        <section className="questions" id='discover'>
            <div className="questions__content">
                <h2 className="questions-content__main-title">Une question métier ?<br/>La communauté<br/>BTP répond.</h2>
                <p className="questions-content__text">Trouvez des réponses concrètes, des retours<br/>d'expérience, et gagnez du temps sur vos<br/>chantiers grâce à notre réseau de professionels.</p>
                <div className="questions-content__tags">
                    <button className="questions-content__tag"># Appel d'offre</button>
                    <button className="questions-content__tag"># Matériaux</button>
                    <button className="questions-content__tag--current"># Question Pro</button>
                    <button className="questions-content__tag"># Entraide</button>
                </div>
            </div>
            <section className="questions__app">
                <header className="questions-app__header">
                    <h3 className="questions-app__title"># Question Pro</h3>
                </header>
                <article className="questions-app__stream">
                    <header className="questions-app__user-profile">
                        <img src={Member1} className="questions-app__user-picture"/>
                        <div className="questions-app__user-informations">
                            <p className="questions-app__user-name">Henri Laville</p>
                            <p className="questions-app__user-job">Entrepreneur Individuel</p>
                        </div>
                    </header>
                    <h4 className="questions-app__question-title">Quel rouleau thermique pour enrobées me conseillez-vous ?</h4>
                    <p className="questions-app__question-details">Je dois appliquer un enrobé sur une surface de 5000m². J'hésite entre différents modèles de rouleaux ...</p>
                    <footer className="questions-app__message-footer">
                        <p className="questions-app__message-date">Il y a deux jours</p>
                        <button className="questions-app__reply-button">Répondre</button>
                    </footer>
                </article>
                <article className="questions-app__stream-a">
                    <header className="questions-app__user-profile">
                        <img src={Member2} className="questions-app__user-picture"/>
                        <div className="questions-app__user-informations">
                            <p className="questions-app__user-name">Charles Lefèvre</p>
                            <p className="questions-app__user-job">Conducteur de travaux</p>
                        </div>
                    </header>
                    <p className="questions-app__question-details">Sur des grandes surfaces, je vous recommande un rouleau autoporté, avec un compact...</p>
                    <footer className="questions-app__message-footer">
                        <p className="questions-app__message-date">Hier</p>
                        <button className="questions-app__reply-button">Répondre</button>
                    </footer>
                </article>
                <article className="questions-app__stream-a">
                    <header className="questions-app__user-profile">
                        <img src={Member3} className="questions-app__user-picture"/>
                        <div className="questions-app__user-informations">
                            <p className="questions-app__user-name">Antoine Petit</p>
                            <p className="questions-app__user-job">Ingénieur BTP</p>
                        </div>
                    </header>
                    <p className="questions-app__question-details">Je privilégie ces modèles : Super Pac 0002 ou en équivalent Dynatech 5775M.</p>
                    <footer className="questions-app__message-footer">
                        <p className="questions-app__message-date">Il y a 3h</p>
                        <button className="questions-app__reply-button">Répondre</button>
                    </footer>
                </article>
            </section>
        </section>
    )
} 