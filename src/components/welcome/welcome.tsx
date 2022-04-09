import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {ILink, IImage} from "../../utils/interfaces/interfaces";
import Slider from "../slider/slider";
import "./welcome.css";
import {ImageTypes} from "../../utils/enums/imageTypes";

const links: ILink[] = [
    {
        id: 1,
        href: "https://www.facebook.com/hayk.gukasyan.79",
        className: "welcome-fb"
    },
    {
        id: 2,
        href: "https://instagram.com/chachahinkali?utm_medium=copy_link",
        className: "welcome-insta"
    },
    {
        id: 3,
        href: "",
        className: "welcome-vk"
    }
];

const images: IImage[] = [
    {
        id: 1,
        type: ImageTypes.Fixed,
        imageName: "image1",
        alt: "image1"
    },
    {
        id: 2,
        type: ImageTypes.Fixed,
        imageName: "image1",
        alt: "image1"
    },
]

const Welcome: React.FC = () => {
    return (
        <div className="welcome-container">
            <span className="orange-element"/>
            <div className="welcome-background-image">
                <StaticImage
                    src="../../images/welcome.png"
                    alt="welcome"
                    placeholder="blurred"
                    quality={100}
                />
            </div>
            <div className="title-container">
                <p className="welcome-title">ДАБРО ПОЖАЛОВАТЬ В РЕСТОРАН <span>ЧаЧа ХИНКАЛИ</span></p>
                <span className="title-container-sub-title">У НАС ЛУЧШИЕ ХИНКАЛИ В САНКТ-ПЕТЕРБУРГЕ</span>
                <button> <a href={"#menu"}/>СМОТРЕТЬ МЕНЮ</button>
                <div id={"about"} className="welcome-social-links-container">
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
            <Slider
                content="welcome"
                images={images}
            />
        </div>
    )
}

export default Welcome;


// <div className="welcome-container">
//     <span className="orange-element"/>
//     <div className="welcome-background-image">
//         <StaticImage
//             src="../../images/welcome.png"
//             alt="welcome"
//             placeholder="blurred"
//             quality={100}
//         />
//     </div>
//     <div className="title-container">
//         <p className="welcome-title">ДАБРО ПОЖАЛОВАТЬ В РЕСТОРАН <span>ЧаЧа ХИНКАЛИ</span></p>
//         <span className="title-container-sub-title">У НАС ЛУЧШИЕ ХИНКАЛИ В САНКТ-ПЕТЕРБУРГЕ</span>
//         <button> <a href={"#menu"}/>СМОТРЕТЬ МЕНЮ</button>
//         <div id={"about"} className="welcome-social-links-container">
//             {links.map((link: ILink) => (
//                 <a
//                     key={link.id}
//                     href={link.href}
//                     className={link.className}
//                     target="_blank"
//                 />
//             ))}
//         </div>
//     </div>
//     <Slider
//         content="welcome"
//         images={images}
//     />
// </div>