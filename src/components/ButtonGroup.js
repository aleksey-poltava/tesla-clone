import React from 'react'
import Button from './Button';
import '../styles/button-group.scss';

function ButtonGroup({buttons}) {
  return (
    <div className='buttonGroup'>
        <Button style='leftButton' >{buttons.left}</Button>
        <Button style='rightButton' >{buttons.right}</Button>
    </div>
  )
}

export default ButtonGroup;