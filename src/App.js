import logo from './logo.svg';
import './App.css';
import main from './style/main.scss'

import Header from './cmp/Header';
import Footer from './cmp/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
<Header />
      </header>
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
