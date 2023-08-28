import React, { useEffect, useState } from "react";

const WindiwWiddth = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films");
        const data = await response.json();
        setFilms(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Films</h1>
      <ul>
        {films.map((item) => {
          return (
            <div key={item.episode_id}>
              <h1>{item.director}</h1>
              <li>{item.title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default WindiwWiddth;
