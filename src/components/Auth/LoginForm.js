import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import authApi from "../../api/auth";

const LoginForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, user, isLoading } =
    useContext(GlobalContext);

  async function login(email, password) {
    try {
      const response = await authApi.login(email, password);
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async function registration({ firstName, lastName, email, password }) {
    try {
      const response = await authApi.registration({
        firstName,
        lastName,
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  return (
    <div>
      <input
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        type="text"
        placeholder="First name"
      />
      <input
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        type="text"
        placeholder="Last name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="****"
      />
      <button onClick={() => login(email, password)}>Login</button>
      <button
        onClick={() => registration({ firstName, lastName, email, password })}
      >
        SignUp
      </button>
    </div>
  );
};

export default LoginForm;
