import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import './Toolbar.css'
const Toolbar = () => {

    const theme =  useContext(ThemeContext);
  return (
    <div className={`toolbar ${theme}`}>
        Current Theme:{theme}
    </div>
  )
}

export default Toolbar
