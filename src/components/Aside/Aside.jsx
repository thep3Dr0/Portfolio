import React, { useId, useContext, useState, useRef } from 'react'
import { themeContext } from '../../contexts/Theme'
import themesSvg from '../../assets/paint-roller.svg'

export function Aside () {
  const themeButtonId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const Context = useContext(themeContext)
  const asideRef = useRef()

  const handleChange = () => {
    setIsOpen(!isOpen)
    asideRef.current.classList.toggle('open')
  }

  return (
        <div className='aside-toggle'>
            <label className='theme-checkbox' htmlFor={themeButtonId} style={{ cursor: 'pointer' }}>
                <img className='theme-icon' src={themesSvg} alt="" />
            </label>
            <input
            type="checkbox"
            id={themeButtonId}
            hidden
            checked={isOpen}
            onChange={handleChange}
            />
            <aside className={'themes open'} ref={asideRef}>
            <ul style={{ listStyleType: 'none' }}>
                {Context.themes.map((theme) => {
                  return (
                 <li key={theme}
                 style={{ cursor: 'pointer' }}
                 onClick={() => {
                   Context.changeTheme(theme)
                 }}>
                    <strong >{theme}</strong>
                 </li>
                  )
                })}
            </ul>
            </aside>
        </div>
  )
}
