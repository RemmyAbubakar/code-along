import React from "react";
import NavItem from "./NavItem";

const links = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "ProductList",
        to: "/products"
    },
    {
        label: "TaskManager",
        to: "/task-manager"
    },
    {
        label: "About",
        to: "/about"
    },
    {
        label: "Contact",
        to: "/contact"
    }
]

function Navbar(){
    return(
       <nav className="flex justify-between py-5 px-20 shadow-md">
          <h3 className="font-bold">gob3Joint</h3>
          <ul className="flex gap-5">
          {
            links.map((link, index) => (
                 <NavItem key={index} label = {link.label} to={link.to} />
        )) }
          </ul>
       </nav>
    );
}

export default Navbar;

// import React from 'react'
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <div className=' shadow-md py-5'>
//         <nav className='flex justify-between max-w-7xl mx-auto'>
//             <h3 className="font-bold">PreMest</h3>
//             <ul className='flex gap-5'>
//                <li>
//                   <NavLink to="/">Home</NavLink>
//                </li>
//                <li>
//                    <NavLink to="/product-list">ProductList</NavLink>
//                 </li>
//                 <li>
//                 <NavLink to="/task-manager">TaskManager</NavLink>
//                 </li>
//                 <li>
//                    <NavLink to="/about">About</NavLink>
//                 </li>
//                 <li>
//                    <NavLink to="/contact">Contact</NavLink>
//                 </li>
//             </ul>
//         </nav>
//     </div>
//   )
// }

// export default Navbar;