import React from "react";

function ResponsiveMenu({ open }) {
  return (
    <div>
      {open && (
        <div>
          <ul className="w-[80%] mx-auto flex flex-col gap-8 items-center justify-center bg-blue-800 text-white rounded-md py-4">
            <li>Home</li>
            <li>Books</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResponsiveMenu;
