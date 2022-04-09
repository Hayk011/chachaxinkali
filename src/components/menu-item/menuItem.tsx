import React from "react";
import Image from "../image/image";
import {IMenuItemProps} from "../../utils/interfaces/interfaces";
import "./menuItem.css";

const MenuItem: React.FC<IMenuItemProps> = (props: IMenuItemProps) => {
    return (
        <li className={"menu-item"}>
            <div className={"menu-item-image-container"} style={{position: "relative", height: "85px", width: "85px", backgroundColor: "#C35200"}}>
                <Image type={props.type} imageName={props.imageName} alt={props.alt} className={"menu-item-image"} />
            </div>
            <div className={"menu-item-content-container"}>
                <p style={{display: "flex", justifyContent: "space-between"}}>
                    <span>{props.title}</span>
                    <span className={"menu-item-price"}>{props.price} &#8381;</span>
                </p>
                <p className={"menu-item-description"}>{props.description}</p>
            </div>
        </li>
    )
}
export default MenuItem;