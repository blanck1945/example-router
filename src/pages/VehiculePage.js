import React from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard/ItemCard";
import { vehiculeList } from "../data/vehiculeList";

const VehiculePage = () => {
  const params = useParams();
  return (
    <div>
      <h2>{params.categoryId}</h2>
      <div className="item-container">
        {vehiculeList.list.map((item) => {
          return (
            <ItemCard
              key={item.id}
              item={item}
              categoryId={vehiculeList.categoryId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VehiculePage;
