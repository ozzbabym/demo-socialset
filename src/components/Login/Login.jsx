import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", [required], "email", Input)}
      {/* <Field
          placeholder={"Email"}
          validate={[required]}
          name={"email"}
          component={Input}
        /> */}
      {createField("Password", [required], "password", Input, {
        type: "password",
      })}

      {/* <Field
          placeholder={"Password"}
          validate={[required]}
          name={"password"}
          component={Input}
          type={"password"}
        /> */}
      {createField(
        null,
        null,
        "rememberMe",
        Input,
        { type: "Checkbox" },
        "remember me"
      )}
      {/* <div>
        <Field type={"Checkbox"} name={"remeberMe"} component={Input} />{" "}
        remember me
      </div> */}
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
