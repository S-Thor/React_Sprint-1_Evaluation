import React from "react";
import styles from "./addTask.module.css";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..."/>
      <button data-cy="add-task-button"><FaPlus/></button>
    </div>
  );
};

export default AddTask;
