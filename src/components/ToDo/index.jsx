import useTodo from "../../hooks/useToDo";
import Task from "../Task/index";
import TaskForm from "../TaskForm/index";

const ToDo = () => {
  const { tasks, addTask, setIsDone, deleteTask } = useTodo([
    { id: "1", content: "test task", isDone: false },
  ]);

  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  };

  return (
    <section>
      <h2>Todo</h2>
      <TaskForm onSubmit={onSubmit} />
      <div>
        <h3>list tasks</h3>
        <ol>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              setIsDone={setIsDone}
              deleteTask={deleteTask}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ToDo;

//PFM2024-1_REACT_Консультація_083_3
//https://www.youtube.com/watch?v=2BZqJO7QXeM&list=PLxQIdU5bMkOiUg3p6X4BXVpIfWzMaLV7l&index=181
