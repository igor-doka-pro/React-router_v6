import React from "react";
import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

export const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer>2022</footer>
    </>
  );
};
