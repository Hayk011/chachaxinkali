import React from "react";
import Image from "../image/image";
import "./chiefCooker.css";
import {ImageTypes} from "../../utils/enums/imageTypes";


const ChiefCooker = () => {
    return (
        <div id={"about-the-cook"} className={"chief-cooker-container"}>
            <div className={"about-chief-cooker-container"}>
                <p className={"about-chief-cooker-title"}><span>Ш</span>еф-повар</p>
                <p className={"about-chief-cooker-container-post"}>Наш шеф - это настоящая  вкусная еда, красивая подача и немного тёплой магии. Именно её фантазия  создаёт блюда, настолько вкусные, что вы не можете сдержать вздох восхищения.</p>
                <p className={"about-chief-cooker-container-post"}>А вы знаете, почему в Чача Хинкали всегда вкусно?
                    Потому что во главе нашего гостеприимного дома  очаровательная девушка. Но пусть вас не  обманывает её хрупкий вид!
                    На самом деле  наша грузинская красавица, наш шеф Анна Гумбаридзе, сильная, целеустремлённая, стрессоустойчивая, очаровательная и самая вкусная шеф на свете. Которая держит  команду  поваров и её золотыми  ручками совершаются шедевры.
                </p>
                <p className={"about-chief-cooker-container-post"}>Мы очень  дорожим и гордимся  всем  нашим гостеприимным домом, что во главе  его потресающий и чуткий руководитель.</p>
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