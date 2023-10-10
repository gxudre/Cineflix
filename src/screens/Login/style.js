import styled from "styled-components/native";

export const Container = styled.View`
    background-color: rgba(0,0,0,0.7);
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'stretch'
})`
    width: 50%;
    height: 10%;
    margin-bottom: 100px;
`;

export const ImageBackground = styled.ImageBackground.attrs({
    
})`
    flex:1;
`;

export const ContainerInput = styled.View`

width: 100%;
background-color: #fff;
margin-bottom: 10px;
border-radius: 8px;


`;

export const Input = styled.TextInput`
    width: 100%;
    height: 45px;
    padding-horizontal: 10px;
    margin-left: 15px;
    color: black;

`;

export const Buttom = styled.TouchableOpacity`
width: 80%;
height: 45px;
border-radius: 8px;
border-width: 0.5px;
border-color: white;
justify-content: center;
align-items: center;
margin-top: 20px;
margin-bottom: 10px;
`;

export const Text = styled.Text`
    color: white;
    font-size: 16px;


`;

export const TextContainer = styled.View`
    margin-top: 24px;

`;

export const Form = styled.View`
width: 80%;
height: 45px;
align-items: center;


`;