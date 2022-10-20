import * as React from "react";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

export default function App() {
  return (
    <div>
      <NavBar />
      <Profile />
      <About />
    </div>
  );
}
