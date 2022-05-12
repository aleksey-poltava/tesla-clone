import React from 'react'
import '../styles/item-text.scss';

function ItemText({title, description}) {
  return (
    <div className='itemText'>
        <h1>
            {title}
        </h1>
        <p>{description}</p>
    </div>
  )
}

export default ItemText;