import "./Contact.scss";
import entrepriseSeed from "../../../assets/seeding";

export default function Contact() {

    const handlesearch = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const datalist = document.getElementById('ent-choice');
        if (value.length >= 3){
            const test = entrepriseSeed.filter(entreprise => entreprise.denomination.toLowerCase().includes(value.toLowerCase())
            || entreprise.siret.toLowerCase().includes(value.toLowerCase())
            || entreprise.siren.toLowerCase().includes(value.toLowerCase()));

            if (datalist) {
                datalist.innerHTML = '';
                test.forEach(ent => {
                    const opt = document.createElement('option');
                    opt.value = ent.denomination;
                    opt.textContent = ent.siret;
                    datalist.appendChild(opt);
                });
            }
        }else{
            if (datalist) datalist.innerHTML = '';
        }


        
    }
    return (
        <section className="contact" id="contact">
            <h1 className="contact__maintitle">nous contacter</h1>
            <h3 className="contact__subtitle">une question ? une idée ? faisons connaissance !</h3>
            <form className="contact__form">
                <div className="contact-form__informations-area">
                    <div className="contact-form__user-informations">
                        <label htmlFor="name" hidden>Nom</label>
                        <input type="text" name="user_name" placeholder="Nom" className="contact-form__input"required/>

                        <label htmlFor="name" hidden>prenom</label>
                        <input type="text" name="user_prenom" placeholder="Prenom"className="contact-form__input"required/>
                    </div>

                    <div className="contact-form__company-information"> 
                        <label htmlFor="name" hidden>Entreprise ou SIRET</label>
                        <input type="search" list="ent-choice" placeholder="Entreprise ou SIRET"className="contact-form__input"  onChange={handlesearch} required/>
                        <datalist id="ent-choice">
                        </datalist>
                        

                        <label htmlFor="name" hidden>Fonction</label>
                        <input type="text" name="user_fonction" placeholder="Fonction"className="contact-form__input"required/>
                    </div>
                </div>
                <label htmlFor="mail" hidden>E-mail</label>
                <input type="email" name="user_mail" placeholder="E-mail"className="contact-form__input"required pattern="/^[\w.-]+@[\w.-]+.\w{2,}$/"/>
                
                
                <label htmlFor="msg" hidden>Message</label>
                <textarea name="user_message" placeholder="Message"className="contact-form__textarea"required></textarea>
                <button type="submit"className="contact-form__submit-botton">envoyer le message</button> 
            </form>
        </section>
    )
}