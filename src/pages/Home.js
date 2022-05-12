import React from 'react';
import Section from '../components/Section';
import '../styles/home.scss';

function Home() {
  return (
    <div className='main'>
        <Section 
            title = 'Tesla Model S'
            description = 'Order Online Touchless delivery'
            backgroundImage = 'model-s.jpg'
            leftButtonText = 'Custom Order'
            rightButtonText = 'Existsing Inventory'
        />
    </div>
  )
}

export default Home;