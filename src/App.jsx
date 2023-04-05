import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Checkbox from "./objects/Checkbox";

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <Grid />
        <Checkbox
          id="show"
          value="show"
          type="checkbox"
          content="Show events"
        />
      </main>
    </>
  );
}

export default App;
