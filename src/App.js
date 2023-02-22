import "./App.css";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleMovie from "./SingleMovie";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/:id" element={<SingleMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
