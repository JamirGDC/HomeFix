import React from 'react';
import Sidebar from "./sidebar/sidebar";
import NavBar from "./sidebar/navbar";

function RootLayout({ children }) {
  return (
    <div className="flex flex-column">
      <div>
      <NavBar />
      </div>
      <div className="flex">
      <Sidebar />
      <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
      </div>
    </div>
  );
}

export default RootLayout;