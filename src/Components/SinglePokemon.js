import { useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
const SinglePokemon = ({ state }) => {
  const url = useHistory().location.pathname;

  console.log(url.match("[0-9]+(?=/$)")[0]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${url.match("[0-9]+(?=/$)")[0]}/`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div></div>;
};

export default SinglePokemon;
