import React, { useContext } from 'react'
import {Context} from "../../index"

function NavBar() {
    const {user} = useContext(Context)
  return (
   <div className='site-pusher'>
       <header className='header'>
           <div className='full-header'>
               <a className=''></a>
               <nav>
                   <div>
                   <img className='header-logo'></img>
                   <button className='close-menu'></button>
                   </div>
                   <a>Jobs</a>
                   <a>Menu</a>
                   <a>Career</a>
                   <a>Something</a>
                   <div className='menu-links-right'>
                       <a>Post a Job</a>
                       <a>Sign In</a>
                       <a>Sign Up</a>
                   </div>
               </nav>
           </div>
       </header>
   </div>
)
}

export default NavBar