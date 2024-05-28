import { BallCanvas } from "./canvas"; // Importing the BallCanvas component for rendering 3D balls
import { SectionWrapper } from "../hoc"; // Importing a higher-order component for section styling and layout
import { technologies } from "../constants"; // Importing an array of technologies, each with an associated icon

/**
 * Tech Component
 *
 * This component renders a grid of technology icons, each displayed as a 3D ball.
 * The icons are dynamically generated based on the 'technologies' array.
 */
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* Loop through each technology and render a BallCanvas component with the respective icon */}
      {technologies.map((technology) => (
        <div
          className="w-28 h-28" // Set the width and height of the container for each BallCanvas
          key={technology.name} // Use the technology name as the key for each element
        >
          <BallCanvas icon={technology.icon} /> {/* Render the 3D ball with the technology icon */}
        </div>
      ))}
    </div>
  );
};

// Export the Tech component wrapped with SectionWrapper for consistent section styling
export default SectionWrapper(Tech, "");