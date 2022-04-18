import React from "react";
import Navbar from "../navbar";

function Landing() {
  return (
    <>
      <Navbar />
      <section className="landing flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="text-center text-white">
            <h1 className="drop-shadow-md font-bold text-5xl">
              Developer Connector
            </h1>
            <p className="mt-5 text-xl font-medium">
              DevConnect is a social platform for developers <br /> where people
              share posts connect with <br /> each other and share with their
              experience.
            </p>
            <p className="text-xl font-medium">
              Sign up or create an accound if you don't have a one.
            </p>

            <div className="flex gap-2 justify-center mt-5">
              <a
                href="register.html"
                className="bg-green-500 py-2 px-6 rounded cursor-pointer"
              >
                Sign Up
              </a>
              <a
                href="login.html"
                className="bg-cyan-400 py-2 px-6 rounded cursor-pointer"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
