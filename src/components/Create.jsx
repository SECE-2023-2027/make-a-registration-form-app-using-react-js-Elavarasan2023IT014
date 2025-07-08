import React from 'react';
import '../styles/Create.css';

const Create = () => {
  return (
    <div className="create-wrapper">
    
      <section className="create-hero">
        <h1>create</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          doloribus ut iure itaque quibusdam rem accusantium deserunt
          reprehenderit sunt minus.
        </p>
        <button className="create-button">findout</button>
      </section>

      
      <section className="create-content">
        <div className="create-text">
          <h2>create your passion</h2>
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
        <div className="create-image">
          <img src="/laptop2.jpg" alt="Laptop with coffee" />
        </div>
      </section>
    </div>
  );
};

export default Create;
