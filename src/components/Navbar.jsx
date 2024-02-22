import {Link} from 'react-router-dom'
import './componentsStyles/Navbar.css'
export const Navbar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
              
                    <Link to={'/'} ><img src="logo.png" alt="logo" className='logo'/></Link>
                </li>
                <li>
                    <Link to={'/Formu'} >Formulario</Link>
                </li>
                <li>
                    <Link to={'/PageArtist'} >Artists</Link>
                </li>
            </ul>
        </nav>
    )
}
