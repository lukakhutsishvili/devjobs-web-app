import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import { useState } from "react";
import data from "./data.json";
import Page from "./pages/page";

function App() {
  const [dark, setDark] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <div
        className={`bg-overlay w-full h-full absolute z-50  ${
          !modal ? "hidden" : "block"
        } `}
        onClick={() => setModal(!modal)}
      ></div>
      <Header dark={dark} setDark={setDark} />
      <Routes>
        <Route
          path="/"
          element={
            <Home data={data} dark={dark} modal={modal} setModal={setModal} />
          }
        />
        <Route path="/:name" element={<Page dark={dark} data={data} />} />
      </Routes>
    </>
  );
}

export default App;
