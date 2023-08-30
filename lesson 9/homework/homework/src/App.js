import Counter from "./components/Counter";
import Expandable from "./components/expandable";

function App() {
  return (
    <>
      <Counter />
      <h3> Test 1 </h3>
      <hr />
      <Expandable>
        This is a test line.This is a large test line.This is a large test
        line.This is a large test line.This is a test line.This is a large test
        line.This is a large test line.This is a test line.This is a large test
        line.This is a large test line..This is a test line.This is a large test
        line.This is a large test line.This is a test line.This is a large test
        line.This is a large test line.
      </Expandable>
      <hr />
      <h3> Test 2 </h3>
      <hr />
      <Expandable> This is a test line.This is a large test line.</Expandable>
    </>
  );
}

export default App;
