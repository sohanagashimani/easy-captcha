import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { toastConfig } from "../toast.config";
import Captcha from "./Captcha";
import ErrorMessage from "./ErrorMessage";
import InputField from "./InputField";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaProblem, setCaptchaProblem] = useState("");
  const [res, setRes] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = Math.random() < 0.5 ? "+" : "-";
    const result = operator === "+" ? num1 + num2 : num1 - num2;
    setCaptchaProblem(`${num1} ${operator} ${num2} = ?`);
    setRes(result);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) {
      setErrorMsg("Please fill in all fields");
    } else if (parseInt(captchaValue) !== res) {
      setErrorMsg("Incorrect captcha answer");
      setCaptchaValue("");
      generateCaptcha();
    } else {
      setErrorMsg("");
      setUsername("");
      setPassword("");
      setCaptchaValue("");
      generateCaptcha();
      toast.success("Yay! you are not a robot", toastConfig);
    }
  }

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-row items-center justify-center">
      <div className="flex flex-col">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4 ">
          <InputField
            label="Username:"
            id="username"
            value={username}
            onChange={setUsername}
            type="text"
          />
          <InputField
            label="Password:"
            id="password"
            value={password}
            onChange={setPassword}
            type="password"
          />
          <Captcha
            problem={captchaProblem}
            value={captchaValue}
            onChange={setCaptchaValue}
            onClick={generateCaptcha}
          />
          <ErrorMessage message={errorMsg} />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
