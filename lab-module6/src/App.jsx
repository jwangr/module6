import "./App.css";
import Greeting from "./components/Greeting";
import BigCats from "./components/BigCats";

function App() {
  return (
    <>
      <Greeting name='John'>
          <div>Welcome to this homepage.</div>
      </Greeting>

      <BigCats />
    </>
  );
}

export default App;
