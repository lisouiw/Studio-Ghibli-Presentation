import React, { useState, useEffect } from "react";
import { getFilms } from "../query/query";
import FilmCard from "../component/FilmCard";

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms()
      .then(res => setFilms(res.data))
      .catch(() => {});
  }, []);

  if (films.length === 0) return "";

  return (
    <div className="columns is-multiline">
      {films.map((film, i) => (
        <div className="column is-one-third" key={i}>
          <FilmCard film={film} />
        </div>
      ))}
    </div>
  );
}
