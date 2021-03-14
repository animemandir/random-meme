import styled from "styled-components";

export const RandomMemeDivContainer = styled.div`
    margin-top: 3%;
    text-align: center;
    @media (max-width: 600px) {
        position: relative;
        top: 50px;
    }
`;

export const RandomMemeTitle = styled.h1`
    color: darkorange;
`;

export const RandomMemeImg = styled.img`
    width: 500px;
    height: 500px;
    margin: 15px;
    cursor: pointer;
    @media (max-width: 600px) {
        width: 350px;
        height: 350px;
    }
`;

export const RandomMemeAuthor = styled.span`
    color: lightgrey;
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