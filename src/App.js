import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Fondo from "./img/fotoFondo.jpg";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/item/:categoryId/:id" element={<ItemPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <ItemListContainer>
<header>
  <span>Bulonera Jeanneret</span>
</header>
<main>
  <span>Desde hace mas 50 años proveyendo a la industria</span>
  <span>con la mayor variedad y el mejor precio</span>
  <img src={Fondo} alt="imagen de bulones"></img>
  <span>Si existe y no lo tenemos lo conseguimos. Consúltenos</span>
</main>
<Footer />
</ItemListContainer> */
}
