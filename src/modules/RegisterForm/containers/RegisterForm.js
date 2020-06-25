import RegisterForm from "../components/RegisterForm";
import { withFormik } from 'formik';
import validation from 'utils/validate'

export default withFormik({
    mapPropsToValues: () => ({
        email: "",
        password: ""
    }),
    validate: values => {
      let errors = {};

      validation({ isAuth: false, values, errors });
      
      return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'RegisterForm', 
  })(RegisterForm);
