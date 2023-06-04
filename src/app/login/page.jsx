"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { loginAction } from "@/store/auth-actions";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");

    if (userDetails) {
      router.replace("/user");
    }
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginAction({ name, email }));
    router.replace("/user");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
