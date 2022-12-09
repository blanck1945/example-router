import React from "react";
import { bookList } from "../data/booksList";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard/ItemCard";
import { indexes } from "../data/indexes";

const BooksPage = () => {
  const params = useParams();
  return (
    <div>
      <h2>{params.categoryId}</h2>
      <div className="item-container">
        {bookList.list.map((item) => {
          return (
            <ItemCard
              key={item.id}
              item={item}
              categoryId={bookList.categoryId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BooksPage;
