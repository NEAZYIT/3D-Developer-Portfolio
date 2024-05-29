import { useState, useRef, Suspense } from "react"; // Imports React hooks: useState for managing state, useRef for accessing DOM elements, and Suspense for lazy loading.
import { Canvas, useFrame } from "@react-three/fiber"; // Imports Canvas and useFrame from @react-three/fiber for creating WebGL scenes and animation.
import { Points, PointMaterial, Preload } from "@react-three/drei"; // Imports Points, PointMaterial, and Preload from @react-three/drei for rendering points and preloading assets.
import * as random from "maath/random/dist/maath-random.esm"; // Imports random functions from the maath/random library.

const Stars = (props) => {
  const ref = useRef(); // Creates a reference for the Points group.
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 })); // Generates 5000 random points within a sphere with a radius of 1.2.

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10; // Rotates the Points group around the x-axis.
    ref.current.rotation.y -= delta / 15; // Rotates the Points group around the y-axis.
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}> {/* Group element for applying rotation to all its children */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}> {/* Renders points using the positions from the sphere state */}
        <PointMaterial
          transparent
          color='#f272c8' // Sets the color of the points to pink
          size={0.002} // Sets the size of the points
          sizeAttenuation={true} // Applies size attenuation to the points
          depthWrite={false} // Disables depth writing to prevent rendering issues
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'> {/* Container for the WebGL canvas */}
      <Canvas camera={{ position: [0, 0, 1] }}> {/* Creates a WebGL canvas with a camera positioned at [0, 0, 1] */}
        <Suspense fallback={null}> {/* Suspense component for lazy loading */}
          <Stars /> {/* Renders the Stars component inside Suspense */}
        </Suspense>

        <Preload all /> {/* Preloads all assets */}
      </Canvas>
    </div>
  );
};

export default StarsCanvas; // Exports the StarsCanvas component