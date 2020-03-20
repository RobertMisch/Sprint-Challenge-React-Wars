import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    background-color: white;
    opacity:50%;
    width: 40%
`;

const StarWarsCard = (props) => {
    return(
        <Container>
            <h1>{props.data.name}</h1>
            <p>Height {props.data.height} cm</p>
            <p>Weight {props.data.weight} kg</p>
            <p>Haircolor: {props.data.hair_color}</p>
            <p>Eyecolor: {props.data.eye_color}</p>
            <p>Skincolor: {props.data.skin_color}</p>
            <p>Birth Year: {props.data.bitth_year}</p>
            <p>Gender: {props.data.gender}</p>
        </Container>
    )
}

export default StarWarsCard