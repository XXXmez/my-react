import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import SliderPage from "./pages/SliderPage/SliderPage";
import HiddenTextPage from "./pages/HiddenTextPage/HiddenTextPage";
import AccordionPage from "./pages/AccordionPage/AccordionPage";
import TranslatorV1Page from "./pages/Translator_v1_Page/Translator_v1_Page";
import TranslatorV2Page from "./pages/Translator_v2_Page/Translator_v2_Page";
import PaginationPage from "./pages/PaginationPage/PaginationPage";
import TodoPage from "./pages/TodoPage/TodoPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/hidden_text" element={<HiddenTextPage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/translator_v1" element={<TranslatorV1Page />} />
          <Route path="/translator_v2" element={<TranslatorV2Page />} />
          <Route path="/pagination" element={<PaginationPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
