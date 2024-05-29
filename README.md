# 3D Developer Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
  <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
</div>

## 🚀 Introduction

Welcome to my immersive 3D web portfolio! This interactive experience showcases my skills and projects, meticulously crafted using the latest web development technologies. 

## 💻 Tech Stack

- **Frontend:**
    - React.js: Dynamic and responsive user interface.
    - Three.js: 3D graphics rendering for stunning visuals.
    - React Three Fiber: Seamless integration of Three.js with React.
    - React Three Drei: Collection of useful helpers for React Three Fiber.
    - Tailwind CSS: Utility-first CSS framework for rapid UI development. 
- **Other:**
    - Email JS:  Handling contact form submissions.
    - Vite:  Fast development server and build tool.

## ✨ Features

- **🌐 Customizable 3D Hero Section** Features a 3D desktop model that can be easily tailored to meet specific requirements.
- **💫 Interactive Experience and Work Sections:** Employs animations driven by Framer Motion to create an engaging user experience.
- **📊 3D Skills Section:** Highlights skills using 3D geometries with Three.js and React Three Fiber.
- **🎬 Animated Projects and Testimonials:** Showcases projects and client testimonials with dynamic animations using Framer Motion.
- **🌍 Contact Section with 3D Earth Model:** Integrates a 3D Earth model combined with email functionality powered by EmailJS.
- **✨ 3D Stars Background:** Generates progressively appearing stars at random positions using Three.js to enhance the background display.
- **🔄 Consistent Animations:** Ensures cohesive animations throughout the site with Framer Motion.
- **📱 Responsive Design:** Guarantees optimal display and functionality across all devices.
- **🔧 And Much More:** Including efficient code architecture and reusability.

## 🛠️ Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/NEAZYIT/3D-Developer-Portfolio
cd project_3D_developer_portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the [EmailJS website](https://www.emailjs.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## 💡 Snippets

<details>
<summary><code>constants.js</code></summary>
  
```javascript
import {
  web,
  javascript,
  typescript,
  html,
  css,
  network,
  sysadmin,
  devops,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  router,
  sw,
  linux,
  win,
  c,
  meta,
  starbucks,
  tesla,
  shopify,
  alx,
  ista,
  yazaki,
  carrent,
  jobit,
  tripguide,
  threejs,
  wetterio,
  shell,
  prog,
} from "../assets";

// This section defines the navigation links for the website.
// Each link has an ID and a title.
// For example, the first link has an ID of "about" and a title of "About".
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// This section defines the services offered by the website.
// Each service has a title and an icon.
// For example, the first service has a title of "Web Developer" and an icon of "web".
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Network Administrator",
    icon: network,
  },
  {
    title: "System Administrator",
    icon: sysadmin,
  },
  {
    title: "DevOps Engineer",
    icon: devops,
  },
];

// This section defines the technologies used by the website.
// Each technology has a name and an icon.
// For example, the first technology has a name of "HTML 5" and an icon of "html".
const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Windows",
    icon: win,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Router",
    icon: router,
  },
  {
    name: "Switch",
    icon: sw,
  },
];

// This section defines the work experience of the website owner.
// Each experience has a title, company name, icon, background color, date, and a list of points.
// For example, the first experience is as a "React.js Developer" at "Starbucks", and it includes details about the responsibilities of the role.
const experiences = [
  {
    title: "React.js Developer",
    company_name: "ALX",
    icon: alx,
    iconBg: "#FFFFFF",
    date: "May 2024 - Present",
    points: [
      "Designed and developed a cutting-edge web 3D portfolio using Vite, React, and Three.js to showcase my work in an immersive and interactive environment.",
      "Implemented advanced 3D graphics and animations to create a visually stunning experience for visitors, enhancing user engagement and retention.",
      "Collaborated with UI/UX designers and 3D artists to integrate custom-designed assets and optimize performance for seamless navigation and exploration.",
      "Ensured cross-browser compatibility and responsive design, allowing the portfolio to be accessible and functional across various devices and screen sizes.",
    ],
  },
  {
    title: "Network & System Administrator(Internship)",
    company_name: "Yazaki",
    icon: yazaki,
    iconBg: "#FFFFFF",
    date: "February 2024 - May 2024",
    points: [
      "Configured VLANs and routers tables to optimize network performance and security.",
      "Managed all employees using Active Directory, ensuring smooth access control and authentication.",
      "Administered DHCP database for distributing IP addresses, including specialized configurations for Raspberry Pi devices.",
      "Performed hardware maintenance tasks to ensure optimal performance of network infrastructure.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ALX",
    icon: alx,
    iconBg: "#FFFFFF",
    date: "August 2023 - December 2023",
    points: [
      "Designed and implemented frontend components using HTML, CSS, and JavaScript to create a visually appealing and interactive user interface.",
      "Contributed to the backend development by assisting in database management, API integration, and server-side scripting using Django.",
      "Collaborated closely with backend developers to ensure seamless integration of frontend and backend functionalities.",
      "Participated in project meetings, provided insights on backend architecture decisions, and contributed to overall project planning.",
    ],
  },
  {
    title: "Developer",
    company_name: "ALX",
    icon: alx,
    iconBg: "#FFFFFF",
    date: "March 2023",
    points: [
      "Designed and implemented a simple shell application using C language, focusing on functionality and efficiency.",
      "Collaborated with project team members to define requirements, plan development tasks, and troubleshoot issues.",
      "Utilized C language features and libraries to develop robust and reliable command-line interfaces for users.",
      "Contributed to project documentation and provided support for testing and deployment processes.",
    ],
  },
  {
    title: "Network Administrator",
    company_name: "OFPPT",
    icon: ista,
    iconBg: "#FFFFFF",
    date: "July 2023",
    points: [
      "Configured VPN with IPsec to establish secure connections for remote access and data transmission.",
      "Learned from experienced engineers to understand VPN requirements, implementation techniques, and troubleshooting strategies.",
      "Ensured compliance with security policies and best practices to safeguard network infrastructure and data.",
      "Provided support for network troubleshooting, performance optimization, and infrastructure expansion.",
    ],
  },
];

// This section defines the testimonials for the website.
// Each testimonial has a quote, name, designation, company, and an image.
// For example, the first testimonial is from Sara Lee, the CFO of Acme Co.
const testimonials = [
  {
    testimonial:
      "Nazih's expertise and attention to detail significantly enhanced our online platform, exceeding our highest expectations.",
    name: "Emily Johnson",
    designation: "Head of Digital Marketing",
    company: "XYZ Corporation",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never seen such dedication and professionalism in a web developer like Nazih. Their commitment to our success is unmatched.",
    name: "David Garcia",
    designation: "COO",
    company: "GHI Corporation",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Nach Nazih hat unsere Website optimiert, und das Ergebnis hat unsere Erwartungen weit übertroffen. Wir sind begeistert von ihrer Professionalität und Leidenschaft!",
    name: "Lisa Müller",
    designation: "Geschäftsführer",
    company: "123 GmbH",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// This section defines the projects built by the website owner.
// Each project has a name, description, list of tags, an image, and a link to the source code.
// For example, the first project is called "Car Rent" and it is a web-based platform for booking car rentals.
const projects = [
  {
    name: "Simple Shell",
    description:
      "Simple Unix shell developed using C language for executing command-line operations efficiently.",
    tags: [
      {
        name: "C language",
        color: "pink-text-gradient",
      },
    ],
    image: shell,
    source_code_link: "https://github.com/nadaAit11/simple_shell",
  },
  {
    name: "Wetterio",
    description:
      "Wetter.io is the ultimate weather website designed for weather enthusiasts. Harnessing the power of HTML, CSS, and JavaScript, Wetter.io offers precise weather forecasting with a user-friendly interface. Our state-of-the-art application seamlessly blends functionality, innovation, and intuitive design to elevate your meteorological experience.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: wetterio,
    source_code_link: "https://github.com/NEAZYIT/Wetterio",
  },
  {
    name: "Tech Alchemist: Crafting Solutions in C, Python, JS, & DevOps",
    description:
      "Proficient in problem-solving across a spectrum of technologies, including C, Python, and JavaScript, alongside adept usage of various DevOps tools. With a passion for tackling challenges, I leverage these diverse skill sets to engineer effective solutions and streamline processes.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: prog,
    source_code_link: "https://github.com/NEAZYIT",
  },
];

export { services, technologies, experiences, testimonials, projects };
```
</details>

<details>
<summary><code>index.css</code></summary>

```css
/**
 * Import the Google Fonts stylesheet for the "Poppins" font family with various font weights.
 * The imported stylesheet is located at "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap".
 */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");


/**
 * This code includes the necessary imports for using Tailwind CSS.
 * 
 * @tailwind base - This import includes the base styles provided by Tailwind CSS.
 * @tailwind components - This import includes the pre-styled components provided by Tailwind CSS.
 * @tailwind utilities - This import includes the utility classes provided by Tailwind CSS.
 */
@tailwind base;
@tailwind components;
@tailwind utilities;


/* Universal styles applied to all elements */
* {
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
  box-sizing: border-box; /* Include padding and border in element's total width and height */
  font-family: "Poppins", sans-serif; /* Set default font to "Poppins", fallback to sans-serif */
  scroll-behavior: smooth; /* Enable smooth scrolling */
  color-scheme: dark; /* Optimize for dark mode */
}

/* Custom class for spacing adjustment */
.hash-span {
  margin-top: -100px; /* Adjust top margin for spacing */
  padding-bottom: 100px; /* Add padding at the bottom */
  display: block; /* Display element as a block */
}

/* Black gradient background class */
.black-gradient {
  background: #000000; /* Fallback solid black background */
  background: -webkit-linear-gradient(to right, #434343, #000000); /* Gradient for older browsers */
  background: linear-gradient(to right, #434343, #000000); /* Gradient for modern browsers */
}


/* Violet gradient background class */
.violet-gradient {
  background: #804dee; /* Fallback solid violet background */
  background: linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%); /* Gradient from violet to transparent */
  background: -webkit-linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%); /* Gradient for older browsers */
}

/* Green to pink gradient background class */
.green-pink-gradient {
  background: "#00cea8"; /* Fallback solid green background */
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%); /* Gradient from green to pink */
  background: -webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%); /* Gradient for older browsers */
}

/* Orange text gradient class */
.orange-text-gradient {
  background: #f12711; /* Fallback solid orange background */
  background: -webkit-linear-gradient(to top, #f12711, #f5af19); /* Gradient for older browsers */
  background: linear-gradient(to top, #f12711, #f5af19); /* Gradient for modern browsers */
  -webkit-background-clip: text; /* Clip background to text */
  -webkit-text-fill-color: transparent; /* Make text transparent to show gradient */
}

/* Green text gradient class */
.green-text-gradient {
  background: #11998e; /* Fallback solid green background */
  background: -webkit-linear-gradient(to top, #11998e, #38ef7d); /* Gradient for older browsers */
  background: linear-gradient(to top, #11998e, #38ef7d); /* Gradient for modern browsers */
  -webkit-background-clip: text; /* Clip background to text */
  -webkit-text-fill-color: transparent; /* Make text transparent to show gradient */
}

/* Blue text gradient class */
.blue-text-gradient {
  background: #56ccf2; /* Fallback solid blue background */
  background: -webkit-linear-gradient(to top, #2f80ed, #56ccf2); /* Gradient for older browsers */
  background: linear-gradient(to top, #2f80ed, #56ccf2); /* Gradient for modern browsers */
  -webkit-background-clip: text; /* Clip background to text */
  -webkit-text-fill-color: transparent; /* Make text transparent to show gradient */
}

/* Pink text gradient class */
.pink-text-gradient {
  background: #ec008c; /* Fallback solid pink background */
  background: -webkit-linear-gradient(to top, #ec008c, #fc6767); /* Gradient for older browsers */
  background: linear-gradient(to top, #ec008c, #fc6767); /* Gradient for modern browsers */
  -webkit-background-clip: text; /* Clip background to text */
  -webkit-text-fill-color: transparent; /* Make text transparent to show gradient */
}

/* Canvas loader animation class */
.canvas-loader {
  font-size: 10px; /* Set font size (used for element size) */
  width: 1em; /* Set width to 1em (relative to font size) */
  height: 1em; /* Set height to 1em (relative to font size) */
  border-radius: 50%; /* Make the element circular */
  position: relative; /* Position relative to its normal position */
  text-indent: -9999em; /* Move text far off-screen to hide it */
  animation: mulShdSpin 1.1s infinite ease; /* Apply spin animation */
  transform: translateZ(0); /* Improve animation performance */
}

/* Keyframes for the mulShdSpin animation */
@keyframes mulShdSpin {
  /* At 0% and 100% of the animation */
  0%, 100% {
    /* Define multiple box-shadows for the loader's circle */
    box-shadow: 
      0em -2.6em 0em 0em #ffffff, /* Top position, white */
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), /* Top-right, light shadow */
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2), /* Right, light shadow */
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), /* Bottom-right, light shadow */
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2), /* Bottom, light shadow */
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), /* Bottom-left, light shadow */
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), /* Left, medium shadow */
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7); /* Top-left, dark shadow */
  }

  /* At 12.5% of the animation */
  12.5% {
    box-shadow: 
      0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), /* Top position, dark shadow */
      1.8em -1.8em 0 0em #ffffff, /* Top-right, white */
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2), /* Right, light shadow */
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), /* Bottom-right, light shadow */
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2), /* Bottom, light shadow */
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), /* Bottom-left, light shadow */
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), /* Left, light shadow */
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5); /* Top-left, medium shadow */
  }

  /* At 25% of the animation */
  25% {
    box-shadow: 
      0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), /* Top position, medium shadow */
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), /* Top-right, dark shadow */
      2.5em 0em 0 0em #ffffff, /* Right, white */
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), /* Bottom-right, light shadow */
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2), /* Bottom, light shadow */
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), /* Bottom-left, light shadow */
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), /* Left, light shadow */
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2); /* Top-left, light shadow */
  }

  /* At 37.5% of the animation */
  37.5% {
    box-shadow: 
      0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), /* Top position, light shadow */
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), /* Top-right, medium shadow */
      2.5em 0em 0 0em rgba(255, 255, 255, 0.7), /* Right, dark shadow */
      1.75em 1.75em 0 0em #ffffff, /* Bottom-right, white */
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2), /* Bottom, light shadow */
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), /* Bottom-left, light shadow */
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), /* Left, light shadow */
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2); /* Top-left, light shadow */
  }

  /* At 50% of the animation */
  50% {
    box-shadow: 
      0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), /* Top position, light shadow */
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), /* Top-right, light shadow */
      2.5em 0em 0 0em rgba(255, 255, 255, 0.5), /* Right, medium shadow */
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), /* Bottom-right, dark shadow */
      0em 2.5em 0 0em #ffffff, /* Bottom, white */
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), /* Bottom-left, light shadow */
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), /* Left, light shadow */
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2); /* Top-left, light shadow */
  }

  /* At 62.5% of the animation */
  62.5% {
    box-shadow: 
      0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), /* Top position, light shadow */
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), /* Top-right, light shadow */
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2), /* Right, light shadow */
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), /* Bottom-right, medium shadow */
      0em 2.5em 0 0em rgba(255, 255, 255, 0.7), /* Bottom, dark shadow */
      -1.8em 1.8em 0 0em #ffffff, /* Bottom-left, white */
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), /* Left, light shadow */
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2); /* Top-left, light shadow */
  }

  /* At 75% of the animation */
  75% {
    box-shadow: 
      0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), /* Top position, light shadow */
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), /* Top-right, light shadow */
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2), /* Right, light shadow */
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), /* Bottom-right, light shadow */
      0em 2.5em 0 0em rgba(255, 255, 255, 0.5), /* Bottom, medium shadow */
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), /* Bottom-left, dark shadow */
      -2.6em 0em 0 0em #ffffff, /* Left, white */
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2); /* Top-left, light shadow */
  }

  /* At 87.5% of the animation */
  87.5% {
    box-shadow: 
      0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), /* Top position, light shadow */
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), /* Top-right, light shadow */
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2), /* Right, light shadow */
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), /* Bottom-right, light shadow */
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2), /* Bottom, light shadow */
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), /* Bottom-left, medium shadow */
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), /* Left, dark shadow */
      -1.8em -1.8em 0 0em #ffffff; /* Top-left, white */
  }
}

```
</details>

<details>
<summary><code>Motion.js</code></summary>

```javascript
/**
 * This function creates an animation for text elements, making them slide up and fade in.
 *
 * @param {number} delay The delay before the animation starts (in seconds).
 *
 * @returns {object} An object containing the animation properties.
 *
 * @example
 * ```javascript
 * import { textVariant } from './utilty/motion';
 *
 * <motion.h1 variants={textVariant(0.5)}>Hello, World!</motion.h1>
 * ```
 * This will make the "Hello, World!" heading slide up and fade in with a delay of 0.5 seconds.
 */
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50, // Initial position: 50 pixels above the final position
      opacity: 0, // Initial opacity: fully transparent
    },
    show: {
      y: 0, // Final position: at its normal position
      opacity: 1, // Final opacity: fully opaque
      transition: {
        type: "spring", // Type of animation: spring-like for a more natural feel
        duration: 1.25, // Duration of the animation: 1.25 seconds
        delay: delay, // Delay before the animation starts: based on the provided delay
      },
    },
  };
};


/**
 * This function creates an animation for elements that fade in from a specified direction.
 *
 * @param {string} direction The direction from which the element fades in (e.g., "left", "right", "up", "down").
 * @param {string} type The type of animation (e.g., "spring", "tween").
 * @param {number} delay The delay before the animation starts (in seconds).
 * @param {number} duration The duration of the animation (in seconds).
 *
 * @returns {object} An object containing the animation properties.
 *
 * @example
 * ```javascript
 * import { fadeIn } from './utility/motion';
 *
 * <motion.div variants={fadeIn("left", "spring", 0.5, 1)}>...</motion.div>
 * ```
 * This will make the div element fade in from the left with a delay of 0.5 seconds and a duration of 1 second.
 */
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0, // Initial position: off-screen in the specified direction
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0, // Initial position: off-screen in the specified direction
      opacity: 0, // Initial opacity: fully transparent
    },
    show: {
      x: 0, // Final position: at its normal position
      y: 0, // Final position: at its normal position
      opacity: 1, // Final opacity: fully opaque
      transition: {
        type: type, // Type of animation: based on the provided type
        delay: delay, // Delay before the animation starts: based on the provided delay
        duration: duration, // Duration of the animation: based on the provided duration
        ease: "easeOut", // Easing function: "easeOut" for a smoother animation
      },
    },
  };
};

/**
 * This function creates an animation for elements that zoom in from a small size.
 *
 * @param {number} delay The delay before the animation starts (in seconds).
 * @param {number} duration The duration of the animation (in seconds).
 *
 * @returns {object} An object containing the animation properties.
 *
 * @example
 * ```javascript
 * import { zoomIn } from './utility/motion';
 *
 * <motion.div variants={zoomIn(0.5, 1)}>...</motion.div>
 * ```
 * This will make the div element zoom in from a small size with a delay of 0.5 seconds and a duration of 1 second.
 */
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0, // Initial scale: 0 (very small)
      opacity: 0, // Initial opacity: fully transparent
    },
    show: {
      scale: 1, // Final scale: 1 (normal size)
      opacity: 1, // Final opacity: fully opaque
      transition: {
        type: "tween", // Type of animation: "tween" for a smooth scaling effect
        delay: delay, // Delay before the animation starts: based on the provided delay
        duration: duration, // Duration of the animation: based on the provided duration
        ease: "easeOut", // Easing function: "easeOut" for a smoother animation
      },
    },
  };
};

/**
 * This function creates an animation for elements that slide in from a specified direction.
 *
 * @param {string} direction The direction from which the element slides in (e.g., "left", "right", "up", "down").
 * @param {string} type The type of animation (e.g., "spring", "tween").
 * @param {number} delay The delay before the animation starts (in seconds).
 * @param {number} duration The duration of the animation (in seconds).
 *
 * @returns {object} An object containing the animation properties.
 *
 * @example
 * ```javascript
 * import { slideIn } from './utility/motion';
 *
 * <motion.div variants={slideIn("right", "spring", 0.5, 1)}>...</motion.div>
 * ```
 * This will make the div element slide in from the right with a delay of 0.5 seconds and a duration of 1 second.
 */
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0, // Initial position: off-screen in the specified direction
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0, // Initial position: off-screen in the specified direction
    },
    show: {
      x: 0, // Final position: at its normal position
      y: 0, // Final position: at its normal position
      transition: {
        type: type, // Type of animation: based on the provided type
        delay: delay, // Delay before the animation starts: based on the provided delay
        duration: duration, // Duration of the animation: based on the provided duration
        ease: "easeOut", // Easing function: "easeOut" for a smoother animation
      },
    },
  };
};

/**
 * This function creates an animation for a container element, making its children animate with a staggered delay.
 *
 * @param {boolean} staggerChildren Whether the children of the container should have staggered animations.
 * @param {number} delayChildren The delay between each child's animation (in seconds).
 *
 * @returns {object} An object containing the animation properties.
 *
 * @example
 * ```javascript
 * import { staggerContainer } from './utility/motion';
 *
 * <motion.ul variants={staggerContainer(true, 0.1)}>
 *   <motion.li>Item 1</motion.li>
 *   <motion.li>Item 2</motion.li>
 *   <motion.li>Item 3</motion.li>
 * </motion.ul>
 * ```
 * This will make the list items animate with a staggered delay of 0.1 seconds between each item.
 */
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {}, // Initial state: empty
    show: {
      transition: {
        staggerChildren: staggerChildren, // Whether children should be staggered: based on the provided staggerChildren
        delayChildren: delayChildren || 0, // Delay between children: based on the provided delayChildren or 0 if none is provided
      },
    },
  };
};
```
</details>

<details>
<summary><code>styles.js</code></summary>

```javascript
/**
 * This file contains a collection of pre-defined styles that can be used to easily apply different looks to different parts of your website.
 *
 * It's like a toolbox full of design elements that make your website look consistent and professional.
 */

const styles = {
  /**
   * Adds horizontal padding to elements.
   *
   * - `sm:px-16`: Adds 16 pixels of padding on the left and right for screens that are medium size or larger.
   * - `px-6`: Adds 6 pixels of padding on the left and right for all other screen sizes.
   */
  paddingX: "sm:px-16 px-6",

  /**
   * Adds vertical padding to elements.
   *
   * - `sm:py-16`: Adds 16 pixels of padding on the top and bottom for screens that are medium size or larger.
   * - `py-6`: Adds 6 pixels of padding on the top and bottom for all other screen sizes.
   */
  paddingY: "sm:py-16 py-6",

  /**
   * Adds padding to all sides of elements.
   *
   * - `sm:px-16`: Adds 16 pixels of padding on the left and right for screens that are medium size or larger.
   * - `px-6`: Adds 6 pixels of padding on the left and right for all other screen sizes.
   * - `sm:py-16`: Adds 16 pixels of padding on the top and bottom for screens that are medium size or larger.
   * - `py-10`: Adds 10 pixels of padding on the top and bottom for all other screen sizes.
   */
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  /**
   * Styles for the main heading on the homepage (like a welcome message).
   *
   * - `font-black`: Uses a very bold font weight.
   * - `text-white`: Sets the text color to white.
   * - `lg:text-[80px]`: Sets the text size to 80 pixels for large screens.
   * - `sm:text-[60px]`: Sets the text size to 60 pixels for medium screens.
   * - `xs:text-[50px]`: Sets the text size to 50 pixels for small screens.
   * - `text-[40px]`: Sets the text size to 40 pixels for extra small screens.
   * - `lg:leading-[98px]`: Sets the line height to 98 pixels for large screens.
   * - `mt-2`: Adds a 2 pixel margin at the top.
   */
  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",

  /**
   * Styles for the subheading on the homepage.
   *
   * - `text-[#dfd9ff]`: Sets the text color to a light purple.
   * - `font-medium`: Uses a medium font weight.
   * - `lg:text-[30px]`: Sets the text size to 30 pixels for large screens.
   * - `sm:text-[20px]`: Sets the text size to 20 pixels for medium screens.
   * - `xs:text-[20px]`: Sets the text size to 20 pixels for small screens.
   * - `text-[16px]`: Sets the text size to 16 pixels for extra small screens.
   * - `lg:leading-[40px]`: Sets the line height to 40 pixels for large screens.
   */
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  /**
   * Styles for headings in other sections of your website.
   *
   * - `text-white`: Sets the text color to white.
   * - `font-black`: Uses a very bold font weight.
   * - `md:text-[60px]`: Sets the text size to 60 pixels for medium screens or larger.
   * - `sm:text-[50px]`: Sets the text size to 50 pixels for small screens.
   * - `xs:text-[40px]`: Sets the text size to 40 pixels for extra small screens.
   * - `text-[30px]`: Sets the text size to 30 pixels for extra extra small screens.
   */
  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",

  /**
   * Styles for subheadings in other sections of your website.
   *
   * - `sm:text-[18px]`: Sets the text size to 18 pixels for small screens or larger.
   * - `text-[14px]`: Sets the text size to 14 pixels for extra small screens.
   * - `text-secondary`: Uses a secondary color for the text (usually a lighter shade of the main color).
   * - `uppercase`: Makes all the letters uppercase.
   * - `tracking-wider`: Increases the spacing between letters.
   */
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

/**
 * Makes the `styles` object available to other parts of your website so you can use these styles in different places.
 */
export { styles };
```
</details>

<details>
<summary><code>tailwind.config.cjs</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        gradient: "gradient 5s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
```
</details>


## 🔗 Links
- **Source Code:** [Source](https://github.com/NEAZYIT/3D-Developer-Portfolio)

## 👨‍💻 ME
[ME](https://github.com/NEAZYIT)
