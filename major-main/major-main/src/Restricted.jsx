import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import PowerIcon from './Icons/PowerIcon';
import ShopIcon from './Icons/ShopIcon';
import logoFull from '/logo-full.png';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CollectionDetail from './pages/CollectionDetail';

const RestrictedContent = ({ logout }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">

      
      <header className="flex items-center justify-between px-12 py-8 border-b border-gray-700 h-[140px]">

        
        <div className="flex items-center space-x-8">
       
          <div className="flex flex-col justify-center space-y-2 cursor-pointer">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>

          
          <Link
            to="/collection/Championship%20Icy%20Silver"
            className="text-2xl font-bold uppercase tracking-widest text-white hover:text-[#E63946] transition-colors duration-300"
          >
            Collections
          </Link>
        </div>

        
        <div className="flex flex-col items-center flex-1">
          <a href="/">
            <img src={logoFull} alt="Major" className="w-[220px]" />
          </a>
        </div>

        
        <div className="flex items-center space-x-12">
          <ShopIcon
            onClick={() => navigate('/shop')}
            width={36}
            height={36}
            stroke="currentColor"
            className="cursor-pointer hover:text-[#E63946] transition-colors duration-300"
          />
          <PowerIcon
            onClick={logout}
            width={36}
            height={36}
            stroke="currentColor"
            className="cursor-pointer hover:text-[#E63946] transition-colors duration-300"
          />
        </div>

      </header>

      
      <main className="flex-1 overflow-y-auto p-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collection/:collectionName" element={<CollectionDetail />} />
        </Routes>
      </main>

    </div>
  );
};

const Restricted = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'Majorszn') {
      setIsAuthenticated(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      {!isAuthenticated ? (
        <div className="bg-[#111] p-14 rounded-xl shadow-2xl w-full max-w-md">
          <div className="flex flex-col items-center space-y-12">
            <img src="/padlock.png" alt="Lock" className="w-[160px] h-[160px]" />
            <h1 className="text-3xl font-bold text-center text-[#E63946]">Restricted Access</h1>
            <form onSubmit={handleSubmit} className="w-full space-y-10">
              <div className="text-left">
                <label htmlFor="password" className="block mb-2 font-semibold text-gray-300">
                  Access Code
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-600 rounded-md bg-black text-white focus:ring-2 focus:ring-[#E63946] outline-none"
                  placeholder="Enter code"
                />
              </div>
              {errorMessage && <p className="text-red-400 text-sm">{errorMessage}</p>}
              <button
                type="submit"
                className="w-full bg-[#E63946] hover:bg-[#DF3844] text-white font-semibold py-3 rounded-md transition-all"
              >
                Unlock
              </button>
            </form>
          </div>
        </div>
      ) : (
        <RestrictedContent logout={() => setIsAuthenticated(false)} />
      )}
    </div>
  );
};

export default Restricted;
