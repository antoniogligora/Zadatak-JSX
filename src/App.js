import logo from "./logo.svg";
import "./App.css";

function App() {
  const a = "ja sam prvi";
  const b = "ja sam drugi";

  return (
    <>
      <p>Ovo je moj prvi zadatak u JSX</p>
      <p>Tko sam ja: {a}</p>
      <p>Tko sam pak ja: {b}</p>
      <p>
        Zavrsnica je: {a} {b}
      </p>
    </>
  );
}

export default App;
