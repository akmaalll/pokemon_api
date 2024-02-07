import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  const getAllPokemon = async () => {
    const ress = await fetch(loadMore);
    const data = await ress.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const ress = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await ress.json();

        setAllPokemon((currentlist) => [...currentlist, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemon);
    // console.log(data)
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  {
    console.log(allPokemon.map((i) => i.types.map((i) => i.type.name)));
  }

  return (
    <div className="py-10 px-10">
      <h1 className="text-3xl font-bold text-center pb-10">
        Pokemon Evolution
      </h1>
      <div className="">
        <div className="gap-5 flex flex-wrap justify-center ">
          {allPokemon.map((pokemon) => (
            <Card
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types.map((items) => items.type.name)}
              type2={pokemon.types[0].type.name}
              // type2={pokemon.types[1].}
            />
          ))}
        </div>
        <button
          className="text-based font-semibold text-white bg-yellow-400 mt-3 py-3 px-8 rounded-full"
          onClick={() => getAllPokemon()}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
