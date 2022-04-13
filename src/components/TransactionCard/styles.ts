import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import {RFValue} from "react-native-responsive-fontsize"; 

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape };
    border-radius: 5px; 
    padding: 17px 24px; 
    margin-top: 14px;
`;


export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px; 
    color: ${({ theme }) => theme.fonts.regular};

`;
export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${RFValue(20)}px; 
    color: ${({ theme }) => theme.fonts.income};
    margin-top: 2px; 
`;
export const Footer = styled.View`
    flex-direction: row;
    align-itens: center; 
    justify-content: space-between; 
    margin-top: 20px;
`;
export const Category = styled.View`
    flex-direction: row;
    align-itens: center; 

`;
export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px; 
    color: ${({ theme }) => theme.fonts.text};
`;
export const CategoryName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px; 
    color: ${({ theme }) => theme.fonts.text};
    margin-left: 17px; 
`;
export const Date = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px; 
    color: ${({ theme }) => theme.fonts.text};
`;