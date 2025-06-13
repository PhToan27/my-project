import './App.css';
import Counter from "./component/Counter";
import InputField from "./component/InputField";
import ToggleVisibility from "./component/ToggleVisibility";
import TodoList from "./component/TodoList";
import ColorSwitcher from "./component/ColorSwitcher";
import SearchFilter from "./component/SearchFilter";
import DragDropList from "./component/DragDropList";
function App() {
  
  return (
    <>
    <Counter />
    <InputField />
    <ToggleVisibility/>
    <TodoList/>
    <ColorSwitcher/>
    <SearchFilter/>
    <DragDropList/>
</>
);
}

export default App;
