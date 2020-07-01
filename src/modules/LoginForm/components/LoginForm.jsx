import React from "react";
import { Form, Input, Checkbox, Icon } from "antd";
import { Link } from "react-router-dom";

import { Button, Block } from "components";
import { validateField } from "utils/helpers";

const LoginForm = props =>{
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting 
  } = props;
  return(
    <div>
     <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста,войдите в свой аккаунт</p>
      </div>
    <Block>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
          help = {!touched.email ? '' : 
          errors.email ? 
          errors.email
          : 
          ""}
          validateStatus={ validateField("email", touched, errors) } hasFeedback>
            <Input
              id="email"
              prefix={
                <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              size="large"
              placeholder="E-Mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item 
          help = {!touched.password ? '' : 
          errors.password ? 
          errors.password
          : 
          "" }
          validateStatus= { validateField("email", touched, errors) } hasFeedback>
            <Input
            id="password"
              prefix={
                <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              size="large"
              type="password"
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
          <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              type="primary"
              size="large"
            >
                Войти в аккаунт
              </Button>
            </Form.Item>

            <Link className="auth__register-link" to="/register">
              Зарегистрироваться
            </Link>
        </Form>

    </Block>
  </div>
  )
}

export default LoginForm;
