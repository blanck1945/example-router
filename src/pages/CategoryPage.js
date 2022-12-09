import React from "react";
import { useParams } from "react-router-dom";
import BooksPage from "./BooksPage";
import ElectronicPage from "./ElectronicPage";
import VehiculePage from "./VehiculePage";
import HomePage from "./HomePage";

const CategoryPage = () => {
  const params = useParams();

  switch (params.categoryId) {
    case "libros":
      return <BooksPage />;
    case "electronica":
      return <ElectronicPage />;
    case "vehiculos":
      return <VehiculePage />;
    default:
      return <HomePage />;
  }
};

export default CategoryPage;
