import React,{ useContext,useState,useEffect } from 'react';

import './view.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
function View() {
  const { postDetails } = useContext(PostContext);
  const { Firebase } = useContext(FirebaseContext);

  useEffect(()=>{
    const {userId} = postDetails
    Firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc =>{
        
      })
    })
  })
console.log(postDetails);



  return (  
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdDate}</span>
        </div>
    
      </div>
    </div>
  );
}
export default View;
