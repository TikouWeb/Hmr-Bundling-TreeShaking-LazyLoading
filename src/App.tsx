import { lazy, useState } from "react";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import { Canvas } from "@react-three/fiber";

import { ComponentA } from "./components/componentA";
import { ComponentB } from "./components/componentB";

import { makeCalculation } from "./utils";

const ComponentUselessLazyLoaded = lazy(
  () => import("./components/component-useless")
);

export const App = () => {
  const [state, show] = useState(false);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <hr />

      <button onClick={() => show(true)}></button>

      <div
        style={{
          width: "700px",
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <ComponentA />
        <hr />
        <ComponentB />
        <Canvas>
          <></>
        </Canvas>
      </div>

      <hr />

      {makeCalculation()}

      {state ? <ComponentUselessLazyLoaded /> : null}

      <hr />

      {/* {sayHello()} */}
    </>
  );
};
