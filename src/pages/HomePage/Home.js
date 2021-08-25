import React from 'react';
import {homeObjTwo, homeObjThree, homeObjOne, homeObjFour} from './Data';
import './home.css';
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import {SliderData} from "../../components/ImageSlider/SliderData";
import InfoSection from "../../components/InfoSection/InfoSection";
import Pricing from "../../components/Pricing/Pricing";

function Home() {
  return (
    <>

        <InfoSection {...homeObjOne}/>
        <ImageSlider slides={SliderData} />
        {/*<InfoSection {...homeObjThree} />*/}
        {/*<InfoSection {...homeObjTwo} />*/}


        <InfoSection {...homeObjFour} />
        <Pricing />
    </>
  );
}

export default Home;
