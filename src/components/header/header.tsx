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


const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    return (
        <header>
            <img src={"./images/logo.svg"} alt="logo"/>
            <ul className="menu-container">
                {
                    menu.map((item: IMenu) => (
                        <li key={item.id}>
                            <a href={item.path}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
            <div onClick={() => setIsOpen(!isOpen)} className={"burger-menu"}>
                <span/>
                <span/>
                <span/>
            </div>
            <div className={"mobile-router"} style={{ left: isOpen ? "20%" : "100%" }}>
                <span onClick={() => setIsOpen(false)}/>
                <ul className="mobile-router-container">
                    {
                        menu.map((item: IMenu) => (
                            <li onClick={() => setIsOpen(false)} key={item.id}>
                                <a href={item.path}>{item.title}</a>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </header>
    )
}

export default Header
