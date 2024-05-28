import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Decal, Float, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from "../Loader"; // Assuming you have a CanvasLoader component

// Ball component - Creates a 3D ball with an image decal
const Ball = (props) => {
  // Load the image texture using useTexture
  const [decal] = useTexture([props.imgUrl]);

  return (
    // Float component animates the ball
    <Float
      speed={1.75} // Speed of the floating animation
      rotationIntensity={1} // Intensity of rotation while floating
      floatIntensity={2} // How high the ball floats
    >
      {/* Ambient light for overall scene illumination */}
      <ambientLight intensity={0.55} />
      {/* Directional light for focused light on the ball */}
      <directionalLight position={[0, 0, 0.05]} />
      {/* Mesh for the ball itself */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Icosahedron geometry for a sphere-like shape */}
        <icosahedronGeometry args={[1, 1]} />
        {/* Standard material for the ball with white color */}
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset // Adjusts the rendering for smoother edges
          polygonOffsetFactor={-5}
          flatShading // Makes the ball appear smoother
        />
        {/* Decal component to apply the image onto the ball */}
        <Decal
          position={[0, 0, 1]} // Position of the decal on the ball
          rotation={[2 * Math.PI, 0, 6.25]} // Rotation of the decal
          flatShading // Makes the decal look flatter
          map={decal} // Applies the loaded image as the texture
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand" // Only update the canvas when something changes.
      gl={{ preserveDrawingBuffer: true }} // Allow us to take screenshots of the scene.
    >
      <Suspense fallback={<CanvasLoader />}> {/* Show a loading screen while the scene is being loaded.*/}
        {/* Add controls to move the camera around the scene. */}
        <OrbitControls enableZoom={false} /> {/* Disable zooming with the mouse wheel. */}
        {/* Render the 3D computer model. */}
        <Ball imgUrl={icon} />
      </Suspense>
      {/* Preload all the assets for the scene to improve performance. */}
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas;
