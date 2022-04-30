import * as React from "react";
import { useStaticQuery ,graphql } from "gatsby";
import Img from "gatsby-image";
import { IImageProps } from "../../utils/interfaces/interfaces";
import { ImageTypes } from "../../utils/enums/imageTypes";



const Image = (props: IImageProps): any =>
{
    const data = useStaticQuery(graphql`
       query {
        slider_item_IMG_20220429: file(relativePath:{eq:"slider-item-IMG-20220429.png"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    slider_item_IMG_9101: file(relativePath:{eq:"slider-item-IMG_9101.png"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    slider_item_IMG_8994: file(relativePath:{eq:"slider-item-IMG_8994.png"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    slider_item_IMG_8937: file(relativePath:{eq:"slider-item-IMG_8937.png"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    slider_item_IMG_3846: file(relativePath:{eq:"slider-item-IMG_3846.png"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    slider_item_IMG_3784: file(relativePath:{eq:"slider-item-IMG_3784.png"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    slider_item_IMG_3779: file(relativePath:{eq:"slider-item-IMG_3779.png"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    slider_item_IMG_3695: file(relativePath:{eq:"slider-item-IMG_3695.png"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    slider_item_IMG_3587: file(relativePath:{eq:"slider-item-IMG_3587.png"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
        welcome: file(relativePath:{eq:"welcome.png"}){
            childImageSharp{
                fixed {
                ...GatsbyImageSharpFixed
            }
        }
    }
        IMG_4796: file(relativePath:{eq:"IMG_4796.jpg"}){
            childImageSharp{
                fixed(width: 620, height: 603) {
                ...GatsbyImageSharpFixed
            }
        }
    }
        menu1: file(relativePath:{eq:"menu1.png"}){
            childImageSharp{
                fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
            }
        }
    }
     menu2: file(relativePath:{eq:"menu2.png"}){
            childImageSharp{
                fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    menu3: file(relativePath:{eq:"menu3.png"}){
            childImageSharp{
                fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    menu4: file(relativePath:{eq:"menu4.png"}){
            childImageSharp{
                fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
            }
        }
    }
     menu5: file(relativePath:{eq:"menu5.png"}){
            childImageSharp{
                fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
            }
        }
    }
     menu6: file(relativePath:{eq:"menu6.png"}){
            childImageSharp{
                fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
            }
        }
    }
     menu7: file(relativePath:{eq:"menu7.png"}){
            childImageSharp{
                fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
            }
        }
    }
     menu8: file(relativePath:{eq:"menu8.png"}){
            childImageSharp{
                fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
            }
        }
    }
     ChiefCooker: file(relativePath:{eq:"ChiefCooker.jpg"}){
            childImageSharp{
                fixed(height: 610, width: 571){
                ...GatsbyImageSharpFixed
            }
        }
    }
    footer1: file(relativePath:{eq:"footer1.png"}){
            childImageSharp{
                fixed(height: 100, width: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    footer2: file(relativePath:{eq:"footer2.png"}){
            childImageSharp{
                fixed(height: 100, width: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    footer3: file(relativePath:{eq:"footer3.png"}){
            childImageSharp{
                fixed(height: 100, width: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    footer4: file(relativePath:{eq:"footer4.png"}){
            childImageSharp{
                fixed(height: 100, width: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3460: file(relativePath:{eq:"IMG_3460.jpg"}){
            childImageSharp{
                fixed(height: 75, width: 75){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3462: file(relativePath:{eq:"IMG_3462.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3463: file(relativePath:{eq:"IMG_3463.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3474: file(relativePath:{eq:"IMG_3474.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3491: file(relativePath:{eq:"IMG_3491.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3501: file(relativePath:{eq:"IMG_3501.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3508: file(relativePath:{eq:"IMG_3508.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3513: file(relativePath:{eq:"IMG_3513.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3524: file(relativePath:{eq:"IMG_3524.jpg"}){
            childImageSharp{
              fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3534: file(relativePath:{eq:"IMG_3534.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3546: file(relativePath:{eq:"IMG_3546.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3552: file(relativePath:{eq:"IMG_3552.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3560: file(relativePath:{eq:"IMG_3560.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3567: file(relativePath:{eq:"IMG_3567.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3580: file(relativePath:{eq:"IMG_3580.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3587: file(relativePath:{eq:"IMG_3587.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3597: file(relativePath:{eq:"IMG_3597.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3608: file(relativePath:{eq:"IMG_3608.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3615: file(relativePath:{eq:"IMG_3615.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3631: file(relativePath:{eq:"IMG_3631.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3641: file(relativePath:{eq:"IMG_3641.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3650: file(relativePath:{eq:"IMG_3650.jpg"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3661: file(relativePath:{eq:"IMG_3661.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3669: file(relativePath:{eq:"IMG_3669.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3679: file(relativePath:{eq:"IMG_3679.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3686: file(relativePath:{eq:"IMG_3686.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3695: file(relativePath:{eq:"IMG_3695.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3702: file(relativePath:{eq:"IMG_3702.jpg"}){
            childImageSharp{
              fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3707: file(relativePath:{eq:"IMG_3707.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3719: file(relativePath:{eq:"IMG_3719.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3727: file(relativePath:{eq:"IMG_3727.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3738: file(relativePath:{eq:"IMG_3738.jpg"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3756: file(relativePath:{eq:"IMG_3756.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3763: file(relativePath:{eq:"IMG_3763.jpg"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3767: file(relativePath:{eq:"IMG_3767.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3772: file(relativePath:{eq:"IMG_3772.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3775: file(relativePath:{eq:"IMG_3775.jpg"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3779: file(relativePath:{eq:"IMG_3779.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3784: file(relativePath:{eq:"IMG_3784.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3793: file(relativePath:{eq:"IMG_3793.jpg"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3799: file(relativePath:{eq:"IMG_3799.jpg"}){
            childImageSharp{
                fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3806: file(relativePath:{eq:"IMG_3806.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3814: file(relativePath:{eq:"IMG_3814.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3827: file(relativePath:{eq:"IMG_3827.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3834: file(relativePath:{eq:"IMG_3834.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3839: file(relativePath:{eq:"IMG_3839.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3846: file(relativePath:{eq:"IMG_3846.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3867: file(relativePath:{eq:"IMG_3867.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3871: file(relativePath:{eq:"IMG_3871.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_3875: file(relativePath:{eq:"IMG_3875.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_8937: file(relativePath:{eq:"IMG_8937.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_8942: file(relativePath:{eq:"IMG_8942.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_8949: file(relativePath:{eq:"IMG_8949.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_8952: file(relativePath:{eq:"IMG_8952.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_8955: file(relativePath:{eq:"IMG_8955.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_8966: file(relativePath:{eq:"IMG_8966.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_8968: file(relativePath:{eq:"IMG_8968.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_8976: file(relativePath:{eq:"IMG_8976.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_8981: file(relativePath:{eq:"IMG_8981.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_8984: file(relativePath:{eq:"IMG_8984.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_8991: file(relativePath:{eq:"IMG_8991.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_8994: file(relativePath:{eq:"IMG_8994.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9002: file(relativePath:{eq:"IMG_9002.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9008: file(relativePath:{eq:"IMG_9008.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9014: file(relativePath:{eq:"IMG_9014.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9024: file(relativePath:{eq:"IMG_9024.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9033: file(relativePath:{eq:"IMG_9033.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9034: file(relativePath:{eq:"IMG_9034.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9037: file(relativePath:{eq:"IMG_9037.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9043: file(relativePath:{eq:"IMG_9043.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9046: file(relativePath:{eq:"IMG_9046.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9051: file(relativePath:{eq:"IMG_9051.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9054: file(relativePath:{eq:"IMG_9054.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9058: file(relativePath:{eq:"IMG_9058.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9067: file(relativePath:{eq:"IMG_9067.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9077: file(relativePath:{eq:"IMG_9077.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9080: file(relativePath:{eq:"IMG_9080.jpg"}){
            childImageSharp{
              fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9089: file(relativePath:{eq:"IMG_9089.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9095: file(relativePath:{eq:"IMG_9095.jpg"}){
            childImageSharp{
              fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9101: file(relativePath:{eq:"IMG_9101.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9112: file(relativePath:{eq:"IMG_9112.jpg"}){
            childImageSharp{
              fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9130: file(relativePath:{eq:"IMG_9130.jpg"}){
            childImageSharp{
              fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9137: file(relativePath:{eq:"IMG_9137.jpg"}){
            childImageSharp{
              fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9145: file(relativePath:{eq:"IMG_9145.jpg"}){
            childImageSharp{
              fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9158: file(relativePath:{eq:"IMG_9158.jpg"}){
            childImageSharp{
              fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
    IMG_9160: file(relativePath:{eq:"IMG_9160.jpg"}){
            childImageSharp{
               fixed(quality: 100){
                ...GatsbyImageSharpFixed
            }
        }
    }
}
  `)
    return (
        <>
            {
                // @ts-ignore
                props.type === ImageTypes.Fixed ? <Img className={props.className} fixed={data[props.imageName].childImageSharp.fixed} alt={props.alt} /> :
                    // @ts-ignore
                    <Img className={props.className} fluid={data[props.imageName].childImageSharp.fluid} alt={props.alt} />
            }
        </>
    )
};

export default Image;