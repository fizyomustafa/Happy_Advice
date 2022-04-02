import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Advice from "./pages/Advice";
import Favorites from "./pages/Favorites";


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Routes>
            <Route path="/" element={<Advice />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
