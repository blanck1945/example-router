import React from "react";
import { Link, useParams } from "react-router-dom";
import { DB } from "../data/indexes";

const ItemPage = () => {
  const { categoryId, id } = useParams();

  const record = DB[categoryId][id - 1];

  return (
    <div className="item-page">
      <div className="item-page-section">
        <div className="item-page-section-header">
          <Link to={`/category/${categoryId}`}>
            <button className="abs-btn">Volver</button>
          </Link>
          <div />
          <h1 className="item-page-section-title">{record.name}</h1>
        </div>
        <div className="item-page-section-section-description">
          <p>ID: {id}</p>
          <p className="item-page-section-description">{record.description}</p>
        </div>
        <div className="item-page-section-footer">
          <p>Precio</p>
          <p>$99.99</p>
        </div>
      </div>
      <div className="item-page-section">
        <img
          className="item-page-section-img"
          src={record.img}
          alt={`${record.name}`}
        />
      </div>
    </div>
  );
};

export default ItemPage;
