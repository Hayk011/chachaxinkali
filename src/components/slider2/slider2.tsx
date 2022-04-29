import React from "react";
import "./slider2.css";
import {IImage} from "../../utils/interfaces/interfaces";
import {ImageTypes} from "../../utils/enums/imageTypes";
import Image from "../image/image";

const images: IImage[] = [
    {
        id: 1,
        type: ImageTypes.Fixed,
        imageName: "image1",
        alt: "IMG_3567",
        className: "slider-item-IMG_3567"
    },
    {
        id: 2,
        type: ImageTypes.Fixed,
        imageName: "IMG_8949",
        alt: "IMG_8949",
        className: "slider-item-IMG_8949"
    },
]

const Slider2 = () =>
{
    return (
        <div className={"slider2-first-container"}>
            <ul>
                {
                    images.map((image: IImage) => (
                        <li  key={image.id}>
                            <Image
                                type={image.type}
                                imageName={image.imageName}
                                alt={image.alt}
                            />
                        </li>
                    ))
                }
            </ul>
            <div className={`slider2-controller-container`}>
                <span />
                <span />
            </div>
        </div>
    )
}

export default Slider2;