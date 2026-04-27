import styled from "styled-components";

export const Button = styled.button`
    width: auto;
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

export const Input = styled.input`
    width: 20rem;
    height: 2rem;

    padding: 1rem;
    outline: none;
    border: none;
    border-bottom: 1px solid RoyalBlue;
    cursor: pointer;

    font-size: 1rem;
`