import { Wrapper, Title, Description, Price, OfferButton } from "./styles";

const BaseCard = ({ title, description, children }) => (
    <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {
            children
        }
    </Wrapper>
)

export const CardWithPrice = ({ title, description, price }) => (
    <BaseCard title={title} description={description}>
        <Price>{price}</Price>
    </BaseCard>
)

export const CardWithOffer = ({ title, description, offerLink, offerText }) => (
    <BaseCard title={title} description={description}>
        <OfferButton href={offerLink} target="_blank">{offerText}</OfferButton>
    </BaseCard>
)