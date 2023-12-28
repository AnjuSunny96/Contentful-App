import React from 'react';
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Activated charcoal jianbing viral ethical, typewriter gluten-free offal. Small batch normcore VHS, lumbersexual bodega boys live-edge health goth pinterest pour-over mumblecore sustainable put a bird on it food truck tumblr godard. Poke 3 wolf moon brunch franzen vape butcher letterpress, quinoa next level banjo banh mi shoreditch hexagon. </p>
            </div>
            <div className="img-container">
                <img className='img' src={heroImg} alt="a woman and the browser" />
            </div>
        </div>
    </section>
  )
}

export default Hero
