import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Products from './pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
            <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/products' element={<Products />} />
                  <Route path='/products/:id' element={<ProductDetailPage />} />
                  <Route path='*' element={<h1>Error 404 - page not found</h1>} />
            </Routes>      
      </BrowserRouter>



    </div>
  );
}

export default App;
