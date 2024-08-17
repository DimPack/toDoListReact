import { Formik, Form, Field } from "formik";
import useTodo from "../../hooks/useToDo";
import Task from "../Task/index";

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
      <div>
        <Formik initialValues={{ content: "" }} onSubmit={onSubmit}>
          <Form>
            <Field name="content" />
            <input type="submit" value="Add" />
          </Form>
        </Formik>
      </div>
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

//1_REACT_hooks_practice_083_2
//https://www.youtube.com/watch?v=o4JYqtOkGs0&list=PLxQIdU5bMkOiUg3p6X4BXVpIfWzMaLV7l&index=180&t=74s
