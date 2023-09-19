import logo from './logo.svg';
import './App.css';
import Header from './cmp/Header';
import Footer from './cmp/Footer';
import HomePage from './pages/HomePage';





function App() {
  return (
    <div className="App">
      <header className="App-header">
<Header />
      </header>
< HomePage />


      <Footer />
    </div>
  );
}

export default App;
