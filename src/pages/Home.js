import React from 'react';
import Section from '../components/Section';
import '../styles/home.scss';

function Home({refs, data}) {
  return (
    <div className='main'>
      {data && data.map((d) =>
        <Section key={d.id}
            id={d.id}
            title = {d.title}
            description = {d.description}
            backgroundImage = {d.image}
            leftButtonText = {d.leftButtonText}
            rightButtonText = {d.rightButtonText}
            slides = {data?.length}
        />
      )}
    </div>
  )
}

export default Home;