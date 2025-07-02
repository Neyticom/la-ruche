// import { useEffect } from 'react';
import { useState } from 'react';
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

        const question_types = [
            {
                id: 1,
                name: "Appel d'offre"
            },
            {
                id: 2,
                name: "Matériaux"
            },
            {
                id: 3,
                name: "Question Pro"
            },
            {
                id: 4,
                name: "Entraide"
            }
        ]

        const questions = [
            {
                id: 1,
                type: 1,
                author: {
                    name: "Julien Moreau",
                    jobTitle: "Artisan plombier"
                },
                title: "Quelqu’un a-t-il déjà répondu à un appel d’offre public avec un groupement d’entreprises du BTP ?",
                content: "Je suis artisan plombier, je travaille seul, et je viens de repérer un appel d’offre public pour la rénovation complète des sanitaires dans une école à 5 km de chez moi. Le chantier m’intéresse vraiment, mais je n’ai pas assez de main-d’œuvre pour gérer l’ensemble. J’aimerais savoir s’il est possible de répondre en s’associant avec d’autres artisans, et comment ça se passe dans la pratique. Et s'il y a une ou deux autres entreprises qui voudraient y répondre avec moi.",
                createdAt: "Hier"
            },
            {
                id: 2,
                type: 2,
                author: {
                    name: "Marc Delattre",
                    jobTitle: "Maçon"
                },
                title: "Vous utilisez quoi comme enduit pour une façade ancienne en pierre dans une région humide ?",
                content: "Je suis maçon et j’interviens sur une façade de 90 m² en pierre ancienne dans une zone assez humide, proche de la côte. Le client veut conserver le cachet d’origine, donc pas de produits modernes qui bloquent l’humidité. J’hésite entre plusieurs enduits à la chaux, mais j’aimerais avoir des retours concrets sur ce qui tient bien dans le temps, sans risque d’altération.",
                createdAt: "Il y a 2 jours"
            },
            {
                id: 3,
                type: 3,
                author: {
                    name: "Nadia Fernandez",
                    jobTitle: "Carreleur"
                },
                title: "Comment gérez-vous les retards de paiement sans plomber la relation client ?",
                content: "Je suis carreleur indépendant depuis un an. J’ai de bons retours clients, mais sur mes trois derniers chantiers, deux clients ont dépassé les délais de règlement. Je suis gêné de relancer trop franchement, j’ai peur de passer pour un pro “pressé”. Avez-vous une méthode claire pour éviter les tensions tout en restant sérieux sur les paiements ?",
                createdAt: "Il y a une semaine"
            },
            {
                id: 4,
                type: 4,
                author: {
                    name: "Christophe Garnier",
                    jobTitle: "Artisan peintre"
                },
                title: "Quelqu’un peut me filer un coup de main sur un ravalement jeudi à Villefranche ? Paiement à la journée.",
                content: "Je suis artisan peintre, seul sur mon activité. J’ai pris un chantier de ravalement de façade à Villefranche-sur-Saône, mais avec la météo et les délais du client, je suis un peu juste cette semaine. Il me faudrait une ou deux personnes en renfort pour avancer sur la préparation et les couches d’enduit. Paiement à la journée, matériel sur place.",
                createdAt: "Il y a 4 jours"
            }
        ]

        const answers = [
            {
                id: 1,
                question_id: 1,
                author: {
                    name: "Victor Leclerc",
                    jobTitle: "Conducteur de travaux"
                },
                content: "Oui, on a monté un groupement avec deux autres entreprises de la région via la Ruche. C’est plus solide pour les dossiers, et ça rassure les maîtres d’ouvrage.",
                createdAt: "Hier"
            },
            {
                id: 2,
                question_id: 1,
                author: {
                    name: "Élise Bourdon",
                    jobTitle: "Architecte"
                },
                content: "Tu peux créer un GME (Groupement Momentané d’Entreprises), ça fonctionne bien. Je peux t’envoyer un exemple de mémoire technique si tu veux.",
                createdAt: "Il y a 4 heures"
            },
            {
                id: 3,
                question_id: 2,
                author: {
                    name: "David Caron",
                    jobTitle: "Maçon"
                },
                content: "Chaux NHL 3.5 avec du sable local, c’est ce que j’utilise depuis 10 ans. Bonne tenue et respect du support.",
                createdAt: "Il y a 2 jours"
            },
            {
                id: 4,
                question_id: 2,
                author: {
                    name: "Sophie Lemoine",
                    jobTitle: "Façadier"
                },
                content: "Évite les produits trop modernes. J’ai eu de bons retours avec un enduit à la chaux + chanvre pour les murs très exposés.",
                createdAt: "Hier"
            },
            {
                id: 5,
                question_id: 3,
                author: {
                    name: "Antoine Joly",
                    jobTitle: "Électricien"
                },
                content: "Je préviens dès le devis que je relance à J+7, puis j’envoie une mise en demeure simple. C’est carré mais pas agressif.",
                createdAt: "Il y a une semaine"
            },
            {
                id: 6,
                question_id: 3,
                author: {
                    name: "Amandine Royer",
                    jobTitle: "Gestionnaire administratif"
                },
                content: "Utilise une plateforme de facturation avec des rappels automatiques. Ça dépersonnalise la relance, et ça passe mieux.",
                createdAt: "Il y a 6 jours"
            },
            {
                id: 7,
                question_id: 4,
                author: {
                    name: "Thomas Pichon",
                    jobTitle: "Peintre"
                },
                content: "Je suis dispo jeudi. Je t’envoie mes dispos et mon tarif en MP, j’ai l’habitude des façades.",
                createdAt: "Il y a 3 jours"
            },
            {
                id: 8,
                question_id: 4,
                author: {
                    name: "Loïc Perrin",
                    jobTitle: "Artisan peintre"
                },
                content: "Je peux passer une demi-journée jeudi aprem si ça peut t’aider. Tu fournis l’échafaudage ?",
                createdAt: "Il y a 9 heures"
            }
        ]

        const [currentTag, setCurrentTag] = useState(question_types[0].id);

        const handleTag = (tag : number) => {
            if(currentTag !== tag) setCurrentTag(tag); 
        }

        const currentQuestion = questions.find((question) => question.type === currentTag);

    return (
        <section className="questions" id='discover'>
            <div className="questions__content">
                <h2 className="questions-content__main-title">Une question métier ?<br/>La communauté<br/>BTP répond.</h2>
                <p className="questions-content__text">Trouvez des réponses concrètes, des retours <br/>d'expérience, et gagnez du temps sur vos <br/>chantiers grâce à notre réseau de professionels.</p>
                <div className="questions-content__tags">
                    {question_types.map((tag) =>
                        <button key={tag.id} className={tag.id === currentTag ? "questions-content__tag--current" : "questions-content__tag"} onClick={() => handleTag(tag.id)}># {tag.name}</button>
                    )}
                </div>
            </div>
            <section className="questions__app">
                <header className="questions-app__header">
                    <h3 className="questions-app__title"># {question_types.find((tag) => tag.id === currentTag)?.name}</h3>
                </header>
                {currentQuestion && (
                    <>
                        <article className="questions-app__stream">
                            <header className="questions-app__user-profile">
                                <img src={Member1} className="questions-app__user-picture"/>
                                <div className="questions-app__user-informations">
                                    <p className="questions-app__user-name">{currentQuestion.author.name}</p>
                                    <p className="questions-app__user-job">{currentQuestion.author.jobTitle}</p>
                                </div>
                            </header>
                            <h4 className="questions-app__question-title">{currentQuestion.title}</h4>
                            <p className="questions-app__question-details">{currentQuestion.content.substring(0, 115) + "..."}</p>
                            <footer className="questions-app__message-footer">
                                <p className="questions-app__message-date">{currentQuestion.createdAt}</p>
                                <button className="questions-app__reply-button">Répondre</button>
                            </footer>
                        </article>
                        {answers.filter((answer) => answer.question_id === currentQuestion?.id).map((answer) => (
                            <article key={answer.id} className="questions-app__stream-a">
                                <header className="questions-app__user-profile">
                                    <img src={Member2} className="questions-app__user-picture"/>
                                    <div className="questions-app__user-informations">
                                        <p className="questions-app__user-name">{answer.author.name}</p>
                                        <p className="questions-app__user-job">{answer.author.jobTitle}</p>
                                    </div>
                                </header>
                                <p className="questions-app__question-details">{answer.content.substring(0, 95) + (answer.content.length > 95 ? "..." : "")}</p>
                                <footer className="questions-app__message-footer">
                                    <p className="questions-app__message-date">{answer.createdAt}</p>
                                    <button className="questions-app__reply-button">Répondre</button>
                                </footer>
                            </article>
                        ))}
                    </>
                )}
            </section>
        </section>
    )
} 