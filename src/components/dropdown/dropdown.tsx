import React, { useRef } from "react";
import "./dropdown.css";
import {useDetectOutsideClick} from "./useDetectOutsideClick";
import {IMenu} from "../../utils/interfaces/interfaces";
export default function Dropdown(props: any) {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    return (
    <div className="mobile-container">
        <div className="mobile-menu-container">
            <button onClick={onClick} className="mobile-menu-trigger">
                <span>{props.activeMenu}</span>
            </button>
            <nav
                ref={dropdownRef}
                className={`mobile-menu ${isActive ? "active" : "inactive"}`}
            >
                <ul>
                    {
                        props.menu.map((item: IMenu) => (
                            <li
                                key = {item.id}
                                onClick={ () => {
                                    setIsActive(false)
                                    props.setActiveMenu(item.title);
                                    props.setCurrantCategory(item.subtitle);
                                    props.setPage(0);
                                    props.setActivePage(0);
                                }}
                            >{item.title}</li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    </div>
)

}