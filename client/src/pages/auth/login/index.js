import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import login from "assets/images/login.svg";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen px-8 pt-10 sm:pt-0">
      <div className="flex flex-col-reverse gap-10 sm:flex-row">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="form-container mt-10 w-full flex flex-col justify-between"
        >
          <h2 className="text-lg ml-2 mt-5 font-semibold">Sign In</h2>
          <div className="form-input">
            <input
              className="w-full border-0 outline-none border-b-2 border-solid p-3"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => onFormChange(e)}
            />
          </div>
          <div className="form-input flex items-center border-b-2 border-solid">
            <input
              className="w-full border-0 outline-none  p-3"
              type={`${isPasswordOpen ? "text" : "password"}`}
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => onFormChange(e)}
            />
            <FontAwesomeIcon
              className="cursor-pointer"
              onClick={() => setIsPasswordOpen(!isPasswordOpen)}
              icon={isPasswordOpen ? faEye : faEyeSlash}
            />
          </div>
          <div className="mt-5">
            <input
              type="submit"
              value="Log in"
              className="submit px-4 py-2 rounded-lg
              cursor-pointer
              bg-green text-white shadow disabled:opacity-50"
            />
          </div>
          <p className="mt-4">
            Don't have an account ?{" "}
            <Link className="underline text-sky-500" to="/register">
              Sign Up
            </Link>
          </p>
        </form>
        <div className="max-w-sm">
          <img className="w-full h-full object-contain" src={login} />
        </div>
      </div>
    </div>
  );
}

export default Login;
