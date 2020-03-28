import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { getFilms, getInformations } from "../query/query";
import List from "../component/List";

export default function Film() {
  const [film, setFilm] = useState([]);
  const [people, setPeople] = useState([]);
  const [locations, setLocations] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  let { params } = useRouteMatch("/films/:id");

  const props = [
    { title: "People", data: people },
    { title: "Locations", data: locations },
    { title: "Species", data: species },
    { title: "Vehicles", data: vehicles }
  ];

  useEffect(() => {
    getFilms(params.id).then(async res => {
      setFilm(res.data[0]);
      setPeople(await getInformations(res.data[0].url, "/people"));
      setLocations(await getInformations(res.data[0].url, "/locations"));
      setSpecies(await getInformations(res.data[0].url, "/species"));
      setVehicles(await getInformations(res.data[0].url, "/vehicles"));
    });
  }, []);

  if (film.length === 0) return "";

  return (
    <div>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{film.title}</p>
              <p className="subtitle is-6">{film.release_date}</p>
            </div>
          </div>
          <div className="content">
            <div class="field is-grouped is-grouped-multiline">
              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-dark">Director</span>
                  <span class="tag is-link">{film.director}</span>
                </div>
              </div>

              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-dark">Producer</span>
                  <span class="tag is-info">{film.producer}</span>
                </div>
              </div>

              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-dark">Score</span>
                  <span
                    class={`tag is-${
                      film.rt_score > 50 ? "success" : "danger"
                    }`}
                  >
                    {film.rt_score}
                  </span>
                </div>
              </div>
            </div>
            <blockquote>{film.description} </blockquote>
          </div>
        </div>

        {props.map(({ title, data }, i) =>
          data.length > 0 ? (
            <List data={data} title={title} key={i} />
          ) : (
            <React.Fragment />
          )
        )}
      </div>
    </div>
  );
}
