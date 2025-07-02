import "./Team.scss";
import Team_member from '../../../assets/team_member.svg';
export default function Team() {
    return (
        <section className="team" id="team">
            <hgroup>
                <h1 className="team__maintitle">L'équipe derrière La Ruche des Pros</h1>
                <h4 className="team__subtitle">Une petite équipe avec de grandes idées</h4>
            </hgroup>
            <div className="team__box">
                <article className="team__box-people">
                    <img src={Team_member} alt="" aria-hidden="true" className='team__box-people-image'/>
                    <h5 className="team__box-people-name">Matteo Bernollin</h5>
                    <h6 className="team__box-people-role">owner & ceo</h6>
                    <p className="team__box-people-description">Entrepreneur du BTP, il connaît les problématiques terrain par cœur. Il pilote le projet avec une vision claire : Construire un outil utile, concret et au centre des métiers du bâtiment.</p>
                </article>
                <article className="team__box-people">
                    <img src={Team_member} alt="" aria-hidden="true" className='team__box-people-image'/>
                    <h5 className="team__box-people-name">Romain Biteau</h5>
                    <h6 className="team__box-people-role">cto & lead dev</h6>
                    <p className="team__box-people-description">Initiateur de projets dans la tech et développeur, il supervise la dimension technique du projet et transforme une vision en solution pratique et bien pensée.</p>
                </article>
            </div>
            <p className="team__promesse">Pas de promesses en l’air. On sait d’où on part, on sait ce qu’il reste à faire. Mais ce qu’on construit, on le fait sérieusement, pour que chaque pro y trouve un vrai intérêt.</p>
        </section>
    )
}