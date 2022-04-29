import * as React from "react";
import {IMenu, IMenuData, IMenuItem} from "../../utils/interfaces/interfaces";
import {StaticQuery, graphql} from "gatsby"
import "./menu.css";
import {ImageTypes} from "../../utils/enums/imageTypes";
import MenuItem from "../menu-item/menuItem";
import Dropdown from "../dropdown/dropdown";


const menu: IMenu[] = [
    {
        id: 1,
        title: "Оснавные блюда",
        subtitle: "main"
    },
    {
        id: 2,
        title: "Салаты",
        subtitle: "salad"
    },
    {
        id: 3,
        title: "Супы",
        subtitle: "soup"
    },
    {
        id: 4,
        title: "Десерты",
        subtitle: "dessert"
    },
    {
        id: 5,
        title: "Напитки",
        subtitle: "drinks"
    },
    {
        id: 6,
        title: "Закуски",
        subtitle: "snacks"
    },
    {
        id: 7,
        title: "Мангал",
        subtitle: "brazier"
    }
]


// @ts-ignore
const Menu: React.FC = ({data}) => {
    const [activeMenu, setActiveMenu] = React.useState<string>("Оснавные блюда");
    const [page, setPage] = React.useState<number>(0);
    const [activePage, setActivePage] = React.useState<number>(0);
    const [currantCategory, setCurrantCategory] = React.useState<string>("main");
    const [menuData, setMenuData] = React.useState<IMenuData>({
        main: [],
        dessert: [],
        hot_snack: [],
        brazier: [],
        drinks: [],
        soup: [],
        salad: [],
        snacks: []
    })
    const itemCount = 8;

    const activePageHandler = (pageIndex: number) => {
        setPage( itemCount * pageIndex)
        setActivePage(pageIndex)
    }

    React.useEffect(() =>
    {
        const menuCategories: IMenuData  = {
            main: [],
            dessert: [],
            hot_snack: [],
            brazier: [],
            drinks: [],
            soup: [],
            salad: [],
            snacks: []
        }
        for (let i: number = 0; i < data.allMenuJson.edges.length; i++)
        {
            const item: IMenuItem = data.allMenuJson.edges[i].node;
            switch (item.category)
            {
                case "MAIN":
                    menuCategories.main.push(item);
                    break;
                case "DESSERT":
                    menuCategories.dessert.push(item);
                    break;
                case "HOT-SNACK":
                    menuCategories.hot_snack.push(item);
                    break;
                case "DRINKS":
                    menuCategories.drinks.push(item);
                    break;
                case "SOUP":
                    menuCategories.soup.push(item);
                    break;
                case "SALAD":
                    menuCategories.salad.push(item);
                    break;
                case "SNACKS":
                    menuCategories.snacks.push(item);
                    break;
                case "BRAZIER":
                    menuCategories.brazier.push(item);
                    break;
            }

        }
        setMenuData(menuCategories);

    }, [])

    return (
        <div id={"menu"} className="menu-component-container">
            <p className="menu-component-title">М<span>еню</span></p>
            <ul className="menu-component-menu-container">
                {menu.map((item: IMenu) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            setActiveMenu(item.title);
                            setCurrantCategory(item.subtitle);
                            setPage(0);
                            setActivePage(0);
                        }}
                        className={`${activeMenu === item.title ? "selected-menu-item" : ""}`}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
            <div className={"menu-mobile-container-wrapper"}>
               <Dropdown
                menu = {menu}
                activeMenu = {activeMenu}
                setActiveMenu = {setActiveMenu}
                setCurrantCategory = {setCurrantCategory}
                setPage = {setPage}
                setActivePage = {setActivePage}
               />
            </div>
            <ul className="menu-component-content-container">
                {
                    [...menuData[currantCategory]].splice(page, itemCount).map((item: any, index: number) => (
                            <MenuItem
                                key={index}
                                alt={item.image_name}
                                uniqueId={item.id}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                type={ImageTypes.Fixed}
                                imageName={item.image_name}
                            />
                    ))
                }
            </ul>
            <div className={"pagination-container"}>
                {
                    [...Array(Math.ceil(menuData[currantCategory].length / itemCount))].map((_: any, index: number) => (
                        <span
                            key={index}
                            style={{marginLeft: `${index !== 0}` ? "14px" : ""}}
                            className={`pagination-item ${index === activePage ? "active-page" : ""}`}
                            onClick={() => activePageHandler(index)}
                        ><a href={"#menu"}/></span>
                    ))
                }
            </div>
        </div>
    )
}

export default function MyMenu(props: any) {
    return (
        // @ts-ignore
        <StaticQuery
            query={graphql`
        query {
           allMenuJson {
            edges {
             node {
              id
              image_path
              image_name
              category
              price
              title
              description
             }
            }
        }
        }
      `}
            render={data => <Menu data={data} {...props} />}
        />
    )
};