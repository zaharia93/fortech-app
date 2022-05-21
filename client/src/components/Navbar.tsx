import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
export const Navbar = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return (
    <>
      <div className='navbar bg-base-300'>
        <div className='flex-1'>
          <button
            onClick={handleClick}
            className='btn btn-ghost normal-case text-xl'
          >
            Watchlist
          </button>
        </div>
        <div className='flex-none'>

       

          <ul className='menu menu-horizontal p-0'>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-base-100 text-red-700" : ""
                }
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-base-100 text-red-700" : ""
                }
                to='/movies'
              >
                Movie List
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-base-100 text-red-700" : ""
                }
                to='/about'
              >
                About
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  )
}

