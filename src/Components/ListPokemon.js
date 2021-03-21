import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListPokemon = () => {
  const [pokeList, setPokeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=100&limit=1038")
      .then((response) => {
        // console.log();
        setPokeList(response.data.results);
      })
      .catch((error) => {});
  }, []);
  console.log(pokeList);
  //   pagination logic
  //   const totalPages = Math.ceil(pokeList.length / pokemonPerPage);
  const indexOfLastpokemon = currentPage * pokemonPerPage;
  const indexOfFirstpokemon = indexOfLastpokemon - pokemonPerPage;
  const currentPokemons = pokeList.slice(
    indexOfFirstpokemon,
    indexOfLastpokemon
  );

  const paginationArray = [];
  for (let i = 1; i <= Math.ceil(pokeList.length / pokemonPerPage); ++i) {
    paginationArray.push(i);
  }

  const handlePaginate = (index) => {
    setCurrentPage(index);
  };

  const handleNext = () => {
    setCurrentPage(
      currentPage === pokeList.length / pokemonPerPage ? 1 : currentPage + 1
    );
  };
  const handlePrev = () => {
    setCurrentPage(
      currentPage === 1 ? pokeList.length / pokemonPerPage - 1 : currentPage - 1
    );
  };

  return (
    <div>
      {currentPokemons.map((pokemon) => {
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
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        {paginationArray.map((index) => {
          return (
            <p onClick={() => handlePaginate(index)} key={index}>
              {index}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ListPokemon;
