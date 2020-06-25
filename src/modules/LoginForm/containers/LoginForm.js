import LoginForm from "../components/LoginForm";
import { withFormik } from 'formik';
import validation from 'utils/validate'

export default withFormik({
    mapPropsToValues: () => ({
        email: "",
        password: ""
    }),
    validate: values => {
      let errors = {};
      
      validation({ isAuth: true, values, errors });

      return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'LoginForm', 
  })(LoginForm);
