// manages window state
"use client";

import { useState } from "react";
import Window from "./WindowContainer";
import AboutWindow from "./WindowContents/AboutWindow";
import WorkWindow from "./WindowContents/WorkWindow";
import PlayWindow from "./WindowContents/PlayWindow";
import Icon from "@/public/file.svg";
import Image from "next/image";

export default function DesktopWindow() {
  const [windows, setWindows] = useState({
    about: false,
    work: false,
    play: false,
  });

  // track z indices per window
  const [zIndices, setZIndices] = useState<Record<string, number>>({});
  const [zCounter, setZCounter] = useState(1);

  // when a window focuses, update that window's z index
  const bringToFront = (name: string) => {
    setZIndices((prev) => ({
      ...prev,
      [name]: zCounter + 1,
    }));
    setZCounter((prev) => prev + 1);
  };

  const openWindow = (name: keyof typeof windows) => {
    setWindows((prev) => ({ ...prev, [name]: true }));
  };

  const closeWindow = (name: keyof typeof windows) =>
    setWindows((prev) => ({ ...prev, [name]: false }));

  return (
    <>
      <div className="absolute top-4 left-6 grid gap-4">
        <button
          onClick={() => openWindow("about")}
          className="flex flex-col items-center gap-2 hover:bg-gray-200 p-2"
        >
          <Image src={Icon} alt="temporary icon" width={80} />
          about me
        </button>
        <button
          onClick={() => openWindow("work")}
          className="flex flex-col items-center gap-2 hover:bg-gray-200 p-2"
        >
          <Image src={Icon} alt="temporary icon" width={80} />
          work
        </button>
        <button
          onClick={() => openWindow("play")}
          className="flex flex-col items-center gap-2 hover:bg-gray-200 p-2"
        >
          <Image src={Icon} alt="temporary icon" width={80} />
          play!
        </button>
      </div>

      {windows.about && (
        <Window
          onClose={() => closeWindow("about")}
          zIndex={zIndices["about"] ?? 1}
          onFocus={() => bringToFront("about")}
        >
          <AboutWindow />
        </Window>
      )}
      {windows.work && (
        <Window
          onClose={() => closeWindow("work")}
          zIndex={zIndices["work"] ?? 1}
          onFocus={() => bringToFront("work")}
        >
          <WorkWindow />
        </Window>
      )}
      {windows.play && (
        <Window
          onClose={() => closeWindow("play")}
          zIndex={zIndices["play"] ?? 1}
          onFocus={() => bringToFront("play")}
        >
          <PlayWindow />
        </Window>
      )}
    </>
  );
}
