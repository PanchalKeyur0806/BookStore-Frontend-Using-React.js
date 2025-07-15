import React from "react";

function Register() {
  return (
    <section className="my-10 w-[95%] md:w-[60%] mx-auto  rounded-lg shadow-lg">
      <div className="text-3xl font-bold font-serif text-center my-3">
        {" "}
        Register
      </div>
      <div>
        <form action="" method="post">
          {/* name */}
          <div className="my-5 flex flex-col gap-2 mx-5">
            <label htmlFor="name" className="font-medium">
              Enter your name here
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name here"
              className="outline rounded pl-3 py-2 px-1"
            />
          </div>

          {/* email */}
          <div className="my-5 flex flex-col gap-2 mx-5">
            <label htmlFor="email" className="font-medium">
              Enter your email here
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email here"
              className="outline rounded pl-3 py-2 px-1"
            />
          </div>

          {/* password */}
          <div className="my-5 flex flex-col gap-2 mx-5">
            <label htmlFor="password" className="font-medium">
              Enter your password here
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password here"
              className="outline rounded pl-3 py-2 px-1"
            />
          </div>

          {/* date of birth */}
          <div className="my-5 flex flex-col gap-2 mx-5">
            <label htmlFor="dateOfBirth" className="font-medium">
              Enter your dateOfBirth here
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder="Enter your password here"
              className="outline rounded pl-3 py-2 px-1"
            />
          </div>

          {/* Phone number */}
          <div className="my-5 flex flex-col gap-2 mx-5">
            <label htmlFor="phoneNumber" className="font-medium">
              Enter your phoneNumber here
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter your password here"
              className="outline rounded pl-3 py-2 px-1"
            />
          </div>

          {/* Gender */}
          <div className="my-5 mx-5">
            <div className="font-medium">Gender</div>
            <div className="flex gap-3">
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  className=""
                />{" "}
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  className="  "
                />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="others"
                  value="others"
                  className=" "
                />
                <label htmlFor="others">Others</label>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="my-5 mx-5 font-medium text-xl">
            Address Information
          </div>
          <div className="my-5 flex flex-col gap-2 mx-5">
            <label htmlFor="line" className="font-medium">
              Enter your line
            </label>
            <input
              type="text"
              name="line"
              id="line"
              placeholder="Enter your line here"
              className="outline rounded pl-3 py-2 px-1"
            />
          </div>
          <div className="my-5 flex flex-col gap-2 mx-5">
            <label htmlFor="city" className="font-medium">
              Enter your city here
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter your city here"
              className="outline rounded pl-3 py-2 px-1"
            />
          </div>
          <div className="my-5 flex flex-col gap-2 mx-5">
            <label htmlFor="state" className="font-medium">
              Enter your state here
            </label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Enter your state here"
              className="outline rounded pl-3 py-2 px-1"
            />
          </div>
          <div className="my-5 flex flex-col gap-2 mx-5">
            <label htmlFor="country" className="font-medium">
              Enter your country here
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Enter your country here"
              className="outline rounded pl-3 py-2 px-1"
            />
          </div>
          <div className="my-5 flex flex-col gap-2 mx-5">
            <label htmlFor="zipcode" className="font-medium">
              Enter your zipcode here
            </label>
            <input
              type="number"
              name="zipCode"
              id="zipCode"
              placeholder="Enter your zipCode here"
              className="outline rounded pl-3 py-2 px-1"
            />
          </div>
          <div className="my-5 flex flex-col gap-2 mx-5">
            <label htmlFor="street" className="font-medium">
              Enter your street here
            </label>
            <input
              type="text"
              name="street"
              id="street"
              placeholder="Enter your street here"
              className="outline rounded pl-3 py-2 px-1"
            />
          </div>

          <div className="py-3 mt-5 mx-5 text-center cursor-pointer bg-blue-700 text-white hover:bg-blue-600">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
