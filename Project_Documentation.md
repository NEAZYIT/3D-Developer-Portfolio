## Personal Portfolio Website Documentation

This document provides a comprehensive overview of the development process for a personal portfolio website built with React, Vite, Tailwind CSS, and Three.js.

**Table of Contents**

|                     Day                     | Description                                                  |
| :-----------------------------------------: | :----------------------------------------------------------- |
|    [1](#day-1-project-setup-and-tooling)    | Project Setup and Tooling                                    |
| [2](#day-2-content-routing-and-integration) | Content, Routing, and Integration                            |
| [3](#day-3-dynamic-navbar--responsiveness)  | Dynamic Navbar & Responsiveness                              |
|       [4](#day-4-tailwind-css-fixes)        | Tailwind CSS Fixes and Hero Section Styling and Hero Section |
|      [5](#day-5-3d-model-integration)       | 3D Model Integration                                         |
|                     ...                     | ...                                                          |

---

### Day 1: Project Setup and Tooling <a id="day-1-project-setup-and-tooling"></a>

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

### Day 2: Content, Routing, and Integration <a id="day-2-content-routing-and-integration"></a>

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

### Day 3: Dynamic Navbar & Responsiveness <a id="day-3-dynamic-navbar--responsiveness"></a>

**1. Dynamic Navbar Links**

- Generate navigation links dynamically using a JavaScript loop for easier maintenance.
- Style the navigation links with Tailwind CSS.

**2. Responsive Navbar for Small Screens**

- Implement a mobile-friendly version of your Navbar for smaller screen sizes (using CSS media queries, separate components, or conditional rendering).

**3. Title Styling and Consistency**

- Ensure consistent title display across all devices and screen sizes.
- Refine the title's styling to match your portfolio's design.

---

### Day 4: Tailwind CSS Fixes and Hero Section Styling <a id="day-4-tailwind-css-fixes"></a>

**1. Navbar Color Issue**

- **Problem:** The navbar links were not displaying the expected color gradient because of the presence of `white-text` in the Tailwind CSS classes.
- **Solution:** I removed the `white-text` class, allowing the `hover:from-pink-500 hover:to-blue-500` gradient to apply correctly.

**2. Hero Section Structure and Styling** 

- **Component Breakdown:** I implemented the `Hero` component, which is the main visual element users see at the top of the portfolio website. The component is structured with:
    - A main `<section>` container for the entire hero area.
    - A `<div>` with Tailwind CSS classes for padding, positioning, width, and flexbox layout to control the arrangement of content.
    - A `<div>` for the decorative small circle and vertical gradient line.
    - A `<div>` containing the main heading (`<h1>`) and a paragraph (`<p>`) with the tagline.
    - The `ComputersCanvas` component (likely responsible for the 3D visuals).

- **Styling with Tailwind CSS:** I used Tailwind CSS classes extensively to:
    - Apply padding, margins, colors, and background colors.
    - Control the layout of elements using flexbox.
    - Set the maximum width of the container for responsiveness.
    - Add hover effects and smooth transitions to the "NEAZYIT" text in the heading. 

- **Importing Styles and Components:** The code imports the necessary styling from `../styles` and the `ComputersCanvas` component from `./canvas`.
---

### Day 5: 3D Model Integration <a id="day-5-3d-model-integration"></a>

**1.  3D Object Display Issues**

*  We ran into a problem where the 3D object wasn't showing up correctly. The website displayed a blank black screen instead. 
*  The issue was caused by two things:
    *  **Mixing HTML and 3D:** We tried to use regular HTML elements alongside the 3D object, which confused the website because they are rendered differently.  It's like trying to combine oil and water - they don't mix!
    *  **Incorrect File Location:**  The website couldn't find the 3D object file where it was supposed to be. It's like looking for a book on your shelf but realizing it's on a completely different shelf.

**2. Solutions** 

*   **Removing Conflicting Elements:** We removed the regular HTML elements that were causing problems. This way, the website understands we're only working with 3D elements in this area.
*   **Fixing File Location:**  We double-checked and fixed the location of the 3D object file. We made sure it was in the right place so the website could easily find it.

**3. Enhancements for User Experience**

*   **Adding a Loading Indicator:**  While the 3D object was loading, we added a little spinning icon so users know that something interesting is loading. It's like a progress bar for the 3D object.
*   **Setting up the 3D Environment:**  We made sure the virtual space for the 3D object was set up correctly. This includes things like proper lighting and shadows, which help the 3D object look its best.

**4. Result:**

After fixing the issues and making these improvements, the 3D object now displays correctly! The black screen is gone, and users have a much better experience.
---


###  2. Understanding 3D Models and Code

**Need Help Understanding the 3D Code?**

If you're new to 3D graphics and need help understanding some of the code, here's a helpful resource:

- **React Three Fiber Documentation:** The official documentation for React Three Fiber is a great place to start! You can find explanations and examples for different components and concepts: [https://docs.pmnd.rs/react-three-fiber/getting-started/introduction](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) 
    - **Example:**  If you see a line like `<hemisphereLight intensity={3.15} groundColor="black" />` and want to know what it does, you can search the documentation for "hemisphereLight" to learn more.

**Where to Find 3D Models**

To use 3D models in your projects, you need to find them first!  Here are some options:

* **Traditional 3D Model Websites:** Websites like Sketchfab, TurboSquid, CGTrader, and Free3D offer a huge variety of 3D models for download.
* **Sketchfab (Recommended):**  Sketchfab is a popular choice, and it might be a great place to start your search: [https://sketchfab.com/](https://sketchfab.com/)
* **Create Your Own:** If you're feeling adventurous, you can create your own 3D models using software like Blender (free and open-source) or SketchUp.

--- 

## 2.  Problem: 3D Model Disappears on Refresh

**Issue:**  After refreshing the browser, the 3D model loaded on the page would break and disappear, resulting in a black screen. 

**Solution:**  A "Loader" component was implemented to handle the loading process of the 3D model. This acts as a visual cue during model loading, preventing the model from breaking upon page refresh.

**Explanation:** 

* **The Problem:**  When a webpage is refreshed, the browser needs to rebuild everything from scratch, including the 3D model. Without proper handling, this can cause the model to be incomplete or disappear.
* **The Fix:**  The Loader component provides a visual indicator while the 3D model is being built. This prevents users from seeing a broken or incomplete model and provides a seamless experience. 