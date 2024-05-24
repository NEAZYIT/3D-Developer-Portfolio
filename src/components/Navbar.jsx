import React, { useEffect, useState } from 'react'; // Imports React hooks for managing state and side effects.
import { Link } from 'react-router-dom'; // Imports the Link component from react-router-dom for creating links within the application.

import { styles } from '../styles'; // Imports styling definitions from a styles file in the parent directory.
import { navLinks } from '../constants'; // Imports navigation link data from a constants file in the parent directory.
import { logo, menu, close } from '../assets'; // Imports image assets for the logo, menu icon, and close icon.

/**
 * The Navbar component renders the navigation bar of the website. 
 * It includes the website's logo, navigation links, and a toggle button for mobile navigation.
 * 
 * @returns {JSX.Element} The JSX code for the Navbar component. 
 */
const Navbar = () => {
  const [active, setActive] = useState('') // Defines a state variable 'active' to track the active navigation link, initialized as an empty string.

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      {/* The main navigation bar element, styled using the 'paddingX' class, full width, flex layout with centered items, 5px padding on the top and bottom, fixed position at the top, z-index of 20, and a background color defined by the 'primary' class. */}

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* A container for the logo and navigation links, with full width, flex layout, centered items, maximum width of 7xl, and automatic margins. */}

        <Link
          to="/" // Link to the home page.
          className='flex item-center gap-2' // Styles the link as a flex container with centered items and a 2px gap.
          onClick={() => {
            setActive(""); // Sets the active link to an empty string when the logo is clicked.
            window.scrollTo(0, 0); // Scrolls to the top of the page when the logo is clicked.
          }}
        >
          <img src={logo} alt='logo' className="w-35 h-10 object-contain" /> {/* Displays the website logo with a width and height of 9px, contained within its bounds. */}
          <p className="text-white text-[18px] font-bold cursor-pointer">
            NAZIH <span className="sm-block hidden">| DEVNET</span>
          </p> {/* Displays the website name with white text, 18px font size, bold font weight, and a cursor that changes to a pointer on hover. */}
        </Link>

        {/* 
            This code generates a navigation menu with links based on the contents of the 'navLinks' array.
            Each link has different styles depending on whether it's active or not, and it includes hover effects for interactivity.
        */}

        {/*
            This line creates an unordered list (UL element) to hold navigation links.
            It applies the following CSS classes:
            - 'list-none': Removes default list styling (bullet points).
            - 'hidden': Hides the list by default.
            - 'sm:flex': Displays the list as a flex container when the screen size meets the 'sm' breakpoint.
            - 'flex-row': Sets the direction of flex items to be horizontal.
            - 'gap-10': Sets the gap between flex items to be 10 units.
        */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* 
            Iterate over each 'link' in the 'navLinks' array to create list items dynamically.
          */}
          {navLinks.map((link) => (
            <li
              key={link.id} // Unique key for efficient list rendering
              className={`${active === link.title ? "text-white" : "text-secondary" // Set text color based on whether the link is active
                } hover:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:scale-110 hover:rotate-3 transition-transform duration-300 text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a> {/* Link to specific section on the page */}
            </li>
          ))}
        </ul>


      </div>
    </nav>
  )
}

export default Navbar // Exports the Navbar component as the default export, making it available for use in other parts of the application.