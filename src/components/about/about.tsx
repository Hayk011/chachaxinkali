import * as React from "react";
import Slider from "../slider/slider";
import {IAboutContent, IImage} from ".././../utils/interfaces/interfaces";
import "./about.css";
import {ImageTypes} from "../../utils/enums/imageTypes";


const aboutContent: IAboutContent[] = [
    {
        id: 1,
        title: "2 зала",
        text: "Всегда уютная обстановка и приятная атмосфера, для отдыха с друзьями, семьей или второй половинкой. Главный зал рассчитан на 60 гостей. Отдельный VIP-зал рассчитан на 20 гостей."
    },
    {
        id: 2,
        title: "Бесплатная парковка",
        text: "Просторная парковка возле ресторана. Всегда есть место, где припарковать свой авто. В двух шагах находится охраняемая стоянка."
    },
    {
        id: 3,
        title: "Детская комната",
        text: "Ваши малыши могут проводить время не только за столом, но и в оборудованной детской комнате."
    }
];

const images: IImage[] = [
    {
        id: 1,
        type: ImageTypes.Fixed,
        imageName: "about",
        alt: "about"
    }
]


const About: React.FC = () =>
{
    return (
        <div className="about-container">
            <p className="about-title-mobile">A<span>bout Us</span></p>
            <div className="about-slider-content-wrapper">
                <Slider
                    content="about"
                    images={images}
                />
                <div className="about-container-content">
                    <p className="about-title">A<span>bout Us</span></p>
                    <ul>
                        {aboutContent.map((item: IAboutContent) => (
                            <li key={item.id}>
                                <p className="about-sub-title">{item.title}</p>
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