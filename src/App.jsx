import './App.scss'
import Header from "./components/Header.jsx";
import SearchInput from "./components/SearchInput.jsx";
import FilterSelect from "./components/FilterSelect.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import TodoList from "./components/TodoList.jsx";
import AddButton from "./components/AddButton.jsx";


function App() {
  return (
      <div className="App">
        <Header/>
        <div className="Controls">
            <SearchInput/>
            <FilterSelect/>
            <ThemeToggle/>
        </div>
       <TodoList/>
       <AddButton/>
      </div>
  )
}

export default App