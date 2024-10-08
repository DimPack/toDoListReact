import { Formik, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { taskShema } from "../../utils/validatinShemas";
import styles from "./TaskForm.module.scss";
import Input from "./Input";

const TaskForm = ({ onSubmit }) => {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ content: "" }}
        onSubmit={onSubmit}
        validationSchema={taskShema}
      >
        <Form className={styles.form}>
          <div className={styles.formBlock}>
            <Input type="text" name="content" placeholder="enter task" />
            <input type="submit" value="Add" className={styles.buttonAdd}/>
          </div>

          <ErrorMessage name="content" component="div" className={styles.invalidError}/>
        </Form>
      </Formik>
    </div>
  );
};

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;
