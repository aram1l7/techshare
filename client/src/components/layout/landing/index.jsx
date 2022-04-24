import React from "react";
import illustration from "assets/images/illustration.png";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <section className="landing flex flex-col lg:flex-row items-center justify-center lg:justify-evenly pl-10">
        <div className="content">
          <div className="flex justify-center items-center">
            <div>
              <h1 className="drop-shadow-md font-bold text-5xl">
                Tech Share
              </h1>
              <p className="mt-5 text-xl font-medium">
                Tech Share is a social platform for developers <br /> where
                people share posts connect with <br /> each other and share with
                their experience.
              </p>
              <p className="text-xl font-medium">
                Sign up or create an accound if you don't have a one.
              </p>

              <div className="mt-10">
                <Link
                  to="/register"
                  className="bg-teal-300 shadow-sm text-white	py-3 font-semibold px-6 rounded cursor-pointer"
                >
                  Join now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <img
            className="w-full h-full object-cover"
            src={illustration}
          />
        </div>
      </section>
    </>
  );
}

export default Landing;
