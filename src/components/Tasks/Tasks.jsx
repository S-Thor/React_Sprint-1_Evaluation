import React,{useState} from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
import { MdHourglassEmpty } from "react-icons/md";
import data from "../data/tasks.json"
console.log(data);
const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  let [task,setTask] = useState([]);
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {
       
            <Task/>
        }
        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        <span><MdHourglassEmpty/></span>
        <p>Empty List</p>
        <p>Add a new Task above</p>
      </div>
    </>
  );
};

export default Tasks;
