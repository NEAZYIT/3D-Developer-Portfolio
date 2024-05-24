**Project Overview**

This documentation outlines the steps taken to build a personal portfolio website using React, Vite, Tailwind CSS, and Three.js.

**Day 1: Project Setup and Tooling**

* **1. Project Initialization with Vite**
    - **What is Vite?**  Vite is a modern front-end build tool that provides a faster and more efficient development experience.
    - **Why Vite?**
        - Instant server start
        - Lightning-fast Hot Module Replacement (HMR)
        - Optimized builds using Rollup
        - Support for modern JavaScript (ES modules)
* **2. Install Tailwind CSS**
    - **What is Tailwind CSS?** A utility-first CSS framework that provides pre-defined CSS classes for rapid styling and design consistency.
    - **Why Tailwind CSS?**
        - Speed of development
        - Enforces style consistency
        - Scalable for large projects
    - **Installation:** Follow the instructions at [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)
* **3. Install Additional Packages**
    ```bash
    npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser react-router-dom framer-motion
    ```
    - **Package Explanations:**
        - **@react-three/fiber & @react-three/drei:** Integrate Three.js (3D graphics) into your React application.
        - **maath:** Math utility library helpful for 3D graphics and calculations.
        - **react-tilt:** Create interactive tilt effects for UI elements.
        - **react-vertical-timeline-component:** Build visually appealing vertical timelines.
        - **@emailjs/browser:**  Send emails directly from the client-side (browser).
        - **react-router-dom:** Enable navigation between different pages (routing) in your React application.
        - **framer-motion:**  Add smooth animations and transitions to React components. 
* **4. Project Structure and Assets**
    - **Components Folder:** Create a dedicated folder to store reusable React components. This improves organization, reusability, and maintainability.
    - **Assets:** Gather and organize images, icons, and other assets needed for the portfolio.
* **5. Configure Tailwind CSS and Styling**
    - Configure Tailwind CSS in your project (usually involves `tailwind.config.js` and `postcss.config.js`).
    - Update `index.css` and `App.jsx` to start using Tailwind's utility classes.
    - Create a `style.js` file for any custom styles not covered by Tailwind.
    - Create a `utils` folder for reusable utility functions (e.g., pre-built animations).

**Day 2:  Content and Routing**

* **1. Create Constants**
    - Create a `constants` folder with an `index.js` file.
    - Import and organize images, icons, and data for technologies, companies, and projects to be displayed on the portfolio.
* **2. Structure with React Router**
    - Modify `App.jsx` to set up the basic website structure using `BrowserRouter` from `react-router-dom`.
    - Commit changes to the `dev` branch and merge with the `master` branch.
* **3. Navbar Component**
    - Modify the Navbar component, adding the logo, navigation links, and potentially user profile elements. 
    - Ensure styles are applied correctly (addressing any Tailwind CSS integration issues).
* **4. Integrate Vite and Tailwind CSS**
    - If not already done, ensure proper integration between Vite and Tailwind CSS. This may involve installing `postcss` and `autoprefixer`, following the Tailwind CSS documentation. 
* **5. Git Ignore and Version Control**
    - Add `node_modules` to your `.gitignore` file.
    - Commit all changes, push to the `dev` branch, test thoroughly, and merge with the `master` branch. 

**Day 3: Dynamic Navbar and Responsiveness**

* **1. Dynamic Navbar Links**
    - Implement a JavaScript loop to dynamically generate navigation links in the Navbar component, improving maintainability.
    - Apply Tailwind CSS for styling the navigation. 
* **2. Responsive Navbar for Small Screens**
    - Create a separate loop or conditional rendering logic to display a mobile-friendly version of the Navbar on smaller screen sizes.
* **3. Title Styling and Consistency**
    - Ensure the website title is displayed correctly on all screen sizes.
    - Restyle the title for better visual appeal and brand consistency.

**Day 4:** 
   - [Continue documenting the remaining tasks here...] 