import ThemeButton from "./ThemeButton";

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <div className="navbar__content">
                <h1 className='navbar__page-name'>Kalkulator spalania</h1>
                <ThemeButton />
            </div>
        </nav>
     );
}
 
export default Navbar;