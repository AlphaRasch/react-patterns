import { NavLink } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
`

const NavButton = styled.button`
    width: 15rem;
    height: 2rem;

    padding: 2rem;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-size: 1.6rem;
    color: white;
    background: RoyalBlue;
    text-decoration: none;
`

const Row = styled.div`
    width: auto;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
`

const Title = styled.h2`
    width: auto;
`

const textDecorationDisabled = {
    textDecoration: "none"
}

export function App() {
    return (
        <Wrapper className="App">
            <Title>Поведенческие паттерны</Title>
            <Row>
                <NavLink to="/observer" end style={textDecorationDisabled}>
                    <NavButton>
                        Observer
                    </NavButton>
                </NavLink>
                <NavLink to="/strategy" end style={textDecorationDisabled}>
                    <NavButton>
                        Strategy
                    </NavButton>
                </NavLink>
                <NavLink to="/state" end style={textDecorationDisabled}>
                    <NavButton>
                        State
                    </NavButton>
                </NavLink>
                <NavLink to="/command" end style={textDecorationDisabled}>
                    <NavButton>
                        Command
                    </NavButton>
                </NavLink>
            </Row>

            <Title>Порождающие паттерны</Title>
            <Row>
                <NavLink to="/singleton" end style={textDecorationDisabled}>
                    <NavButton>
                        Singleton
                    </NavButton>
                </NavLink>
                <NavLink to="/fabric-method" end style={textDecorationDisabled}>
                    <NavButton>
                        FabricMethod
                    </NavButton>
                </NavLink>
                <NavLink to="/prototype" end style={textDecorationDisabled}>
                    <NavButton>
                        Prototype
                    </NavButton>
                </NavLink>
                <NavLink to="/builder" end style={textDecorationDisabled}>
                    <NavButton>
                        Builder
                    </NavButton>
                </NavLink>
            </Row>

            <Title>Структурные паттерны</Title>
            <Row>
                <NavLink to="/proxy" end style={textDecorationDisabled}>
                    <NavButton>
                        Proxy
                    </NavButton>
                </NavLink>
                <NavLink to="/bridge" end style={textDecorationDisabled}>
                    <NavButton>
                        Bridge
                    </NavButton>
                </NavLink>
                <NavLink to="/decorator" end style={textDecorationDisabled}>
                    <NavButton>
                        Decorator
                    </NavButton>
                </NavLink>
            </Row>
        </Wrapper>
    );
}
