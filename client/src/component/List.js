import React from "react";

export default function List({ data, title }) {
  return (
    <React.Fragment>
      <hr />
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>
        <div className="content">
          <ul>
            {data.map(({ name }, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
