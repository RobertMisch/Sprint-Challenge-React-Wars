import React, {useEffect, useState} from 'react';
import './App.css';
import StarWarsCard from './components/StarWarsCard';
import axios from 'axios';
import styled from 'styled-components'

const ContainerContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

const BetterH1 = styled.div`
    width: 60%;
    border-bottom: 2px solid black;
`;

const BetterButton = styled.button`
  font-weight:bold;
  padding: 3%;
  margin: 0 4%;
`;

// const proxy = `https://cors-anywhere.herokuapp.com/`;
// const url = `https://swapi.co/api/people/?page=${page}`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // const proxy = `https://cors-anywhere.herokuapp.com/`;
  // const url = `https://swapi.co/api/people/?page=${page}`;

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(response => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, [page]);

  if(!data){
    return(<p>Loading . . .</p>)
  }

  return (
    <div className="App">
      <ButtonContainer>
        <BetterButton onClick={() =>{
          if(page > 1){
            setPage(page - 1)
        }else(
          console.log('you\'re at the begining')
        )}}>Prev Page</BetterButton>

        <BetterH1 className="Header">
          <h1>React Wars</h1>
          <p>Current Page [{page}]</p>
          </BetterH1>
        
        <BetterButton onClick={()=> {setPage(page + 1)}}>Next Page</BetterButton>
      </ButtonContainer>
      <ContainerContainer>
        {data.map((item, index) => {
            return <StarWarsCard data= {item} key={index}/>;
          })}
      </ContainerContainer>
    </div>
  );
}
// {films.map(film => {
//   return <MovieCard film={film} key={film.id} />;
// })}
export default App;
