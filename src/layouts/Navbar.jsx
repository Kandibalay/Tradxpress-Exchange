import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Logo from '../assets/icons/TradExpress.svg'
import { NavLink } from 'react-router-dom'
import Button from '../components/reuseables/Button'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
     const [activeLink, setActiveLink] = useState('')
     const [showMenu, setShowMenu] = useState(false)
     const navRef = useRef()

     const handleActiveLink = (link) =>{
         setActiveLink(link)
     }

     const closeMenuBar = () =>{
         setShowMenu(false)
     }

     const openMenuBar = () =>{
        if(window.innerWidth < 1024);
        setShowMenu(!showMenu)
     }

     const handleClickOutside = (event) => {
        if(navRef.current && !navRef.current.contains(event.target)){
            closeMenuBar()
        }
    }

    useEffect(()=> {
        if(showMenu){
            document.addEventListener("mousedown", handleClickOutside)
        } else{
            document.removeEventListener("mousedown", handleClickOutside)
        }
        return()=>{
            document.removeEventListener("mousedown", handleClickOutside)
        }
    },[showMenu])

  return (
    <nav className='bg-[#7C20BE] flex justify-between px-5 md:px-14 py-3'>
       <NavLink to='/'>
            <div>
                <img src={Logo} alt="" />
            </div>
       </NavLink>
       <div className="lg:hidden text-2xl flex items-center cursor-pointer" 
            onClick={openMenuBar}>
                {showMenu ? <IoCloseOutline className='text-white'/> : <RxHamburgerMenu className='text-white'/>}
            </div>
        
        <div className={`lg:static absolute bg-[#7C20BE] top-16  ${
                    showMenu ? 'block opacity-100 w-[300px] right-0 flex flex-col gap-2 p-8 rounded-l-sm ' : 'hidden opacity-0 top-[100%]'
                    } lg:opacity-100 lg:flex lg:items-center lg:w-auto font-bold text-white z-50 gap-5`} ref={navRef}>
               <NavLink to='instant' onClick={()=> {closeMenuBar() }}><p>Instant Buy/Sell</p></NavLink>
               <NavLink to='learn' onClick={()=> {closeMenuBar() }}><p>Learn</p></NavLink>
               <NavLink to='login' onClick={()=> {closeMenuBar() }}><Button type="button" content='Login' bg='bg-transparent' py='py-2' px='px-8' /></NavLink>
               <NavLink to='signup' onClick={()=> {closeMenuBar() }}><Button type="button" content='Get Started' bg='bg-white' py='py-2' px='px-5' textColor='text-[#7C20BE]' border='border-white'/></NavLink>                   
        </div>
    </nav>
  )
}

export default Navbar
