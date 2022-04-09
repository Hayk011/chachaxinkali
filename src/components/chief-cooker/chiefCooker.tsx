import React from "react";
import Image from "../image/image";
import "./chiefCooker.css";
import {ImageTypes} from "../../utils/enums/imageTypes";


const ChiefCooker = () => {
    return (
        <div id={"about-the-cook"} className={"chief-cooker-container"}>
            <div className={"about-chief-cooker-container"}>
                <p className={"about-chief-cooker-title"}><span>C</span>hief-Cooker</p>
                <p className={"about-chief-cooker-container-post"}>Серго Гачечиладзе - шеф-новатор, создатель новой
                    грузинской кухни, возглавивший гастрономическую революцию в Грузии.</p>
                <p className={"about-chief-cooker-container-post"}>Ему удалось переосмыслить классические грузинские
                    блюда и вывести национальную кухню на международную арену. </p>
                <p className={"about-chief-cooker-container-post"}>Шеф учился в США в кулинарной академии Нью-Йорка,
                    несколько лет работал в разных ресторанах, оттачивая технику и обрастая опытом.</p>
            </div>
            <div className={"chief-cooker-image-container"}>
                <Image className={"chief-cooker-image"} type={ImageTypes.Fixed} imageName={"ChiefCooker"}/>
                <div className={"SRC-container"}>
                    <p><span/></p>
                </div>
            </div>
            <p className={"about-chief-cooker-title-mobile"}><span>C</span>hief-Cooker</p>
        </div>
    )
}

export default ChiefCooker;