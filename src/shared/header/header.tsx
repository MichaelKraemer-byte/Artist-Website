import { Button } from '@mui/material';
import './header.scss'
import { Link } from 'react-router-dom';

const Header = () =>

 <header className='header-container'>
            
    <div className='leftWing'>
        <Link to="/">
            <img className="logo" src='/img/logo/mkc-gallery-logo.svg'></img>
        </Link>

        <Link to="/instagram">
            <a href='#instagram'>Recent posts</a>
        </Link>
        <a href='#aboutMe'>About me</a>
    </div>

    <div className='rightWing'>
        <Link to="/register">
            <Button variant="outlined">
                <a href='#register'>Register</a>
            </Button>
        </Link>
        <Link to="/sign-in">
            <Button variant="contained">
                <a href='#sign-in'>Sign in</a>
            </Button>
        </Link>
    </div>


</header>;


export default Header;