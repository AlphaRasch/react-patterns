import { type JSX } from "react";
import { GenButton, Link } from "../styles";

export type ComponentsMap = "button" | "link"

export type FactoryElement = {
    Component: ({ children, ...props }: { children: JSX.Element}) => JSX.Element,
    value: string,
    props?: any
}

type ComponentsFactory = (type: ComponentsMap) => FactoryElement | null

export const componentsFactory: ComponentsFactory = (type: ComponentsMap) => {
    switch (type) {
        case 'button': return {
            Component: ({ children }) => <GenButton>{children}</GenButton>,
            value: "Кнопка"
        };
        case 'link': return {
            Component: ({ children, ...props }) => <Link {...props}>{children}</Link>,
            value: "Ссылка",
            props: {
                href: "https://google.com",
                target: "_blank"
            }
        };
        default: return null;
    }
}