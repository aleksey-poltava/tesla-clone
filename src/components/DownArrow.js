import React from 'react';
import '../styles/down-arrow.scss';

function DownArrow({src}) {
  return (
    <div className='downArrow'>
        <img src={src} alt='down arrow' />
    </div>
  )
}

export default DownArrow;