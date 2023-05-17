import React from 'react'
import './styles/Header.css'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import SuperVisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const user = useSelector(selectUser)

    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        signOut(auth)
    }
    return (
        <div className="mainHeader">
            <Navbar className='header' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">{user ? <LockOpenIcon fontSize='large' />:<LockIcon fontSize='large' />}</Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href=""><HeaderOption Icon={HomeIcon} title='Home' /></Nav.Link>
                            <Nav.Link href=""><HeaderOption Icon={SuperVisorAccountIcon} title='My Network' /></Nav.Link>
                            <Nav.Link href=""><HeaderOption Icon={BusinessCenterIcon} title='Jobs' /></Nav.Link>
                            <Nav.Link href=""><HeaderOption Icon={ChatIcon} title='Messaging' /></Nav.Link>
                            <Nav.Link href=""><HeaderOption Icon={NotificationsIcon} title='Notifications' /></Nav.Link>
                            <Nav.Link>
                                <div className="accountIcon">
                                    <HeaderOption isAvatar={true} avatarSrc={user?.profilePic} title={user ? 'Logout' : 'My Account'} onClick={logoutOfApp} />
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header