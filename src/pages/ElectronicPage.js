import React from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard/ItemCard";
import { electronicList } from "../data/electronicList";

const ElectronicPage = () => {
  const params = useParams();
  return (
    <div>
      <h2>{params.categoryId}</h2>
      <div className="item-container">
        {electronicList.list.map((item) => {
          return (
            <ItemCard
              key={item.id}
              item={item}
              categoryId={electronicList.categoryId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ElectronicPage;
