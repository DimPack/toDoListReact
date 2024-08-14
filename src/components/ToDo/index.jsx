import { Formik, Form, Field } from "formik";
import useTodo from "../../hooks/useToDo";

const ToDo = () => {
  const { tasks, addTask } = useTodo([
    { id: 1, content: "test task", isDone: false },
  ]);

  return (
    <section>
      <h2>Todo</h2>
      <div>
        <Formik initialValues={{ content: "" }} onSubmit={addTask}>
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
            <li key={task.id}>{task.content}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ToDo;

//PFM2024-1_REACT_hooks_practice_083_2
//https://www.youtube.com/watch?v=o4JYqtOkGs0&list=PLxQIdU5bMkOiUg3p6X4BXVpIfWzMaLV7l&index=180