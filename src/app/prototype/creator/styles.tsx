import styled from "styled-components";

export const Wrapper = styled.div`
    width: 20rem;
    height: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border: 1px solid green;
    border-radius: 1rem;
`

export const Description = styled.p`
    width: auto;

    padding: 1rem;
    
    text-align: center;
    font-size: 1rem;
    color: RoyalBlue;
`

export const Title = styled.h4`
    width: auto;
`

export const Price = styled.p`
    width: auto;

    text-align: center;
    font-size: 1rem;
    color: Gold;
`

export const OfferButton = styled.a`
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
    background: Green;
`