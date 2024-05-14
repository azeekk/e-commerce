import {React,useState,useContext} from 'react';
import Logo from '../../assets/images/olx5151.jpg';
import './Login.css';
import {FirebaseContext} from '../../store/Context'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [userEmail,setUserEmail] = useState('');
  const [userPassword,setUserPassword] = useState('');
  const {Firebase} =useContext(FirebaseContext)
  const handleLogin = (e) => {
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(userEmail,userPassword).then(()=>{
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='img2'></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={userEmail}
            onChange={(e)=>setUserEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={userPassword}
            onChange={(e)=>setUserPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button onClick={handleLogin}>Login</button>
        </form>
        <a href='signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
