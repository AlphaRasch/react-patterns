import { useState } from 'react';
import { Wrapper, Message, Button, Title } from './styles';

export const StateComponent = () => {
    const [selectedTab, setSelectedTab] = useState("first")

    return (
        <Wrapper>
            <Title>State</Title>
            <Button onClick={() => setSelectedTab("first")}>FirstTab</Button>
            <Button onClick={() => setSelectedTab("second")}>SecondTab</Button>

            {
                selectedTab === "first" && <Message>First Tab</Message>
            }
            {
                selectedTab === "second" && <Message>Second Tab</Message>
            }
        </Wrapper>
    )
};
