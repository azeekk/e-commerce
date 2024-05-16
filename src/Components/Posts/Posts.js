import React,{useEffect,useContext,useState} from 'react';

import Heart from '../../assets/Heart';
import './Posts.css';
import bike from '../../assets/images/r15.jpg';
import { FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';

function Posts() {  
const navigate = useNavigate()
const {Firebase} = useContext(FirebaseContext);
const [products,setProducts] = useState([]);
const {setPostDetails} = useContext(PostContext)

useEffect(()=>{
  Firebase.firestore().collection('products').get().then((snapshot)=>{
    const allPost = snapshot.docs.map((product)=>{
      return {
        ...product.data(),
        id:product.id
      }
    })
    setProducts(allPost)
  })
},)

function handlePost() {
  setPostDetails(products)
  navigate('/viewpost')
}


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product)=>{

            return <div
            className="card"
            onClick={handlePost}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img className='bike1' src={product.url} alt="bike"  />
            </div>
            <div className="content">
              <p className="rate">{product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdDate}</span>
            </div>
          </div>
          })
        }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img className='bike2' src={bike} alt="bike2"  />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
