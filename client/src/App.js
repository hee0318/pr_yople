import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./page/Home";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
