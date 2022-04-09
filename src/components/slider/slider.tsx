import * as React from "react";
import {IImage, ISliderProps} from "../../utils/interfaces/interfaces";
import Image from "../image/image";
import "./slider.css";

const Slider: React.FC<ISliderProps> = (props: ISliderProps) =>
{
    const [sliderPosition, setSliderPosition] = React.useState<number>(0);
    const [width, setWidth] = React.useState<number>(window.innerWidth);

    React.useEffect(() => {
        function handleResize () {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    const widthHandler = () =>
    {
        let slsidePosition = 550;

        if (width <= 777)
        {
            return 300;
        }
        if (width <= 868)
        {
            return 350;
        }
        if (width <= 925)
        {
            return 400;
        }
        if(width <= 990)
        {
            return 450;
        }
        if (width <= 1250)
        {
            return 500;
        }
        console.log(slsidePosition, "okoko")

        return slsidePosition;
    }

    const sliderHandler = (side: string) =>
    {
        const a = widthHandler();
        console.log(a, "before")
        console.log(side, "side");
        if (side === "left")
        {

            if ((sliderPosition + a)  === props.images.length * a)
            {
                setSliderPosition(0)
            }
            else if (sliderPosition !== 0)
            {
                setSliderPosition(sliderPosition + a);
            }
        }
        else
        {
            console.log(a, "after");
            if ((sliderPosition - a)  === props.images.length * (-a))
            {
                setSliderPosition(0)
            }
            else
            {
                setSliderPosition(sliderPosition - a);
            }
        }

    }
    return (
        <div className={`slider-container-${props.content}`}>
            <div style={{position: "relative"}}>
                <div className={`slider-container-inner-wrapper-${props.content}`}>
                    {console.log(width, "widthhhhh")}
                    <ul style={{left: sliderPosition}} className={`slider-wrapper-${props.content}`}>
                        {
                            props.images.map((image: IImage) => (
                                <li key={image.id}>
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
                <div className={`slider-controller-container-${props.content}`}>
                    <span onClick={() => sliderHandler("left")}/>
                    <span onClick={() => sliderHandler("right")}/>
                </div>
            </div>
        </div>
    )
}

export default Slider;