import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import GoogleLogo from "../Assets/Google.svg";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
    try {
      const response = await axios.post(
        endpoint
        // { email, password }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="grid place-items-center py-5 border-b-[#25262B] border-b">
        <img src={Logo} alt="LOGO" className="h-6" />
      </header>
      <div className="flex-grow flex items-center justify-center">
        <div
          className="border-[#343A40] border p-8 rounded-2xl shadow-lg w-[460px]"
          style={{
            background:
              "linear-gradient(138.97deg, #111214 5.16%, #121212 105.18%)",
          }}
        >
          <h2 className="text-2xl text-white mb-6 text-center">
            {isLogin ? "Sign In" : "Create a new account"}
          </h2>
          <button
            onClick={() => navigate("/google-login")}
            className="w-full py-2 mb-8 rounded-sm border-[#343A40] border flex justify-center items-center gap-2 text-[#CCCCCC] hover:bg-[#110f0f]"
          >
            <img src={GoogleLogo} alt="Google Logo" />
            <span>
              {isLogin ? "Sign In with Google" : "Sign Up with Google"}
            </span>
          </button>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <button
              type="submit"
              className="text-white py-3 text-sm font-semibold rounded-md w-2/5 min-w-24"
              style={{
                background:
                  "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
              }}
            >
              {isLogin ? "Sign In" : "Create an Account"}
            </button>
          </form>
          <p className="mt-4 text-center text-[#909296]">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <Link
              to="/"
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#C1C2C5] hover:underline"
            >
              {isLogin ? "Create one" : "Sign In"}
            </Link>
          </p>
        </div>
      </div>
      <footer className="w-full border-[#25262B] border-t bg-[#121212] grid place-items-center text-[#5C5F66] text-xs py-3">
        © 2023 Reachinbox. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
