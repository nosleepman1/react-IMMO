import {useContext, createContext, useState } from 'react'



const ThemeContext = () => {

    const setThemeContext = createContext()

    const [theme, setTheme] = useState('dark')

    const handleTheme = document.querySelector('.btn')

    handleTheme.addEventListener('click', () => {
        
    })
}


export default ThemeContext