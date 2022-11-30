import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import TableHome from './Pages/TableHome';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/HomePage" element={<HomePage/>}/>
          <Route exact path="/TableHome" element={<TableHome/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
