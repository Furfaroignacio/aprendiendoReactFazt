import { tasks as data } from "./tasks";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useEffect, useState } from "react"; 

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

    function createTask (taskTitle)  {
      setTasks([...tasks, {
        title : taskTitle, 
        id : tasks.length,
        descripcion : "Es la tarea numero " + (tasks.length + 1)
      }])
    }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
