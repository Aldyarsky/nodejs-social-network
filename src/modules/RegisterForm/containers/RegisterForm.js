import RegisterForm from "../components/RegisterForm";
import { withFormik } from 'formik';

export default withFormik({
    mapPropsToValues: () => ({}),
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Please enter valid email';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          values.email
        )
      ) {
        errors.email = 'Invalid email address';
      }
      if(!values.password){
          errors.password = 'Please provide password';
      }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(values.password)){
        errors.password = 'Password should contain at least 1 uppercase and number'
      }
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
