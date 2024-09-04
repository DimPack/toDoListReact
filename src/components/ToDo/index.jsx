import useTodo from "../../hooks/useToDo";
import Task from "../Task/index";
import TaskForm from "../TaskForm/index";
import styles from "./ToDo.module.scss";

const ToDo = () => {
  const { tasks, addTask, setIsDone, deleteTask } = useTodo([
    // { id: "1", content: "test task", isDone: false },
  ]);

  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  };

  const showTasks = (task) => (
    <Task
      key={task.id}
      task={task}
      setIsDone={setIsDone}
      deleteTask={deleteTask}
    />
  );

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Todo list</h2>

      <TaskForm onSubmit={onSubmit} />
      <div className={styles.blockListTask}>
        <h3 className={styles.title}>list tasks</h3>
        {tasks.length === 0 ? (<p>empty list</p>) : (<ol>{tasks.map(showTasks)}</ol>)}
      </div>
    </section>
  );
};

export default ToDo;

//PFM2024-1_REACT_Консультація_083_3
//https://www.youtube.com/watch?v=2BZqJO7QXeM&list=PLxQIdU5bMkOiUg3p6X4BXVpIfWzMaLV7l&index=182 50:11
