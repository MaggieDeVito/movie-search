import axios from "axios";
import { useEffect, useState } from "react";

function Results(props) {
  let search = props.search;

  const [movies, setMovies] = useState([]);

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

  if (movies) {
    return (
      <div className="results">
        {movies.map((movie) => {
          return (
            <article>
              <div>{movie.Title}</div>
              <div>{movie.Year}</div>
              <button type="button">Nominate</button>
            </article>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Results;
