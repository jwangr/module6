import "./App.css";
import BigCats from "./components/BigCats";
import Emoji from "./components/Emoji";
import Greeting from "./components/Greeting";

function App() {
  return (
    <>
      <Greeting name='John'>
          <div>Welcome to this homepage.</div>
      </Greeting>

      <Emoji />

      <BigCats />
    </>
  );
}

export default App;
