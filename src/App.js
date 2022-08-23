import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/category/detail/:mealID" element={<Detail />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
