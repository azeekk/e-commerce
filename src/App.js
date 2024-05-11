import './App.css';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignupPage from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
