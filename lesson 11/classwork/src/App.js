import ButtonClick from "./components/ButtonClick";
import { Context, ThemeContext } from "./components/Context";
import FocusInput from "./components/FocusInput";
import Todo from "./components/Todo";

function App() {
  return (
    <ThemeContext>
      <Todo />
      <FocusInput />
      <ButtonClick />
      <Context />
    </ThemeContext>
  );
}

export default App;
