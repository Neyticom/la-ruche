import Header from "../layouts/Header/Header";
import Hero from "./sections/Hero/Hero";
import Questions from "./sections/Questions/Questions"
import Trust from "./sections/Trust/Trust";;
import Contact from "./sections/Contact/Contact";
import Faq from "./sections/Faq/Faq";
import Team from "./sections/Team/Team";
import arrow_top from '../assets/arrow_top.svg';
import "./MainPage.scss";
import { useEffect } from "react";
import Join from "./sections/Join/Join";

export default function MainPage() {

    const handleScroll = () => {
            const button = document.getElementsByClassName("button")[0] as HTMLButtonElement;
            button.hidden = (scrollY >= 100 ? false : true);
        }

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return() => document.removeEventListener("scroll", handleScroll);
    });

    const scrollToTop = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.scrollTo({top:0, behavior:"smooth"});
    }

    return (
        <main>
            <Header />
            <Hero />
            <Questions />
            <Trust />
            <Join />
            <Team />
            <Faq />
            <Contact />
            <button className="button" onClick={scrollToTop} hidden>
                <img src={arrow_top} alt="" className="arrow" />
            </button>
        </main>
    )
}