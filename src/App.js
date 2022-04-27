import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
        <Route exact path='/' element={<SignUp/>} />        
    </div>
  );
}

export default App;
