import React from 'react';

import {SubHeading} from '../../components';
import {images } from '../../constants';
import './Header.css';

const Header = () => (
    <div className='app__header section__padding app__wrapper' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title='Chase the new flavour' />
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0'}}>
        Welcome to our modern culinary haven, where taste meets innovation and ambiance reigns supreme. 
        Step into a world where delectable flavors are meticulously crafted, each dish an artful masterpiece
         that delights both the eyes and the palate.
        </p>
        <button type='button' className='custom__button'>Explore More</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
 
);

export default Header;
