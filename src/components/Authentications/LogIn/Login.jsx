import axios from "axios";
import React, { useActionState, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, action, pending] = useActionState(handleFormData, null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //   fetch the login api
  async function fetchLogin(formdata) {
    try {
      const url = "http://localhost:8002/auth/login";
      let response = await axios.post(url, formdata);
      let data = response.data;

      console.log(data);
      localStorage.setItem("token", data.token);
      setMessage("Login successfull");
      setError("");
    } catch (error) {
      setError(error.response.data.message);
      setMessage("");
    }
  }

  //   handle form data
  function handleFormData(preData, formData) {
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    fetchLogin(userData);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  return (
    <section className="my-10 w-[95%] md:w-[50%] mx-auto">
      <div className="text-3xl font-bold text-center font-mono my-5">
        <h1>Login Page </h1>
      </div>
      <div className="mt-10">
        <form action={action}>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium text-xl">
              Enter your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="outline rounded px-3 py-2 mt-3"
            />
          </div>

          <div className="mt-10 flex flex-col">
            <label htmlFor="password" className="text-xl font-medium">
              Enter your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="outline rounded px-3 py-2 mt-3"
            />
          </div>

          <div className="mt-10">
            <input
              type="submit"
              value="Login"
              className="px-3 py-1 bg-blue-950 text-white rounded cursor-pointer hover:bg-blue-900"
              disabled={pending}
            />
          </div>
        </form>

        <div className="text-red-800 text-center text-xl">{error && error}</div>
        <div className="text-green-800 text-center text-xl">
          {message && message}
        </div>
      </div>
    </section>
  );
}

export default Login;
