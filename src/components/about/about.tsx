import * as React from "react";
import Slider from "../slider/slider";
import {IAboutContent, IImage} from ".././../utils/interfaces/interfaces";
import "./about.css";
import {ImageTypes} from "../../utils/enums/imageTypes";
import Image from "../image/image";


const aboutContent: IAboutContent[] = [
    {
        id: 1,
        title: "2 зала",
        text: "Самый радушный и гостеприимный грузинский дом Чача Хинкали покажет тебе, что значит полная гамарджоба! Приходите и попробуйте наши лучшие хинкали в Санкт-Петербурге."
    },
    {
        id: 2,
        title: "Бесплатная парковка",
        text: "В меню собраны популярные кавказские блюда, сациви, пхали, шашлыки, хачапури. Также можно  попробовать  домашние  варенья и выпить кофе в турку. А вина выдержанные в глиняных квеври не оставит гостя равнодушным."
    },
    {
        id: 3,
        title: "Детская комната",
        text: "Забота и любовь к любимым гостям  начинается  именно в доме Чача Хинкали."
    }
];

const images: IImage[] = [
    {
        id: 1,
        type: ImageTypes.Fixed,
        imageName: "IMG_4796",
        alt: "IMG_4796"
    }
]


const About: React.FC = () =>
{
    return (
        <div id={"about"} className="about-container">
            <p className="about-title-mobile">A<span>bout Us</span></p>
            <div className="about-slider-content-wrapper">
                <Image
                    type={ImageTypes.Fixed}
                    imageName={"IMG_4796"}
                    alt={""}
                />
                <div className="about-container-content">
                    <p className="about-title">О <span> нас</span></p>
                    <ul>
                        {aboutContent.map((item: IAboutContent) => (
                            <li key={item.id}>
                                <p className="about-post">{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;