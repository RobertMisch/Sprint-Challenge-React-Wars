import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: white;
    opacity:50%;
    width: 40%;
    margin: 2% 0;
    font-weight:bold;
    border: black solid 1px;
    border-radius: 10px;
`;

const BetterH1 = styled.h1`
    width: 100%;
    border-bottom: 2px solid black;
`;

const BetterFont = styled.p`
    font-weight:bold;
    font-size: 1.5rem;
    width:40%;
`;

const StarWarsCard = (props) => {
    return(
        <Container>
            <BetterH1>{props.data.name}</BetterH1>
            <BetterFont>Height: {props.data.height}cm</BetterFont>
            <BetterFont>Weight: {props.data.mass}kg</BetterFont>
            <BetterFont>Haircolor: {props.data.hair_color}</BetterFont>
            <BetterFont>Eyecolor: {props.data.eye_color}</BetterFont>
            <BetterFont>Skincolor: {props.data.skin_color}</BetterFont>
            <BetterFont>Birth Year: {props.data.birth_year}</BetterFont>
            <BetterFont>Gender: {props.data.gender}</BetterFont>
        </Container>
    )
}

export default StarWarsCard