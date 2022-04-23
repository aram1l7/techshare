import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import register from "assets/images/register.svg";
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
    if (name.length >= 3 && password.length >= 3) {
      setIsButtonDisabled(false);
    }
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen px-8 pt-10">
      <div className="flex gap-10 flex-col-reverse md:flex-row">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="form-container mt-10 w-full flex flex-col justify-between"
        >
          <h2 className="mt-5 font-semibold ml-2 text-lg">Create an account</h2>
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
              className="submit px-4 py-2 rounded-lg
              cursor-pointer
              bg-green-500 text-white shadow disabled:opacity-50"
            />
          </div>
          <p className="mt-4">
            Already have an account ?{" "}
            <Link className="underline text-sky-500" to="/login">
              Login
            </Link>
          </p>
        </form>
        <div className="max-w-sm">
          <img className="w-full h-full object-contain" src={register} />
        </div>
      </div>
    </div>
  );
}

export default Register;
