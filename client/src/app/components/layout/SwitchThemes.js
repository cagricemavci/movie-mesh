import React, {useContext} from 'react';
import { ThemeContext } from '../../contexts/theme/theme.context.js';

const SwitchThemes = () => {
    
    const {theme, setTheme} = useContext(ThemeContext)

    const themeFilter = (e) => {
        e.preventDefault();

        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            {theme === 'light'?  <button onClick={themeFilter}>Themes dark</button> :  <button onClick={themeFilter}>Themes light</button>}
           
        </div>
    )
}

export default SwitchThemes
