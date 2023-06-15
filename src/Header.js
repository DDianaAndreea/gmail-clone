import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from'@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, IconButton } from '@mui/material';

export default function 
() {
  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <img src='https://images.macrumors.com/t/QY0KdwbObUzURWrw5C2buSSZseY=/400x0/article-new/2020/10/newgmaillogo.0.jpg?lossy'/>
        </div>

        <div className='header_middle'>
          <SearchIcon />
          <input type='text' placeholder='Search mail' />
          <ArrowDropDownIcon />
        </div>
        <div className='header_right'>
          <IconButton>
            <AppsIcon/>
          </IconButton>
          <IconButton>
            <NotificationsIcon/>
          </IconButton>
          < Avatar />
        </div>
    </div>
  )
}
