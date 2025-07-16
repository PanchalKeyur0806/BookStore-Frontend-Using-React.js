import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AllBooks from "./components/AllBooks/AllBooks.jsx";
import Layout from "./Layout.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Book from "./components/Book/Book.jsx";
import Register from "./components/Authentications/Register/Register.jsx";
import VerifyOtp from "./components/Authentications/VerifyOtp/VerifyOtp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/" element={<Layout />}>
        <Route path="register" element={<Register />} />
        <Route path="verifyOtp" element={<VerifyOtp />} />
        <Route path="books" element={<AllBooks />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="book/:bookid" element={<Book />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
