import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
