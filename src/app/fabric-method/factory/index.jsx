import { GenButton, Link } from "../styles";

export const componentsFactory = (type) => {
    switch (type) {
        case 'button': return {
            Component: GenButton,
            value: "Кнопка"
        };
        case 'link': return {
            Component: Link,
            value: "Ссылка",
            props: {
                href: "https://google.com",
                target: "_blank"
            }
        };
        default: return null;
    }
}