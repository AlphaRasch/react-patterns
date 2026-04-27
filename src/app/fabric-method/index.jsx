import { useState } from 'react';
import { Wrapper, Button, Title } from './styles';
import { componentsFactory } from './factory';

export const FabricMethod = () => {
    const [componentsList, setComponentsList] = useState([])

    const handleAddComponent = (type) => {
        const component = componentsFactory(type)

        setComponentsList([...componentsList, component])
    }

    return (
        <Wrapper>
            <Title>FabricMethod</Title>
            <Button onClick={() => handleAddComponent("button")}>Добавить кнопку</Button>
            <Button onClick={() => handleAddComponent("link")}>Добавить ссылку</Button>

            {
                componentsList.map((elem, i) => (
                    <elem.Component key={i} {...elem?.props}>
                        {elem.value}
                    </elem.Component>
                ))
            }
        </Wrapper>
    )
};
