import { BrowserRouter } from "react-router-dom"; // Imports the BrowserRouter component from the react-router-dom library, which is used for routing within the application.

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from './components'; // Imports various components from the './components' directory, which presumably contains the components used to build the website.

/**
 * The main component of the application, responsible for rendering the overall structure and content of the website.
 * 
 * @returns {JSX.Element} The JSX code for the application.
 */
const App = () => {
  return (
    <BrowserRouter>  {/* Wraps the entire app with the BrowserRouter component, enabling navigation between different routes. */}
      <div className="relative z-0 bg-primary"> {/* The main container of the website, with a relative positioning, z-index of 0, and a background color defined by the 'primary' class. */}

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> {/* This div contains the hero section of the website, with a background image defined by the 'hero-pattern' class, covering the entire area, not repeating, and centered. */}
          <Navbar /> {/* Renders the Navbar component, which likely contains the navigation links for the website. */}
          <Hero /> {/* Renders the Hero component, which likely contains the main introductory content of the website. */}
        </div>

        <About /> {/* Renders the About component, which likely contains information about the website owner or the website itself. */}
        <Experience /> {/* Renders the Experience component, which likely contains information about the developer's work experience. */}
        <Tech /> {/* Renders the Tech component, which likely contains information about the technologies used by the developer. */}
        <Works /> {/* Renders the Works component, which likely contains information about the developer's projects. */}
        <Feedbacks /> {/* Renders the Feedbacks component, which likely contains testimonials from clients or colleagues. */}

        <div className="relative z-0"> {/* This div contains the Contact section and a StarsCanvas component, with relative positioning and a z-index of 0. */}
          <Contact /> {/* Renders the Contact component, which likely contains contact information and a form for users to get in touch. */}
          <StarsCanvas /> {/* Renders the StarsCanvas component, which likely adds a visual effect to the website, possibly a starry background. */}
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App; // Exports the App component as the default export, making it available for use in other parts of the application.