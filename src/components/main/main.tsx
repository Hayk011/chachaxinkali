import React from "react";
import "./main.css";
import {ILink} from "../../utils/interfaces/interfaces";
import {StaticImage} from "gatsby-plugin-image";
import Slider2 from "../slider2/slider2";

const links: ILink[] = [
    {
        id: 1,
        href: "https://www.facebook.com/hayk.gukasyan.79",
        className: "main-icon-facebook"
    },
    {
        id: 2,
        href: "https://instagram.com/chachahinkali?utm_medium=copy_link",
        className: "main-icon-instagram"
    },
    {
        id: 3,
        href: "",
        className: "main-icon-vk"
    }
];

const Main = (): JSX.Element =>
{
    return (
        <div className={"main-first-component"}>
            <div className="main-background-image">
                <StaticImage
                    src="../../images/welcome.png"
                    alt="welcome"
                    placeholder="blurred"
                    quality={100}
                />
            </div>
            <div className={"main-orange-element"}></div>
           <div className={"main-content-container"}>
               <div className={"main-content-container-first-section"}>
                   <h1 className="main-title">ДАБРО ПОЖАЛОВАТЬ В РЕСТОРАН <span>ЧаЧа ХИНКАЛИ</span></h1>
                   <p className={"main-sub-title"}>У НАС ЛУЧШИЕ ХИНКАЛИ В САНКТ-ПЕТЕРБУРГЕ</p>
                   <button className={"main-button"}> <a href={"#menu"}/> СМОТРЕТЬ МЕНЮ</button>
                   <div className={"main-social-networks-container"}>
                       {links.map((link: ILink) => (
                           <a
                               key={link.id}
                               href={link.href}
                               className={link.className}
                               target="_blank"
                           />
                       ))}
                   </div>
               </div>
               <Slider2/>
           </div>
        </div>
    )
}

export default Main;

