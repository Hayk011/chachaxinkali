import React from "react";
import "./slider2.css";
import {IImage} from "../../utils/interfaces/interfaces";
import {ImageTypes} from "../../utils/enums/imageTypes";
import Image from "../image/image";
import { sliderController } from "../../utils/helpers/herlper";

const images: IImage[] = [
    {
        id: 1,
        type: ImageTypes.Fixed,
        imageName: "slider_item_IMG_20220429",
        alt: "slider_item_IMG_20220429",
        className: "slider-item-IMG_3567"
    },
    {
        id: 2,
        type: ImageTypes.Fixed,
        imageName: "slider_item_IMG_9101",
        alt: "slider_item_IMG_9101",
        className: "slider_item_IMG_9101"
    },
    {
        id: 3,
        type: ImageTypes.Fixed,
        imageName: "slider_item_IMG_8994",
        alt: "slider_item_IMG_8994",
        className: "slider_item_IMG_8994"
    },
    {
        id: 4,
        type: ImageTypes.Fixed,
        imageName: "slider_item_IMG_8937",
        alt: "slider_item_IMG_8937",
        className: "slider_item_IMG_8937"
    },
    {
        id: 5,
        type: ImageTypes.Fixed,
        imageName: "slider_item_IMG_3846",
        alt: "slider_item_IMG_3846",
        className: "slider_item_IMG_3846"
    },
    {
        id: 6,
        type: ImageTypes.Fixed,
        imageName: "slider_item_IMG_3784",
        alt: "slider_item_IMG_3784",
        className: "slider_item_IMG_3784"
    },
    {
        id: 7,
        type: ImageTypes.Fixed,
        imageName: "slider_item_IMG_3779",
        alt: "slider_item_IMG_3779",
        className: "slider_item_IMG_3779"
    },
    {
        id: 8,
        type: ImageTypes.Fixed,
        imageName: "slider_item_IMG_3695",
        alt: "slider_item_IMG_3695",
        className: "slider_item_IMG_3695"
    },
    {
        id: 9,
        type: ImageTypes.Fixed,
        imageName: "slider_item_IMG_3587",
        alt: "slider_item_IMG_3587",
        className: "slider_item_IMG_3587"
    }
]

const Slider2 = () =>
{
    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const [sliderPosition, setSliderPosition] = React.useState<number>(0);

    React.useEffect(() => {
        function handleResize () {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    React.useEffect(() =>
    {
        if (width <= 750)
        {
            const autoSliderInterval: NodeJS.Timer = setInterval(() => sliderRightButtonHandler(), 5000);
            return () => { clearInterval(autoSliderInterval) }
        }
    })

    const sliderRightButtonHandler = () =>
    {
        const position = sliderController(width);
        if ((sliderPosition - position)  === images.length * (-position))
        {
            setSliderPosition(0)
        }
        else
        {
            setSliderPosition(sliderPosition - position);
        }
    };

    const sliderLeftButtonHandler = () =>
    {
        const position = sliderController(width);
        if ((sliderPosition + position)  === images.length * position)
        {
            setSliderPosition(0)
        }
        else if (sliderPosition !== 0)
        {
            setSliderPosition(sliderPosition + position);
        }
    }
    return (
        <div className={"slider2-first-container"}>
            <div className={"slider-wrapper-container"}>
                <ul style={{ position: "absolute", top: 0, left: sliderPosition, right: 0, bottom: 0 }}>
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
            </div>
            <div className={`slider2-controller-container`}>
                <span onClick={() => sliderLeftButtonHandler()} />
                <span onClick={() => sliderRightButtonHandler()} />
            </div>
        </div>
    )
}

export default Slider2;