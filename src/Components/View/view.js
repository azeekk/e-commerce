import React,{useContext,useState,useEffect} from 'react';

import './view.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
function View() {
  const [userDetails, setUserDetails] = useState(null);
  const { postDetails } = useContext(PostContext);
  const { Firebase } = useContext(FirebaseContext);

  useEffect(()=>{
    const {userId} = postDetails
    Firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc =>{
        setUserDetails(doc.data())
      })
    })
  })

  console.log(postDetails);

  return (  
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url || ""}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price || 'price'}</p>
          <span>{postDetails.name || 'name'}</span>
          <p>{postDetails.category || 'category'}</p>
          <span>{postDetails.createdDate || 'date'}</span>
        </div>
       <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username || 'username'}</p>
          <p>{userDetails.phone || 'Phonenumber'}</p>
        </div> 
      </div>
    </div>
  );
}
export default View;
