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
    const [editingTaskId, setEditingTaskId] = React.useState(null)

    const toggleTask = (taskId) => {
        setTasks(prev => prev.map((task) => {
            if (task.id === taskId) {
                return {...task, completed : !task.completed}
            }
            else {
                return task
            }
        }));
    }

    const addTask = (text) => {
        if (text.trim() === "") {
            return;
        }
        const newTask = {
            id: crypto.randomUUID(),
            text: text,
            completed: false,
        };
      setTasks( prev =>[...prev, newTask]);
    };

    const deleteTask = (taskId) => {
        setTasks(prev => prev.filter((task) => {
            return task.id !== taskId;
        }));
    };

    const startEditing = (taskId) => {
        setEditingTaskId(taskId)
        setIsModalOpen(true)
    };

    const editingTask = tasks.find((task) => {
        return task.id === editingTaskId;
    });

    const handleApply = (text) => {
        if (editingTaskId === null) {
            addTask(text);
        } else {
            setTasks(prev => prev.map((task) => {
                if (task.id === editingTaskId) {
                    return {
                        ...task,
                        text: text
                    };
                } else {
                    return task;
                }
            }));
        }

        setEditingTaskId(null);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingTaskId(null);
    };

    return (
      <div className="App">
        <Header/>
        <div className="Controls">
            <SearchInput/>
            <FilterSelect/>
            <ThemeToggle/>
        </div>
          <TodoList tasksCollection={tasks} toggleTask={toggleTask} deleteTask={deleteTask} startEditing={startEditing}/>
          <AddButton OnClick={() => setIsModalOpen(true)} />
          {isModalOpen && <Modal onClose={handleCloseModal} onAddTask={handleApply} initialText={editingTask ? editingTask.text : ''} title={editingTask ? "EDIT NOTE" : "NEW NOTE"}/>}
      </div>
  )
}

export default App