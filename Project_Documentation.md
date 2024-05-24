## Personal Portfolio Website Documentation

This document provides a comprehensive overview of the development process for a personal portfolio website built with React, Vite, Tailwind CSS, and Three.js.

**Table of Contents**

|  Day  | Description                       |
| :---: | :-------------------------------- |
|   1   | Project Setup and Tooling         |
|   2   | Content, Routing, and Integration |
|   3   | Dynamic Navbar & Responsiveness   |
|   4   | [Add Day 4 Content Here]          |
|  ...  | ...                               |

---

### Day 1: Project Setup and Tooling

**1. Project Initialization with Vite**

- **What is Vite?** Vite is a modern front-end build tool designed for a faster and more efficient development experience.
- **Why Vite?**
    - **Instant Server Start:**  Vite launches the development server incredibly quickly.
    - **Lightning-fast HMR (Hot Module Replacement):** Updates to code are reflected in the browser almost instantly.
    - **Optimized Builds:** Uses Rollup for optimized production builds.
    - **Modern JavaScript:** Leverages modern browser features and ES modules.

**2. Install Tailwind CSS**

- **What is Tailwind CSS?** Tailwind is a "utility-first" CSS framework, providing a vast set of pre-defined CSS classes to style your application rapidly and maintain consistency. 
- **Why Tailwind CSS?**
    - **Rapid Development:**  Style elements quickly without writing custom CSS.
    - **Consistency:** Enforces a unified design language across your project.
    - **Scalable:** Works well for projects of all sizes. 
- **Installation:**  [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

**3. Install Additional Packages**

```bash
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser react-router-dom framer-motion
```

- **Package Explanations:**
    - **@react-three/fiber & @react-three/drei:** Integrate the powerful Three.js 3D graphics library into your React project. 
    - **maath:** A handy math utility library optimized for 3D graphics and calculations.
    - **react-tilt:** Easily add interactive tilt effects to UI components.
    - **react-vertical-timeline-component:**  Create visually engaging vertical timelines for displaying events or milestones.
    - **@emailjs/browser:** Send emails from the client-side (browser) without needing a backend server.
    - **react-router-dom:** Implement client-side routing for a seamless single-page application (SPA) experience.
    - **framer-motion:** A popular animation library for React, adding smooth transitions and effects.

**4. Project Structure and Assets**

- **Components Folder:** Create a dedicated folder to house your reusable React components.
- **Assets:** Collect and organize essential project assets: images, icons, fonts, etc.

**5. Configure Tailwind CSS and Styling**

- Configure Tailwind CSS (often involves `tailwind.config.js` and `postcss.config.js`).
- Update `index.css` and `App.jsx` to utilize Tailwind CSS classes. 
- Consider a `style.js` file for custom styles not covered by Tailwind.
- Create a `utils` folder for reusable utility functions, such as pre-built animations.

---

### Day 2: Content and Routing

**1. Create Constants**

- Establish a `constants` folder with an `index.js` file to store project-wide constants.
- Import and organize data:
    - Images and icons for technologies, companies, and projects.
    - Text content for portfolio sections.

**2. Structure with React Router**

- Use `BrowserRouter` from `react-router-dom` in `App.jsx` to define your website's routing structure.

**3. Navbar Component**

- Build the Navbar component:
    - Include the website logo. 
    - Add navigation links.
    - Consider user profile elements if needed.
- Ensure Tailwind CSS styles are applied correctly.

**4. Integrate Vite and Tailwind CSS (if not done previously)**

- Double-check the seamless integration between Vite and Tailwind.
- If needed, install `postcss` and `autoprefixer` following the Tailwind documentation.

**5. Git Ignore and Version Control**

- Add `node_modules` to your `.gitignore` file.
- Commit changes, push to your `dev` branch, test thoroughly, and then merge into your `master` branch.

---

### Day 3: Dynamic Navbar and Responsiveness

**1. Dynamic Navbar Links**

- Generate navigation links dynamically using a JavaScript loop for easier maintenance.
- Style the navigation links with Tailwind CSS.

**2. Responsive Navbar for Small Screens**

- Implement a mobile-friendly version of your Navbar for smaller screen sizes (using CSS media queries, separate components, or conditional rendering).

**3. Title Styling and Consistency**

- Ensure consistent title display across all devices and screen sizes.
- Refine the title's styling to match your portfolio's design.

---

### Day 4:  [Add Day 4 Content Here]

-  [Continue documenting the remaining tasks in this structured format] 