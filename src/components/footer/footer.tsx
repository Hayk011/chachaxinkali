import React from "react";
import "./footer.css";
import {IMenuContent} from "../../utils/interfaces/interfaces";
import {ImageTypes} from "../../utils/enums/imageTypes";
import Image from "../image/image";

const footerMenu: string[] = ["О ресторане", "Контакты", "События", "Меню", "Бронь"];
const content: any[] = [
    {
        id: 1,
        path: "footer1",
        type: ImageTypes.Fixed
    },
    {
        id: 2,
        path: "footer2",
        type: ImageTypes.Fixed
    },
    {
        id: 3,
        path: "footer3",
        type: ImageTypes.Fixed
    },
    {
        id: 4,
        path: "footer4",
        type: ImageTypes.Fixed
    }]


const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-container">
                <div style={{display: "flex", alignItems: "center"}}>
                    <ul style={{minWidth: "100px"}}>
                        {
                            footerMenu.map((item: string) => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>
                    <div className={"icons-container"}>
                        <p className="footer-phone">
                            <span> +7 (921) 907-34-97</span>
                            <span> +7 (812) 907-34-97</span>
                        </p>
                        <p className="footer-mail"> info@zaxinkali..com </p>
                        <p className="footer-location">Санкт-Петербург <br/> Комендантский проспект, д. 44 </p>
                    </div>
                </div>
                <div style={{position: "relative"}}>
                    <p className={"footer-instagram-title"}>Instagram</p>
                    <ul className="insta-container">
                        {
                            content.map((item) => (
                                <li key={item.id}>
                                    <Image type={item.type} imageName={item.path}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;