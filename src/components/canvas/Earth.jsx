import React, { Suspense } from "react"; // Importing React and Suspense for lazy loading
import { Canvas } from "@react-three/fiber"; // Importing Canvas from @react-three/fiber for creating WebGL scenes
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // Importing OrbitControls, Preload, and useGLTF from @react-three/drei for camera controls, asset preloading, and loading GLTF models

import CanvasLoader from "../Loader"; // Importing a custom loader component

// Function component to render the Earth model
const Earth = () => {
  // Loading the Earth model using useGLTF hook
  const earth = useGLTF("./planet/scene.gltf");

  // Rendering the Earth model as a primitive object with specified scale, position, and rotation
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// Function component to render the EarthCanvas WebGL scene
const EarthCanvas = () => {
  return (
    <Canvas
      shadows // Enabling shadows in the WebGL scene
      frameloop='demand' // Setting the frameloop to 'demand' for better performance
      dpr={[1, 2]} // Setting device pixel ratio for better resolution on high-density displays
      gl={{ preserveDrawingBuffer: true }} // Enabling preservation of drawing buffer for post-processing effects
      camera={{ // Configuring the camera settings
        fov: 45, // Field of view
        near: 0.1, // Near clipping plane
        far: 200, // Far clipping plane
        position: [-4, 3, 6], // Camera position
      }}
    >
      <Suspense fallback={<CanvasLoader />}> {/* Suspense component for lazy loading with a fallback loader */}
        <OrbitControls // OrbitControls component for controlling the camera
          autoRotate // Enabling auto rotation of the camera
          enableZoom={false} // Disabling zooming
          maxPolarAngle={Math.PI / 2} // Setting the maximum polar angle for vertical rotation
          minPolarAngle={Math.PI / 2} // Setting the minimum polar angle for vertical rotation
        />
        <Earth /> {/* Rendering the Earth component inside the Canvas */}
        <Preload all /> {/* Preloading all assets */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas; // Exporting the EarthCanvas component for use in other parts of the application