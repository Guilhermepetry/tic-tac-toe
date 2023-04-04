import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Label from "./objects/Label";

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <Grid />
        <Label content="Show events" />
      </main>
    </>
  );
}

export default App;
