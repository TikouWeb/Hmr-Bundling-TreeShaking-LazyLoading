import random from "lodash/random";

export const ComponentB = () => {
  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <h2>ComponentB</h2>
      <p>
        My Random Number <h3>{random(2837, 999999)}</h3>
      </p>
    </div>
  );
};

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    console.log("Component BBBBBBBB is about to be replaced");
  });

  import.meta.hot.accept((newModule) => {
    if (newModule) {
      console.log("updated: component is now \n\n", newModule.ComponentB);
    }
  });
}
