

import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons
import { AuthContext } from "../../Provider/AuthProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const {user,signOutUser} = useContext(AuthContext)
  

  const handleSignOut = ()=>{
      signOutUser()
      .then(result =>{
        console.log(result)
      })
  }

  const links = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
     { id: 3, path: "/order", name: "Order" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-blue-600">
            MySite
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 font-medium ${
                    isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
             {
              user ? 
              <>
              <span>{user.email}</span>
              <a className="btn block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition" onClick={handleSignOut}>Sign Out</a>
              
              </>: 
              
              <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition"
            >
           Login
            </NavLink>

            }
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 focus:outline-none"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-gray-700 hover:text-blue-600 font-medium ${
                    isActive ? "text-blue-600" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {
              user ? 
              <>
              <span>{user.email}</span>
              <a className="btn bg-amber-400">Sign Out</a>
              
              </>: 
              
              <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition"
            >
           Login
            </NavLink>

            }
           
          </div>
        </div>
      )}
    </nav>
  );
}
