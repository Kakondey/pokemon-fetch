import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListPokemon = () => {
  const [pokeList, setPokeList] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon?offset=$%7Boffset%7D&limit=$%7Blimit%7D"
      )
      .then((response) => {
        // console.log();
        setPokeList(response.data.results);
      })
      .catch((error) => {});
  }, []);

  var str = "https://pokeapi.co/api/v2/pokemon/2/";

  var x = str.match("[0-9]+(?=/$)")[0];
  console.log(x);
  return (
    <div>
      {pokeList.map((pokemon) => {
        return (
          <Link
            key={pokemon.url.match("[0-9]+(?=/$)")[0]}
            to={{
              pathname: `/pokemon/${pokemon.url.match("[0-9]+(?=/$)")[0]}/`,
            }}
          >
            <p>{pokemon.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ListPokemon;
