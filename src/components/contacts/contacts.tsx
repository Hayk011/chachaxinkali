import React from "react";
import "./contacts.css";
import { StaticImage } from "gatsby-plugin-image";
import {ILink} from "../../utils/interfaces/interfaces";

const links: ILink[] = [
    {
        id: 1,
        href: "https://www.facebook.com/hayk.gukasyan.79",
        className: "contact-fb"
    },
    {
        id: 2,
        href: "https://instagram.com/chachahinkali?utm_medium=copy_link",
        className: "contact-insta"
    },
    {
        id: 3,
        href: "",
        className: "contact-vk"
    }
];

const Contacts: React.FC = () =>
{
    return (
        <div id={"contact"} className="contacts-container-wrapper">
            <StaticImage
                src="../../images/contact-bg.png"
                alt="contact background image"
                className="contact-background-image"
                style={{ height: "661px" }}
            />
            <div className="contacts-container">
                <div style={{position: "relative"}}>
                    <p className="contact-title">C<span>ontacts</span></p>
                    <div className="contact-info-container">
                        <p className="contact-item contact-work-time">Ждем вас в гости, ежедневно 12:00 - 23:00</p>
                        <p className="contact-item contact-address">Санкт-Петербург, Комендантский проспект, д. 44</p>
                        <p className="contact-item contact-phone">+7 (921) 907 34 97</p>
                        <div className="contact-link-container">
                            {links.map((link: ILink) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    target="_blank"
                                    className={link.className}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    <iframe
                        className={"map"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.755439084049!2d30.265074316099625!3d60.002548981899515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696343cbd1e6259%3A0x4cf7cc2417131fb7!2sKomendantskiy%20Prospekt%2C%2044%2C%20Sankt-Peterburg%2C%20Russia%2C%20197227!5e0!3m2!1sen!2s!4v1629178619862!5m2!1sen!2s"
                        loading="lazy" style={{backgroundColor: "#000"}}>
                    </iframe>
                </div>

                <p className="contact-title-mobile">C<span>ontacts</span></p>
            </div>

        </div>
    )
};

export default Contacts;