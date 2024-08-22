import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "react-js-loader";
import Button from "../components/Button";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import logo from "../assets/logoAi.png";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "@firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    localStorage.removeItem("selectedItems");

  }, []);
  const handleSignup = async () => {
    setError("");
    if (email.trim() === "" || password.trim() === "") {
      setError("Email and Password are required.");
      return;
    }

    setIsLoading(true);
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setIsLoading(false);
      return;
    }
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully");
      localStorage.setItem('user', JSON.stringify(auth.currentUser))
      navigate("/dashboard");
    } catch (createError) {
      console.error("User creation failed:", createError);
      if (email === auth.currentUser?.email) {
        setError("User already exists. Please login.");
      } else {
        setError("Login Failed. Please check your credentials.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    setError("");
    if (email.trim() === "" || password.trim() === "") {
      setError("Email and Password are required.");
      return;
    }
    setIsLoading(true);
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      localStorage.setItem('user', JSON.stringify(auth.currentUser))
      navigate("/dashboard");
    } catch (signInError) {
      console.error("Login failed:", signInError);
      if (email === auth.currentUser?.email) {
        setError("User not found. Please signup.");
      } else {
        setError("Signup failed. Please check your credentials.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main d-flex align-items-center justify-content-center flex-column">
      <div className="logincontain m-auto">
        <div className="right-side">
          <div className="d-flex align-items-center justify-content-center mb-5">
            <img src={logo} alt="Logo" className="logoIcon"/>
          </div>
          <div className="px-2">
            <div className="w-100">
              <div className="input-container">
                <FaUser className="input-image" />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setError("")
                    setEmail(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className="w-100">
              <div className="input-container">
                <RiLockPasswordFill className="input-image" />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setError("")
                    setPassword(e.target.value)
                  }}
                />
              </div>
            </div>
            {error && (
              <p className="text-danger">{error}</p>
            )}
          </div>
          <div className="d-flex align-items-center justify-content-center mt-4" >
            {isLoading ? (
              <Loader type="bubble-top" bgColor="black" color="black" size={50} />
            ) : (
              <div className="d-flex flex-column align-items-center justify-content-center ">
                <Button title={signUp ? "SIGNUP" : "LOGIN"} onClick={signUp ? handleSignup : handleLogin} />
                {!signUp ? <div onClick={() => {
                  setSignUp(true)
                  setPassword("")
                  setEmail("")
                  setError("")
                }} className="signupText"> SIGNUP</div>
                  : <div onClick={() => setSignUp(false)} className="signupText"> LOGIN</div>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
