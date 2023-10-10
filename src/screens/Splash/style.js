import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #000;
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'stretch'
})`
    width: 50%;
    height: 10%;
`;

export const Load = styled.ActivityIndicator`
 
`;

export const ImageBackground = styled.Image.attrs({
    resizeMode: 'stretch'
})`
    width: 100%;
    height: 25%;
    position: absolute;
    bottom : 0px;
`;