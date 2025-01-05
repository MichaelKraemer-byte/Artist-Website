import './header.scss'
import { Link } from 'react-router-dom';

const Header = () =>

 <header className='header-container'>
            
    <a href='#gallery'>Recent posts</a>
    <Link to="/instagram">
        <button>Zu meinen Instagram-Inhalten</button>
    </Link>
    <a href='#aboutMe'>About me</a>
    <a href='#appointment'>Appointment</a>
    <a href='#instagram'>Instagram-widgets</a>

</header>;


export default Header;