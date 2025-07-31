"use client";

// import { motion } from "framer-motion";
import { useState } from "react";
import Window from "../windows/WindowContainer";

export default function DesktopWindow() {
  const [windows, setWindows] = useState({
    about: false,
    work: false,
    play: false,
  });

  const [topWindow, setTopWindow] = useState("");

  const openWindow = (name: keyof typeof windows) => {
    setWindows((prev) => ({ ...prev, [name]: true }));
    setTopWindow(name);
  };

  const closeWindow = (name: keyof typeof windows) =>
    setWindows((prev) => ({ ...prev, [name]: false }));

  return (
    <>
      <div className="absolute top-4 left-4 space-x-2">
        <button onClick={() => openWindow("about")}>about me</button>
        <button onClick={() => openWindow("work")}>work</button>
      </div>

      {windows.about && (
        <Window
          onClose={() => closeWindow("about")}
          onFocus={() => setTopWindow("about")}
          isTop={topWindow === "about"}
        />
      )}
      {windows.work && (
        <Window
          onClose={() => closeWindow("work")}
          onFocus={() => setTopWindow("work")}
          isTop={topWindow === "work"}
        />
      )}
    </>
  );
}
