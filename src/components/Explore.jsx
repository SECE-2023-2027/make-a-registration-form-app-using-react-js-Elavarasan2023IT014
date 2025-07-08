import React from 'react';
import '../styles/Explore.css';

const Explore = () => {
  return (
    <div className="explore-wrapper">
     
      <section className="explore-hero">
        <h1>explore</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          doloribus ut iure itaque quibusdam rem accusantium deserunt
          reprehenderit sunt minus.
        </p>
        <button className="explore-button">findout</button>
      </section>

      <section className="explore-content">
        <div className="explore-image">
          <img src="/laptop.jpg" alt="Laptop Demo" />
        </div>
        <div className="explore-text">
          <h2>Explore & Connect</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            reiciendis, voluptate at alias laborum odit aliquid tempore
            perspiciatis repudiandae hic?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            reiciendis, voluptate at alias laborum odit aliquid tempore
            perspiciatis repudiandae hic?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            reiciendis, voluptate at alias laborum odit aliquid tempore
            perspiciatis repudiandae hic?
          </p>
        </div>
      </section>
    </div>
  );
};

export default Explore;
