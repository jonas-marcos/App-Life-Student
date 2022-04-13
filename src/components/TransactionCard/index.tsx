import React from 'react';
import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from './styles';

export function TransactionCard() {
    return (
        <Container>
            <Title>Bolsa Pibic</Title>
            <Amount>R$ 400,00</Amount>
            <Footer>
                <Category>
                    <Icon name = 'dollar-sign'/>
                        <CategoryName>Auxilio</CategoryName>   
                </Category>

                <Date> 13/02/2022 </Date>
            </Footer>
        </Container>
    );

}