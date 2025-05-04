import React from 'react'
import { useNavigate } from 'react-router'

const HeaderLogs = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return (
    <header className='d-flex justify-content-center align-items-center w-100 bg-dark'>
        <img src="src/img/ratzoe_edit.png" className='img-fluid imgRde' onClick={handleClick} role='button' alt="" />
    </header>
  )
}

export default HeaderLogs