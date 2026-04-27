import { useState } from 'react';
import { Wrapper, Button, Title } from './styles';
import { componentsFactory, type FactoryElement, type ComponentsMap } from './factory';

export const FabricMethod = () => {
    const [componentsList, setComponentsList] = useState<FactoryElement[]>([])

    const handleAddComponent = (type: ComponentsMap) => {
        const component = componentsFactory(type)

        if (component) {
            setComponentsList([...componentsList, component])
        }
    }

    return (
        <Wrapper>
            <Title>FabricMethod</Title>
            <Button onClick={() => handleAddComponent("button")}>Добавить кнопку</Button>
            <Button onClick={() => handleAddComponent("link")}>Добавить ссылку</Button>

            {
                componentsList.map(({ Component, value, props }, i) => (
                    <Component key={i} {...props}>
                        {value}
                    </Component>
                ))
            }
        </Wrapper>
    )
};
