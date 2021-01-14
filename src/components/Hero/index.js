import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from './Hero';
import ikea from '../../assets/product-images/ikea1.JPG'
import ikea1 from '../../assets/product-images/ikea2.JPG'

const Hero = () => {
  return(
    <Wrapper className="section-content">
       <article className='content'>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <NavLink 
          to='/products' 
          className='btn hero-btn'>
          shop now
        </NavLink>
      </article>
      <article className='img-container'>
        <img 
          src={ikea1} 
          alt='nice table' 
          className='main-img' 
        />
        <img 
          src={ikea} 
          alt='person working' 
          className='accent-img' 
          />
      </article>
    </Wrapper>
  )
}

export default Hero;