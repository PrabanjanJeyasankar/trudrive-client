import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './SideNavBarComponent.css'
import LoginComponent from '../../LoginComponent/LoginComponent'
import SignUpComponent from '../../SignUpComponent/SignUpComponent'
import HomeComponent from '../../Routes/HomeComponent/HomeComponent'
import MyDriveComponent from '../../Routes/MyDriveComponent/MyDriveComponent'
import SharedWithMeComponent from '../../Routes/SharedWithMeComponent/SharedWithMeComponent'
import RecentAccessComponent from '../../Routes/RecentAccessComponent/RecentAccessComponent'
import FavoriteFileComponent from '../../Routes/FavoriteFileComponent/FavoriteFileComponent'
import TrashComponent from '../../Routes/TrashComponent/TrashComponent'
import { Home, Folder, Clock, Heart, Users, Trash2 } from 'lucide-react';
import { FaFolderOpen } from "react-icons/fa6";
import TopNavBarComponent from '../TopNavBarComponent/TopNavBarComponent'
import RightNavBarComponent from '../RightNavBarComponent/RightNavBarComponent'


function NavBarComponent() {
  return (
    <Router>
      <div className="nav-container" >
        <div className="sidebar">
          <div className="head">
            <div className="app-logo">
            <FaFolderOpen size={26}/>
            </div>
            <div className="logo-details">
              <p className="app-name">TruDrive</p>
            </div>
          </div>
          <nav>
            <Link to="/" className='home'><Home size={20}/>Home</Link>
            <Link to="/directory" className='my-drive'><Folder size={20} />My Drive</Link>
            <Link to="/recent-access" className='recent-access'><Clock size={20} />Recent Access</Link>
            <Link to="/favorite-files" className='favorites'><Heart size={20} />Favorites</Link>
            <Link to="/shared-with-me" className='shared-with-me'><Users size={20} />Shared with Me</Link>
            <Link to="/trash" className='trash'><Trash2 size={20} />Trash</Link>
          </nav>
          
        </div>
        <div className="main-section">
        <TopNavBarComponent className='top-navbar'/>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/signup" element={<SignUpComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/directory" element={<MyDriveComponent />} />
            <Route path="/recent-access" element={<RecentAccessComponent />} />
            <Route path="/favorite-files" element={<FavoriteFileComponent />} />
            <Route path="/shared-with-me" element={<SharedWithMeComponent />} />
            <Route path="/trash" element={<TrashComponent />} />
          </Routes>
        </div>
        </div>
        <RightNavBarComponent className='right-navbar'/>
      </div>
  </Router>

  )
}

export default NavBarComponent
