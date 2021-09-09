import { useState, useEffect } from "react";

const ThemeButton = () => {
    const [isThemeDark, setIsThemeDark] = useState(() => {
        const localStorageData = JSON.parse(localStorage.getItem('isThemeDark'));

        if (localStorageData !== null) {
            return localStorageData;
        } else {
            return false;
        }
    });

    useEffect(() => {        
        if (isThemeDark) {
            document.querySelectorAll('#root *').forEach(element => element.classList.add('dark-theme'));
        }
        else {
            document.querySelectorAll('#root *').forEach(element => element.classList.remove('dark-theme'));
        }
    }, [isThemeDark])

    return ( 
        <i className={`fas fa-${isThemeDark ? 'sun' : 'moon' } navbar__theme-icon `} onClick={() => {
            setIsThemeDark(!isThemeDark)
            localStorage.setItem('isThemeDark', !isThemeDark);
            }    
        }>
        </i>
     );
}
 
export default ThemeButton;