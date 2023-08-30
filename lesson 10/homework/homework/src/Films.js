import React, { useEffect, useState } from "react";
import "./index.css";

const Films = () => {
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
      <h1 className="title">Films</h1>
      <ul className="list-item">
        {films.map((item) => {
          return (
            <div className="mainInfo" key={item.episode_id}>
              <li className="items">
                <h1>{item.title}</h1>
                <p>{item.director}</p>
                <h3>Characters</h3>
                <li>
                  <p>{item.characters}</p>
                </li>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Films;
