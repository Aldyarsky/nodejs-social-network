export default ({ isAuth, values, errors }) => {
    const rules = {
        email: value => {
            if (!value) {
                errors.email = 'Please enter email';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
                errors.email = 'Please enter valid email address';
              }
            },
            password: value => {
                if(!value){
                    errors.password = 'Please provide password';
                }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(value)){
                  errors.password = isAuth ? "Wrong Password!" 
                  : "Password should contain at least 1 uppercase and 1 number";
                }
            }
    };

    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};