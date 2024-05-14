import React,{useState,useContext} from 'react';
import Logo from '../../assets/images/olx5151.jpg'
import './Signup.css'
import { FirebaseContext } from '../../store/Context';
import {useNavigate} from 'react-router-dom'

export default function Signup() {
  const navigate =useNavigate();
  const [userName,setUserName] = useState('');
  const [userEmail,setUserEmail] = useState('');
  const [userPhone,setUserPhone] = useState('');
  const [userPassword,setUserPassword] = useState('');
  const {Firebase} = useContext(FirebaseContext)

  const handleSubmit=(e)=>{
    e.preventDefault();
    Firebase.auth().createUserWithEmailAndPassword(userEmail,userPassword).then((result)=>{
      result.user.updateProfile({displayName:userName}).then(()=>{
        Firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:userName,
          phone:userPhone
        }).then(()=>{
          navigate('/login')
        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='img'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={userPhone}
            onChange={(e)=>setUserPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form> 
        <div>
          <a href='/login'>login</a>
        </div>
      </div>
    </div>
  );
}
