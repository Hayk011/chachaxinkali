import * as React from "react";
import "./header.css";

interface HeaderProps {
    siteTitle: string
}

interface IMenu {
    id: number;
    title: string;
    path: string;
}

const menu: IMenu[] = [
    {
        id: 1,
        title: "Меню",
        path: "#menu"
    },
    {
        id: 3,
        title: "Про повара",
        path: "#about-the-cook"
    },
    {
        id: 4,
        title: "Контакты",
        path: "#contact"
    },
    {
        id: 5,
        title: "О ресторане",
        path: "#about"
    }
]


const Header: React.FC<HeaderProps> = ({siteTitle}: HeaderProps) => {
    return (
        <header>
            <img src={"./images/logo.png"} alt="logo"/>
            <ul className="menu-container">
                {
                    menu.map((item: IMenu) => (
                        <li key={item.id}>
                            <a href={item.path}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}

export default Header
