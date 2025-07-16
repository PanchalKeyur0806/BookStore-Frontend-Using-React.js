import axios from "axios";
import React, { useActionState, useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyOtp() {
  const [data, action, pending] = useActionState(handleOtp, null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const { data, error } = useFetchItem("http://localhost:8002/auth/verifyOtp");
  // console.log(data);

  // fetch the otp
  async function fetchOtp(formdata) {
    try {
      const url = "http://localhost:8002/auth/verifyOtp";
      let response = await axios.post(url, formdata);
      let data = response.data;

      localStorage.setItem("token", data.token);
      setMessage(data.message);
    } catch (error) {
      setError(error.message);
    }
  }

  // handle the submit
  function handleOtp(preData, formData) {
    const userData = {
      otp: parseInt(formData.get("otp")),
      email: formData.get("email"),
    };

    fetchOtp(userData);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <section className="my-10 w-[95%] md:w-[50%] mx-auto">
      <div className="text-2xl text-center font-bold font-serif my-5">
        <h1>VerifyOtp</h1>
      </div>
      <div>
        <form action={action}>
          <div className="flex flex-col my-5">
            <label htmlFor="otp" className="mt-5 font-medium text-xl">
              Enter your otp
            </label>
            <input
              type="number"
              name="otp"
              id="otp"
              className="outline rounded mt-3 px-3 py-2"
              onWheel={(e) => e.target.blur()}
            />
          </div>
          <div className="flex flex-col my-5">
            <label htmlFor="email" className="mt-5 font-medium text-xl">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="outline rounded mt-3 px-3 py-2"
            />
          </div>

          <div className="mt-10">
            <input
              type="submit"
              value="Enter Otp"
              className="rounded px-3 py-1 bg-blue-950 text-white hover:bg-blue-900 cursor-pointer"
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

export default VerifyOtp;
