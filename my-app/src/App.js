import './App.css';
import Admin from './Component/Admin/Admin';
import Dashboard from './Component/Admin/Dashboard';
import Blog from './Component/Admin/Blog';


import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';


import Home from './Component/Home';
import Header from './Component/Header';
import About from './Component/About';
import Prod from './Component/Prod';
import Contact from './Component/Contact';
import Single from './Component/Single';
import Product1 from './Component/Product1';
import AddProduct from './Component/AddProduct';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Footer from './Component/Footer';


function App() {
  return (
    //   <>
    //   <BrowserRouter>
    //     <Admin />
    //     <Routes>
    //     <Route path='/Dashboard' element={<Dashboard />} />
    //       <Route path='/Blog' element={<Blog />} />

    //     </Routes>
    //   </BrowserRouter>
    // </>



     <>
       <MemoryRouter>
        
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Prod />} />
          <Route path="/product/:id" element={<Single />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/update/:id" element={<AddProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
       
       </MemoryRouter> 
     </>
  );
}

export default App;
