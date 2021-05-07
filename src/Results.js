import axios from "axios";
import { useEffect, useState } from "react";
import Nominations from "./Nominations";

function Results(props) {
  let search = props.search;

  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);

  let URL = `http://www.omdbapi.com/?s=${search}&type=movie&page=1&apikey=1236cf2`;

  const getAllMovies = () => {
    axios
      .get(URL)
      .then((res) => {
        setMovies(res.data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllMovies();
  }, [search]);

  console.log(nominations);
  if (movies) {
    return (
      <div className="boxes">
        <div className="results">
          {movies.map((movie) => {
            return (
              <article>
                <div>{movie.Title}</div>
                <div>{movie.Year}</div>
                <button
                  type="button"
                  onClick={() => setNominations([...nominations, movie])}
                >
                  Nominate
                </button>
              </article>
            );
          })}
        </div>
        <Nominations nomination={nominations} />
      </div>
    );
  } else {
    return (
      <div className="boxes">
        <div className="results"></div>
        <Nominations />
      </div>
    );
  }
}

export default Results;
