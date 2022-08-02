import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const Loginpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const user = evt.target.username.value;

    signin(user, () => navigate(fromPage, {replace: true}))
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="username"/>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
