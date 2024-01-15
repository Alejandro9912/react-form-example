import { useState } from "react";
import "./App.css";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [formValidation, setFormValidation] = useState({
    email: undefined,
    password: undefined,
    passwordCheck: undefined,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Send data to register");
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;

    setFormValidation({
      ...formValidation,
      email: value.length === 0 ? "Email is required" : "",
    });

    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;

    setFormValidation({
      ...formValidation,
      password: value.length < 5 ? "Password is too short" : "",
    });

    setPassword(value);
  };

  const handlePasswordCheckChange = (event) => {
    const value = event.target.value;

    setFormValidation({
      ...formValidation,
      passwordCheck: value !== password ? "Password do not match" : "",
    });
    setPasswordCheck(value);
  };

  const isFormValid = Object.keys(formValidation).every(
    (key) => formValidation[key] === ""
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            value={email}
            type="email"
            onChange={handleEmailChange}
            id="email"
            placeholder="Email"
          />
          {formValidation.email && (
            <span style={{ color: "red" }}>{formValidation.email}</span>
          )}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            value={password}
            type="password"
            onChange={handlePasswordChange}
            id="pass"
            placeholder="Password"
          />
          {formValidation.password && (
            <span style={{ color: "red" }}>{formValidation.password}</span>
          )}
        </div>
        <div>
          <label htmlFor="">Password Check</label>
          <input
            value={passwordCheck}
            type="password"
            onChange={handlePasswordCheckChange}
            id="passcheck"
            placeholder="Password Check"
          />
          {formValidation.passwordCheck && (
            <span style={{ color: "red" }}>{formValidation.passwordCheck}</span>
          )}
        </div>
        <button disabled={!isFormValid}>Sing Up</button>
      </form>
    </>
  );
}

export default App;
