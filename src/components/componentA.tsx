// import uniq from "lodash/uniq";
import uniq from "lodash/uniq";
const subjects = uniq([
  "⚡ HMR vs Hot reload",
  "📦 Bundling",
  "🫨 Tree shaking",
  "😴 Lazy Loading ---------",
]);

export const ComponentA = () => {
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
      <h2>ComponentA</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index} style={{ textAlign: "left" }}>
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    console.log("Component AAAAAAAA is about to be replaced");
  });
}
