import React from 'react'
import './DropDownItemComponent.css'

function DropDownItemComponent({ icon: Icon, text }) {
    return (
      <>
        <div className='dropdown-item'>
          <Icon
            size={16}
            className='dropdown-item-icon'
          />
          <a className='dropdown-item-text'>{text}</a>
        </div>
        </>
    )
}

export default DropDownItemComponent