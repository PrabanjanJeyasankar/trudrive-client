import React, { useEffect, useRef, useState } from 'react'
import './RightNavBarComponent.css'
import DropDownItemComponent from '../../DropDownItemComponent/DropDownItemComponent'
import ProfileImage from '../../../img/prof_img.jpg'
import { Settings, Pencil, LogOut } from 'lucide-react'

function RightNavBarComponent() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  let menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsDropDownOpen(false)
        // console.log(menuRef.current)
      }
    }
    document.addEventListener('mousedown', handler)
    
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  const handleIsDropDownMenu = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  return (
    <>
      <Settings size={24} className='settings-icon' />
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={handleIsDropDownMenu}>
          <img src={ProfileImage} alt='User' className='user-image' />
        </div>
        <div
          className={`dropdown-menu ${isDropDownOpen ? 'active' : 'inactive'}`}>
          <img src={ProfileImage} />
          <h3>Prabanjan Jeyasankar</h3>
          <div className='menu-options'>
            <ul>
              <DropDownItemComponent icon={Pencil} text='Edit' />
            </ul>
            <ul>
              <DropDownItemComponent icon={LogOut} text='Log Out' />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightNavBarComponent
