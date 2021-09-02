import { useState, useEffect } from "react";

const Navbar = () => {
    const [isThemeDark, setIsThemeDark] = useState(false);

    useEffect(() => {
        if (isThemeDark) {
            document.querySelectorAll('#root *').forEach(element => element.classList.add('dark-theme'));
        }
        else {
            document.querySelectorAll('#root *').forEach(element => element.classList.remove('dark-theme'));
        }
    }, [isThemeDark])

    return ( 
        <nav className='navbar'>
            <div className="navbar__content">
                <h1 className='navbar__page-name'>Kalkulator spalania {/*<i className="fas fa-car fa-lg"></i>*/}</h1>
                <i className={`fas fa-${isThemeDark ? 'sun' : 'moon' } navbar__theme-icon `} onClick={() => setIsThemeDark(!isThemeDark)}></i>
            </div>
        </nav>
     );
}
 
export default Navbar;