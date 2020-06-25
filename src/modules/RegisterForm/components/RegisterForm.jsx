import React from "react";
import { Form, Input, Icon } from "antd";
import { Link, Route } from "react-router-dom";

import { Button, Block } from "components";
import { validateField } from "utils/helpers";

const success= "";

const RegisterForm = props =>{
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
      <h2>Регистрация</h2>
      <p>Для входа в чат,вам надо Зарегистрироваться</p>
    </div>
    <Block>
      {!success ? (
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
          help = {!touched.email ? '' : 
          errors.email ? 
          errors.email
          : 
          ""}
          validateStatus= { validateField("email", touched, errors) } hasFeedback>
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
          <Form.Item validateStatus= { success } hasFeedback>
            <Input
            
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              
              size="large"
              placeholder="Ваше имя"
              
            />
          </Form.Item>
          <Form.Item 
          help = {!touched.password ? '' : 
          errors.password ? 
          errors.password
          : 
          "" }
          validateStatus= { validateField("password", touched, errors) } hasFeedback>
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
          <Form.Item validateStatus= { validateField("password", touched, errors) } hasFeedback>
            <Input
              prefix={
                <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              size="large"
              type="password"
              placeholder="Повторите пароль"
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={ handleSubmit } type="primary" size="large">
              Зарегистрироваться
            </Button>
          </Form.Item>

          <Link className="auth__register-link" to="/login">
            Войти в аккаунт
          </Link>
        </Form>
      ) : (
        <div className="auth__success-block">
          <div>
            <Icon type="info-circle" theme="twoTone" />
          </div>
          <h2>Подтвердите свой акканут</h2>
          <p>
            На вашу почту отправлено письмо с ссылкой на подтверждение
            аккаунта
          </p>
        </div>
      )}
    </Block>
  </div>
  )
}

export default RegisterForm;
