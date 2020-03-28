import React from "react";

export default function FilmCard({ film }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{film.title}</p>
            <p className="subtitle is-6">{film.release_date}</p>
          </div>
        </div>
        <div className="content">
          {film.description.substring(0, 100) + "..."}
        </div>
      </div>
      <footer className="card-footer">
        <a href={`/films/${film.id}`} className="card-footer-item">
          <span className="icon">
            <i className="fas fa-search"></i>
          </span>
          <span>View more details</span>
        </a>
      </footer>
    </div>
  );
}
