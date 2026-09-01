import './App.scss'
import React from 'react';
import Header from "./components/Header.jsx";
import SearchInput from "./components/SearchInput.jsx";
import FilterSelect from "./components/FilterSelect.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import TodoList from "./components/TodoList.jsx";
import AddButton from "./components/AddButton.jsx";
import Modal from "./components/Modal.jsx";

function App() {
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [tasks, setTasks] = React.useState([]);

    const addTask = (text) => {
        if (text.trim() === "") {
            return;
        }
        const newTask = {
            id: crypto.randomUUID(),
            text: text,
            completed: false,
        };
      setTasks([...tasks, newTask]);
    };

    return (
      <div className="App">
        <Header/>
        <div className="Controls">
            <SearchInput/>
            <FilterSelect/>
            <ThemeToggle/>
        </div>
          <TodoList/>
          <AddButton OnClick={() => setIsModalOpen(true)} />
          {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} onAddTask={addTask}/>}
          Количество задач: {tasks.length}
      </div>
  )
}

export default App