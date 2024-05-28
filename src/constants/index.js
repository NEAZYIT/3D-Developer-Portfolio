/**
 * This file defines constants for data used throughout the website, including:
 *
 * - `navLinks`: Navigation links for the website.
 * - `services`: Services offered by the developer.
 * - `technologies`: Programming languages and tools used by the developer.
 * - `experiences`: Work experience of the developer.
 * - `testimonials`: Positive feedback from clients or colleagues.
 * - `projects`: Projects built by the developer.
 *
 * This data is likely used by a frontend framework like React to render various components on the website.
 */
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
    name: "HTML 5",
    icon: html,
  },
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// This section defines the projects built by the website owner.
// Each project has a name, description, list of tags, an image, and a link to the source code.
// For example, the first project is called "Car Rent" and it is a web-based platform for booking car rentals.
const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
