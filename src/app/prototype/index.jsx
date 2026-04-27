import { Wrapper, Title, Offers } from './styles';
import { CardWithPrice, CardWithOffer } from './creator';

export const Prototype = () => {
    return (
        <Wrapper>
            <Title>Prototype</Title>

            <Offers>
                <CardWithPrice title={"Реклама"} description={"Реклама какого то конкретного товара"} price={"100 рублёв"} />
                <CardWithOffer 
                    title={"Левое предложение"} 
                    description={"Сторонняя реклама чужого предложения"} 
                    offerLink={"https://google.com"} 
                    offerText={"Найдется всё"} 
                />
            </Offers>
        </Wrapper>
    )
};
