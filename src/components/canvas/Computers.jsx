import React, { Suspense, useEffect, useState } from "react"; //  Import tools to create interactive parts of our 3D scene.
import { Canvas } from "@react-three/fiber"; //  Import tools to create the 3D canvas (like a screen).
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // Import tools to control the camera, load models, and manage assets.
import CanvasLoader from "../Loader"; // Import a component to show a loading screen while the scene is being prepared.

/**
 * This component renders a 3D model of a computer desktop.
 * @param {boolean} isMobile - Whether the screen is in mobile mode.
 * @returns {JSX.Element} - The 3D model of the computer desktop.
 */
const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf"); // Load the 3D model from a file. 

  return (
    // Create a container for all the elements in our scene.
    <mesh>

      {/* Add a soft, general light to the scene. */}
      <hemisphereLight intensity={3.15} groundColor="black" />

      {/* Add a focused spotlight to the scene. */}
      <spotLight
        position={[-20, 50, 10]}  // Place the spotlight at this location.
        angle={0.12}               // Set the spotlight's angle.
        penumbra={1}               // Make the spotlight's edges a little blurry.
        intensity={1}               // Set the spotlight's brightness.
        castShadow                 // Allow the spotlight to create shadows.
        shadow-mapSize={1024}     // Set the quality of the shadows.
      />

      {/* Add a light that radiates in all directions. */}
      <pointLight intensity={1} />

      {/* Render the 3D computer model in the scene. */}
      <primitive
        object={scene}             // Use the loaded model from the file.
        scale={isMobile ? 0.46 : 0.65} // Adjust the size based on phone or computer.
        position={isMobile ? [0, -4, -1] : [0, -3.25, -1.5]} // Place the model at these coordinates.
        rotation={[-0.01, -0.2, -0.1]} // Slightly rotate the model. 
      />
    </mesh>
  );
};

/**
 * This component renders the 3D canvas with the computer desktop model.
 * @returns {JSX.Element} - The 3D canvas with the computer desktop model.
 */
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); //  Create a "switch" to track if we're on a phone or computer.

  // Check if we're on a phone or computer and update the "switch"
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)'); // Check the screen size.
    setIsMobile(mediaQuery.matches); // Update the "switch" based on the screen size.

    const handleMediaQueryChange = (event) => { // Function to update the "switch" if the screen size changes.
      setIsMobile(event.matches); // Update the "switch" based on the new screen size.
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange); // Listen for screen size changes.

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange); // Stop listening when the component is no longer needed.
    };
  }, []);

  return (
    // Create the 3D canvas (like a screen). 
    <Canvas
      frameloop="demand" // Only update the canvas when something changes.
      shadows // Enable shadows in the scene. 
      dpr={[1, 2]} // Adjust the sharpness of the scene (higher number = sharper).
      camera={{ position: [22, 10, 5], fov: 28 }} // Set the camera's position and viewing angle.
      gl={{ preserveDrawingBuffer: true }} // Allow us to take screenshots of the scene.
      style={{ flex: 5 }}
    >
      <Suspense fallback={<CanvasLoader />}> {/* Show a loading screen while the scene is being loaded.*/}

        {/* Add controls to move the camera around the scene. */}
        <OrbitControls
          enableZoom={false} // Disable zooming with the mouse wheel.
          maxPolarAngle={Math.PI / 2} // Prevent the camera from going below the horizon.
          minPolarAngle={Math.PI / 2} // Prevent the camera from going above the horizon.
        />

        {/* Render the 3D computer model. */}
        <Computers isMobile={isMobile} />

      </Suspense>

      {/* Preload all the assets for the scene to improve performance. */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas; // Export the component so it can be used in other parts of the app.