import {React,useEffect,useContext} from 'react';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import { AuthContext, FirebaseContext } from './store/Context';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import Post from './store/PostContext'

function App() {
  const {setUser} = useContext(AuthContext)
  const {Firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    Firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div className="App">
      <Post>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/viewpost' element={<ViewPost />}></Route>
      </Routes>
      </BrowserRouter>
      </Post>

    </div>
  );
}

export default App;
