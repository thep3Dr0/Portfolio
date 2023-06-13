import { React } from 'react'
import { Aside } from '../Aside/Aside'

const Nav = () => {
  return (
    <header className='nav-content'>
            <h3 className='capitalize'>
                <a href="#">sobre mi</a>
            </h3>
            <h3 className='capitalize'>
                <a href="#">proyectos</a>
            </h3>
            <h3 className='uppercase'>
                <a href="#">cv</a>
            </h3>
            <h3 className='capitalize'>
                <a href="#">contacto</a>
            </h3>
          <Aside/>
    </header>
  )
}

export default Nav
