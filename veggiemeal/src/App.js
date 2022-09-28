import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
      <Nav />
      <Pages />
    </>
  );
}

export default App;
