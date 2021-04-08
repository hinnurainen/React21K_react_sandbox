import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
