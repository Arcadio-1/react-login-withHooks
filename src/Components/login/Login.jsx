import Input from "../ui/Input";
import { useState, useEffect, useReducer, useContext, useRef } from "react";
import Button from "../ui/Button";
import "./Login.scss";
import AuthContex from "../../store/auth-store";

const emailReduser = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const pssswordReduser = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const authCtx = useContext(AuthContex);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [emailState, emailDispatch] = useReducer(emailReduser, {
    value: "",
    isValid: null,
  });
  const [passwordState, passwordDispatch] = useReducer(pssswordReduser, {
    value: "",
    isValid: null,
  });
  // const [email, setEmail] = useState("");
  // const [emailValid, setEmailValid] = useState();
  // const [pass, setPass] = useState("");
  // const [passwordValid, setPasswordValid] = useState();
  const [formVal, setformVal] = useState(false);

  const emailChangeHandler = (e) => {
    // setEmail(e.target.value);
    // setEmailValid(e.target.value.includes("@"));

    emailDispatch({ type: "USER_INPUT", val: e.target.value });
  };
  const passwordChangeHandler = (e) => {
    // setPass(e.target.value);
    // setPasswordValid(e.target.value.trim().length > 6);
    passwordDispatch({ type: "USER_INPUT", val: e.target.value });
  };

  const emailValidation = () => {
    // setEmailValid(email.includes("@"));
    emailDispatch({ type: "INPUT_BLUR" });
  };
  const passwordValidation = () => {
    // setPasswordValid(pass.trim().length > 6);
    passwordDispatch({ type: "INPUT_BLUR" });
  };
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const valiTime = setTimeout(() => {
      // console.log(emailState.isValid, passwordValid);
      setformVal(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(valiTime);
    };
  }, [emailIsValid, passwordIsValid]);
  // console.log(formVal);
  const submitHandler = (e) => {
    e.preventDefault();
    if (formVal) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };
  return (
    <form onSubmit={submitHandler} className="login-form">
      <Input
        ref={emailInputRef}
        type={"email"}
        id={"email"}
        classes={"login-form-email"}
        onChange={emailChangeHandler}
        onValidation={emailValidation}
        value={emailState.value}
        isValid={emailState.isValid}
        label={"E-mail"}
      />
      <Input
        ref={passwordInputRef}
        type={"password"}
        id={"password"}
        classes={"login-form-password"}
        onChange={passwordChangeHandler}
        onValidation={passwordValidation}
        value={passwordState.value}
        isValid={passwordState.isValid}
        label={"Password"}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
export default Login;
