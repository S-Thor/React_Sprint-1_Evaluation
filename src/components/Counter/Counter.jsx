import React,{useState}from "react";
import styles from "./counter.module.css";
import { FaPlus,FaMinus } from "react-icons/fa";

const Counter = () => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  const [count,setCount] = useState(0);
  return (
    <div className={styles.counter}>
      <button onClick={() => setCount(count + 1)} data-cy="task-counter-increment-button"><FaPlus/></button>
      <span data-cy="task-counter-value">{count}</span>
      <button onClick={() => setCount(count - 1)}data-cy="task-counter-decrement-button"><FaMinus/></button>
    </div>
  );
};

export default Counter;
