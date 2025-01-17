import React, { useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import LoginPopUp from './component/LoginPopUp/LoginPopUp';
import ExploreMenu from './component/ExploreMenu/ExploreMenu';



const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} setUserName={setUserName} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} userName={userName} /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<ExploreMenu/>} />
          <Route path='/footer' element={<Footer/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
