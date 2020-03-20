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

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  if(!data){
    return(<p>Loading . . .</p>)
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
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
