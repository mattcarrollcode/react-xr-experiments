// import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { XR, createXRStore } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
// import {
//   Physics,
//   RigidBody,
//   CuboidCollider,
//   BallCollider,
// } from "@react-three/rapier";

const store = createXRStore({
  // hand: { touchPointer: false },
});

export default function App() {
  const { scene } = useGLTF("/reactlogo.gltf");
  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        {/* <Physics gravity={[0, 0, 0]}> */}
        <XR store={store} referenceSpace="local-floor">
          <ambientLight intensity={2} />
          <pointLight position={[20, 10, -10]} intensity={2} />
          {/* <RigidBody> */}
          <primitive position={[0, 1.5, -0.5]} scale={0.1} object={scene} />
          {/* </RigidBody> */}
        </XR>
        {/* </Physics> */}
      </Canvas>
    </>
  );
}

// useGLTF.preload();
