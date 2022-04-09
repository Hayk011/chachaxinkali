export interface IImage {
    id: number;
    type: string;
    imageName: string;
    className?: string;
    alt: string;
}

export interface ISliderProps {
    content: string;
    images: IImage[]
}

export interface ILink {
    id: number;
    href: string;
    className: string;
}

export interface IAboutContent {
    id: number;
    title: string;
    text: string
}

export interface IMenu {
    id: number;
    title: string;
    subtitle: string;
}

export interface IMenuContent {
    id: number;
    path: string;
    title: string;
    type: string;
    price: number;
    description: string;
}

export interface IImageProps {
    type: string;
    imageName: string;
    className?: string;
    alt?: string;
}

export interface IMenuItem {
    id: string,
    image_path: string,
    image_name: string,
    category: string,
    price: number,
    title: string,
    description: string
}

export interface IMenuData {
    [key: string]: IMenuItem[]
}

export interface IMenuItemProps extends IImageProps {
    key: number;
    title: string;
    price: number;
    description: string;
}

export interface IMobileMenuProps {
    isMenuOpen: boolean;
}