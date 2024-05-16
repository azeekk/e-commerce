import React,{useContext,useState,useEffect} from 'react';

import './view.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
function View() {
const [userDetails,setUserDetails] = useState()
const {postDetails} = useContext(PostContext)
const {Firebase} = useContext(FirebaseContext)
 useEffect(()=>{
  const userid = postDetails
  Firebase.firestore().collection('users').where('id','==',userid).get().then((res)=>{
    res.forEach(doc => {
      setUserDetails(doc.data())
    })
  })
 })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src=""
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; price</p>
          <span>name</span>
          <p>category</p>
          <span>createdDate</span>
        </div>
       <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div> 
      </div>
    </div>
  );
}
export default View;
