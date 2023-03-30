import React from 'react'
import './styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import SuperVisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function Header() {
    const user = useSelector(selectUser)

    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        signOut(auth)
    }
    return (
        <div className='header'>
            <div className='header__left'>
                <div className='linkedin__icon'>
                    <LinkedInIcon fontSize='large' />
                </div>

                <div className='header__search'>
                    {/* Icon */}
                    <SearchIcon />
                    <input type='text' placeholder='Search' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SuperVisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <div className="accountIcon">
                    <HeaderOption isAvatar={true} avatarSrc={user?.profilePic} title={user ? 'Logout' : 'My Account'} onClick={logoutOfApp} />
                </div>
            </div>
        </div>
    )
}

export default Header