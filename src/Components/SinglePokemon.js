import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
const SinglePokemon = ({ state }) => {
  const url = useHistory().location.pathname;

  const [Image, setImage] = useState("");
  const [abilites, setAbilites] = useState([]);
  const [bodyFeatures, setBodyFeatures] = useState({ height: "", weight: "" });
  const [moves, setMoves] = useState([]);
  //   console.log(url.match("[0-9]+(?=/$)")[0]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${url.match("[0-9]+(?=/$)")[0]}/`)
      .then((response) => {
        setImage(response.data.sprites.front_default);
        setAbilites(response.data.abilities);
        setBodyFeatures({
          height: response.data.height,
          weight: response.data.weight,
        });
        setMoves(response.data.moves);
        // height , weight, moves
        // console.log(response.data.moves);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <img src={Image} alt="" />
      <div>
        <h1>ABILITIES</h1>
        {abilites.map((ability) => {
          return <p>{ability.ability.name}</p>;
        })}
      </div>
      <div>
        <h3>Height : {bodyFeatures.height}</h3>
        <h3>Weight : {bodyFeatures.weight}</h3>
      </div>
      <div>
        <h1>MOVES</h1>
        <div
          style={{
            overflow: "scroll",
            height: "200px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          {moves.map((move) => {
            return <p key={move.id}>{move.move.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SinglePokemon;
