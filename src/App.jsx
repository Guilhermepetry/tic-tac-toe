import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";

import Input from "./objects/Input";

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <Grid />
        <Input id="show" value="show" content="Show events" />
      </main>
    </>
  );
}

export default App;
