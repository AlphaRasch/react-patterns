import { ReactNode } from "react";
import { Wrapper, Title, Description, Price, OfferButton } from "./styles";

type BaseCardComponent<T = {}> = {
    title: string,
    description: string,
    children: ReactNode
} & T

type CardWithPriceComponent = Omit<BaseCardComponent<{ 
    price: string
}>,"children">

type CardWithOfferComponent = Omit<BaseCardComponent<{ 
    offerLink: string,
    offerText: string
}>, "children">

const BaseCard: React.FC<BaseCardComponent> = ({ title, description, children }) => (
    <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {
            children
        }
    </Wrapper>
)

export const CardWithPrice: React.FC<CardWithPriceComponent> = ({ title, description, price }) => (
    <BaseCard title={title} description={description}>
        <Price>{price}</Price>
    </BaseCard>
)

export const CardWithOffer: React.FC<CardWithOfferComponent> = ({ title, description, offerLink, offerText }) => (
    <BaseCard title={title} description={description}>
        <OfferButton href={offerLink} target="_blank">{offerText}</OfferButton>
    </BaseCard>
)