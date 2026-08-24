import './App.scss'
import Header from "./components/Header.jsx";
import SearchInput from "./components/SearchInput.jsx";
import FilterSelect from "./components/FilterSelect.jsx";

function App() {
  return (
      <div className="app">
        <Header/>
        <div className="controls">
            <SearchInput/>

        </div>
      </div>
  )
}

export default App