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

export function Patterns() {
  return (
    <Wrapper id="patterns">
        <Title>Поведенческие паттерны</Title>
        <Row>
            <NavLink to="/patterns/observer" end style={textDecorationDisabled}>
                <NavButton>
                    Observer
                </NavButton>
            </NavLink>
            <NavLink to="/patterns/strategy" end style={textDecorationDisabled}>
                <NavButton>
                    Strategy
                </NavButton>
            </NavLink>
            <NavLink to="/patterns/state" end style={textDecorationDisabled}>
                <NavButton>
                    State
                </NavButton>
            </NavLink>
        </Row>

        <Title>Порождающие паттерны</Title>
        <Row>
            <NavLink to="/patterns/singleton" end style={textDecorationDisabled}>
                <NavButton>
                    Singleton
                </NavButton>
            </NavLink>
            <NavLink to="/patterns/fabric-method" end style={textDecorationDisabled}>
                <NavButton>
                    FabricMethod
                </NavButton>
            </NavLink>
            <NavLink to="/patterns/prototype" end style={textDecorationDisabled}>
                <NavButton>
                    Prototype
                </NavButton>
            </NavLink>
        </Row>

        <Title>Структурные паттерны</Title>
        <Row>
            <NavLink to="/patterns/proxy" end style={textDecorationDisabled}>
                <NavButton>
                    Proxy
                </NavButton>
            </NavLink>
            <NavLink to="/patterns/bridge" end style={textDecorationDisabled}>
                <NavButton>
                    Bridge
                </NavButton>
            </NavLink>
        </Row>
    </Wrapper>
  );
}
