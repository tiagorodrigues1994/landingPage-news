import logo from '../assets/images/logo.svg'
import NavBar from './NavBar'
export default function Header() {
    return (
        <header className="bg-red-500 flex items-center place-content-between mb-8">
            <img src={logo} alt="logo" />
            <NavBar />
            
            
        </header>

    )
}