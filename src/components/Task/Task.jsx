import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
import { TiDelete } from "react-icons/ti";

const Task = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">Push Up</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button"><TiDelete/></button>
    </li>

    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">Pull Up</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button"><TiDelete/></button>
    </li>

    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">Squats</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button"><TiDelete/></button>
    </li>

    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">Sprints</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button"><TiDelete/></button>
    </li>
    
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">Stairs</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button"><TiDelete/></button>
    </li>
    </>
  );
};

export default Task;
