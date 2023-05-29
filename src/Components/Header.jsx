import React from 'react'
import Logo from '../logo.png'
import {Link} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'

export default function Header() {
  return (
    <div className="header">
        <img src={Logo} alt="logo"></img>

        <nav>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recent">Recently Added</Link>
            <Link to="/mylist">My List</Link>
        </nav>

        <FiSearch />
    </div> 
  )
}
