import styled from "styled-components";

export const RandomMemeDivContainer = styled.div`
    margin: 4%;
    text-align: center;
`;

export const RandomMemeImg = styled.img`
    border: solid 1px orange;
    width: 500px;
    height: 500px;
    margin: 15px;
    cursor: pointer;
`;

export const RandomMemeButton = styled.button`
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-size: 16px;
    background-color: orange;
    border: 2px orange solid;
    outline: none;
    transition: all 0.4s ease-in-out;
    border-radius: 4px;
    color: #fff;
    padding: 15px;
    cursor: pointer;
    display: flex;
    margin: 10px auto;
    :hover {
        background-color: transparent;
    }
`;