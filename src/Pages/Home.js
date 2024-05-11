//@ts-ignore
import React from 'react';

import Header from '../Components/Header/Header';
//@ts-ignore
import Banner from '../Components/Banner/Banner';
//@ts-ignore
import Posts from '../Components/Posts/Posts';
//@ts-ignore
import Footer from '../Components/Footer/Footer';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 
