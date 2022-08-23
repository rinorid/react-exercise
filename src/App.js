import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
