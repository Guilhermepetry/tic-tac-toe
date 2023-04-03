import "./App.css";
import Header from "./components/Header";
import Card from "./objects/Card";
import Player from "./objects/Player";

function App() {
  return (
    <>
      <Header />
      <Card>
        <Player player="first" />
        <Player player="second" />
        <Player player="first" />

        <Player player="first" />
        <Player player="second" />
        <Player player="first" />

        <Player player="first" />
        <Player player="second" />
        <Player player="first" />
      </Card>
    </>
  );
}

export default App;
