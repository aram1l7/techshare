import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = formData;
  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  useEffect(() => {
    if (name.length > 6 && password.length > 6 && confirmPassword.length > 6) {
      setIsButtonDisabled(false);
    }
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      return;
    }
    
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h2 className="text-2xl mt-5 font-semibold">Sign Up</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="form-container mt-10 w-1/2"
      >
        <div className="form-input">
          <input
            className="w-full border-0 outline-none border-b-2 border-solid p-3"
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={(e) => onFormChange(e)}
          />
        </div>
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
        <div className="form-input flex items-center border-b-2 border-solid">
          <input
            className="w-full border-0 outline-none  p-3"
            type={`${isConfirmOpen ? "text" : "password"}`}
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password"
            onChange={(e) => onFormChange(e)}
          />
          <FontAwesomeIcon
            className="cursor-pointer"
            onClick={() => setIsConfirmOpen(!isConfirmOpen)}
            icon={isConfirmOpen ? faEye : faEyeSlash}
          />
        </div>
        <div className="mt-5">
          <input
            type="submit"
            value="Create account"
            disabled={isButtonDisabled}
            className="submit px-4 py-2 rounded-lg bg-green-500 text-white shadow disabled:opacity-50"
          />
        </div>
        <p className="mt-4">
          Already have an account ?{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
