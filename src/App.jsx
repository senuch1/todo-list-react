import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TasksGrid from "./components/TasksGrid/TasksGrid";
import './global.css'
import { TaskType } from "./types/TaskType";
import { dbTasks } from "./database"

function App() {
  const [tasks, setTasks] = useState(dbTasks)

  useEffect(()=>{
    console.log(tasks);
    console.log('Component did update');
  },[tasks])

  return (
    <>
      <Header />
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TasksGrid tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
