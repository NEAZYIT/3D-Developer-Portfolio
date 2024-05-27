import { Html, useProgress } from "@react-three/drei"; // We import special tools to show the loader

const Loader = () => { // This is our Loader function
  const { progress } = useProgress(); // We get information about how much the model has loaded

  return ( // We create the actual loader with HTML
    <Html>
      <span className="canvas-load"></span>  {/* A placeholder for visual cues */}
      <p  // We display the loading progress as a percentage
        style={{
          fontSize: 14, // Set the font size
          color: '#f1f1f1', //  Set the text color
          fontWeight: 800, // Make the text bold
          marginTop: 40  // Add space above the text
        }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
};

export default Loader; // This makes the Loader available for use in our website