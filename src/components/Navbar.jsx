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
  const [active, setActive] = useState(''); // Defines a state variable 'active' to track the active navigation link, initialized as an empty string.
  const [toggle, setToggle] = useState(false); // Defines a state variable 'toggle' to track the toggle button state, initialized as false.


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
          <img src={logo} alt='logo' className="w-35 h-6 object-contain" /> {/* Displays the website logo with a width of 35px and height of 6px, contained within its bounds. */}
          <p className="text-white text-[14px] font-neo cursor-pointer flex"> {/* This paragraph represents the website name and logo in the header section. */}
            NAZIH &nbsp; <span className="sm:inline hidden"> | DEVNET</span> {/* It combines the website name "NAZIH" with the branding element "| DEVNET" separated by a space and The title is hidden on small screens and visible on normal and large screens.*/}
          </p> {/* Displays the website name with white text, 14px font size, neo font weight, and a cursor that changes to a pointer on hover. */}
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
                }  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:scale-110 hover:rotate-3 transition-transform duration-300 text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title); // Sets the active link to the title of the link when the link is clicked.
                window.scrollTo(0, 0); // Scrolls to the top of the page when the link is clicked.
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a> {/* Link to specific section on the page */}
            </li>
          ))}
        </ul>

        {/* 
            This div represents a responsive navigation menu for small screens.
            It aligns its contents to the end of the flex container horizontally and centers them vertically.
        */}
        <div className="sm:hidden flex flex-1 justify-end items-center">

          {/* 
            This image toggles between a menu icon and a close icon based on the value of 'toggle'.
            It's clickable and triggers the toggle function to show/hide the mobile menu.
          */}
          <img
            src={toggle ? close : menu} // Displays either the close icon or the menu icon based on 'toggle'
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer" // Sets dimensions, ensures image fits container, and changes cursor on hover
            onClick={() => setToggle(!toggle)} // Toggles the mobile menu when clicked
          />

          {/* 
            This div contains the mobile menu items and appears or disappears based on 'toggle'.
            It has a gradient background, rounded corners, and a shadow for visual appeal.
          */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-4 bg-gradient-to-r from-blue-900 to-pink-950 absolute right-0 top-20 mx-4 my-2 min-w-[200px] shadow-lg rounded-lg z-10 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-x`}>

            {/* 
              This ul represents the list of navigation links inside the mobile menu.
              It's flex-direction column to stack links vertically and has spacing between items.
            */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">

              {/* 
                Iterate over each 'link' in the 'navLinks' array to create list items dynamically.
              */}
              {navLinks.map((link) => (
                <li
                  key={link.id} // Unique key for efficient list rendering
                  className={`${active === link.title ? "text-white-500" : "text-secondary"} font-poppins font-medium cursor-pointer tet-[16px] transition duration-300 transform hover:scale-105 hover:rotate-2`} // Dynamically sets text color based on active state and applies styles for link animations
                  onClick={() => {
                    setToggle(!toggle); // Toggles the mobile menu when a link is clicked
                    setActive(link.title); // Sets the active link to the title of the link when clicked
                    window.scrollTo(0, 0); // Scrolls to the top of the page when a link is clicked
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a> {/* Link to specific section on the page */}
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
    </nav>
  )
}

export default Navbar // Exports the Navbar component as the default export, making it available for use in other parts of the application.