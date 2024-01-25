import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Amthal from "./components/Amthal";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

ReactDom.render(
  <BrowserRouter>
  <Header></Header>
    <Routes>
        <Route exact path="/" element={<App/>}></Route>
        <Route path="/amthal" element={<Amthal/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
