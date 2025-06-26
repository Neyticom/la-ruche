import "./Faq.scss";
import Plus from '../../../assets/plus.svg';

export default function Faq() {
    const handleFaqClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const parent = event.currentTarget.parentElement;
        if (parent) {
            for(const child of parent.children) {
                if(child.nodeName === "P") {
                    const paragraph = child as HTMLParagraphElement;
                    paragraph.hidden = !paragraph.hidden;
                }
            }
        }
    }
    


    return (
        <section className="faq" id="faq">
            <h1 className="faq__maintitle">faq</h1>
            <h3 className="faq__subtitle">vos questions les plus fréquentes</h3>
            <ul className="faq__box">
                <li className='faq__question'>
                    <button className='faq__question-item' onClick={handleFaqClick}>
                        <img src={Plus} alt="" aria-hidden="true" className='faq__question-item_icon'/>
                        <p className='faq__question-item_q'>C’est quoi La Ruche des Pros ?</p>
                    </button>
                    <p className='faq__question-a' hidden>La Ruche des Pros est une plateforme collaborative dédiée aux professionnels du BTP, qui favorise l’entraide, le partage et les connexions entre artisans et entreprises partout en France. Que ce soit pour du renfort sur un chantier local ou pour développer un partenariat à l’échelle nationale, la Ruche vous connecte efficacement.</p>
                </li>
                <li className='faq__question'>
                    <button className='faq__question-item'onClick={handleFaqClick}>
                        <img src={Plus} alt="" aria-hidden="true" className='faq__question-item_icon'/>
                        <p className='faq__question-item_q'>Quel sera le coût de l’application ?</p>
                    </button>
                    <p className='faq__question-a' hidden>L’accès à La Ruche des Pros se fera via une formule d’abonnement unique, pensée pour être accessible tout en assurant le bon fonctionnement de la plateforme. Ce tarif a un double objectif : auto-financer l’application et rassembler des professionnels réellement engagés dans une démarche de collaboration et d’évolution.</p>
                </li>
                <li className='faq__question'>
                    <button className='faq__question-item'onClick={handleFaqClick}>
                        <img src={Plus} alt="" aria-hidden="true" className='faq__question-item_icon'/>
                        <p className='faq__question-item_q'>Un réseau d’entraide, d’accord, mais pour la suite vous prévoyez quoi ?</p>
                    </button>
                    <p className='faq__question-a'hidden>Notre ambition est de construire un véritable écosystème du BTP complet. En plus de l’entraide entre professionnels, La Ruche des Pros intégrera progressivement des services concrets et utiles pour le quotidien des entreprises du bâtiment. Parmi ces évolutions :un outil de gestion de planning collaboratif,des formations métiers adaptées aux besoins du terrain,des partenariats fournisseurs négociés à l’échelle du réseau,un espace dédié à la mise en relation pour des chantiers, qu’ils soient locaux ou interrégionaux,et surtout, un Marketplace sécurisé pour faciliter l’échange, la vente ou l’achat de matériel et de matériaux entre professionnels de confiance.</p>
                    <p className='faq__question-a'hidden>Et ce n’est qu’un début : nous ferons évoluer la plateforme en fonction des retours et des besoins exprimés par les utilisateurs eux-mêmes. La Ruche est un outil vivant, pensé pour grandir avec ceux qui l’utilisent. </p>
                </li>
                <li className='faq__question'>
                    <button className='faq__question-item'onClick={handleFaqClick}>
                        <img src={Plus} alt="" aria-hidden="true" className='faq__question-item_icon'/>
                        <p className='faq__question-item_q'>Pourquoi utiliser la Ruche des Pros ?</p>
                    </button>
                    <p className='faq__question-a'hidden>L’accès à La Ruche des Pros se fera via une formule d’abonnement unique, pensée pour être accessible tout en assurant le bon fonctionnement de la plateforme. Ce tarif a un double objectif : auto-financer l’application et rassembler des professionnels réellement engagés dans une démarche de collaboration et d’évolution.</p>
                </li>
                <li className='faq__question'>
                    <button className='faq__question-item'onClick={handleFaqClick}>
                        <img src={Plus} alt="" aria-hidden="true" className='faq__question-item_icon'/>
                        <p className='faq__question-item_q'>Je ne suis pas très à l'aise avec l’informatique, c’est un souci ? </p>
                    </button>
                    <p className='faq__question-a'hidden>Pas du tout ! L’application est conçue pour être simple, intuitive et accessible à tous, même sans grandes connaissances en informatique. Et si besoin, notre équipe est là pour t’accompagner pas à pas. Chez nous, pas de jargon compliqué – que des outils utiles, clairs et pensés pour les pros du terrain.</p>
                </li>
            </ul>
        </section>
    )
}