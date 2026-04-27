import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
`

export const Button = styled.button`
    width: 20rem;
    height: 2rem;

    padding: 1rem;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-size: 1rem;
    color: white;
    background: RoyalBlue;
`

export const Title = styled.h2`
    width: auto;
`

export const Message = styled.p`
    width: auto;
    height: 2rem;

    padding: 1rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-size: 1rem;
    color: RoyalBlue;
`