import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
   <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Shop />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
   </>
  );
}

export default App;
