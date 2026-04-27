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
        <Title>Темы обучения</Title>
        <Row>
            <Row>
                <NavLink to="/patterns" end style={textDecorationDisabled}>
                    <NavButton>
                        Паттерны
                    </NavButton>
                </NavLink>
                <NavLink to="/cart" end style={textDecorationDisabled}>
                    <NavButton>
                        Корзина товаров
                    </NavButton>
                </NavLink>
            </Row>
        </Row>
    </Wrapper>
  );
}
