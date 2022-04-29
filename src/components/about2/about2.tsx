import React from "react";
import "./about2.css";
import Image from "../image/image";
import {ImageTypes} from "../../utils/enums/imageTypes";
import {IAboutContent} from "../../utils/interfaces/interfaces";


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

const About2 = (): JSX.Element =>
{
    return (
        <div id={"about"} className={"about-container"}>
            <div className={"about-content-container"}>
                <div className={"about-image-container"}>
                    <Image
                        type={ImageTypes.Fixed}
                        imageName={"IMG_4796"}
                        alt={"IMG_4796"}
                    />
                </div>
                <div className={"about-details-container"}>
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

export default About2;