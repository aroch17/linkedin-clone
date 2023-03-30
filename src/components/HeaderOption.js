import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './styles/HeaderOption.css'

function HeaderOption({ isAvatar, avatarSrc, Icon, title, onClick }) { // object destructuring
  const user = useSelector(selectUser)
  return (
    <div className='headerOption' onClick={onClick}>
      {isAvatar && <Avatar className='headerOption__avatar'src={avatarSrc}>{user?.email[0].toUpperCase()}</Avatar>}
      {Icon && <Icon className='headerOption__icon' />}
      <h3 className='headerOption__title'>
        {title}
      </h3>
    </div>
  )
}

export default HeaderOption