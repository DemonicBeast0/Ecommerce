import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Data from './pages/DataTable';
// import Product from './pages/Product';
import Sidebar from './components/Sidebar';
import 'antd/dist/reset.css';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: -2500, padding: 250, width: '100%',position: 'center' }}>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/About" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
