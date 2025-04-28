import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restricted from './Restricted'; // Ensure this import is correct
import Shop from './pages/Shop'; // Ensure the Shop component is correctly imported
import CollectionDetail from './pages/CollectionDetail'; // Ensure this import is correct
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Restricted />} />
        <Route path="/shop" element={<Shop />} /> {/* Add route for Shop */}
        <Route path="/collection/:collectionName" element={<CollectionDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
