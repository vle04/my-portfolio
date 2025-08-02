// manages window state
"use client";

import { useState, useRef } from "react";
import Window from "./WindowContainer";
import AboutWindow from "./WindowContents/AboutWindow";
import WorkWindow from "./WindowContents/WorkWindow";
import PlayWindow from "./WindowContents/PlayWindow";
import Folder from "@/public/icons/folder.svg";
import Image from "next/image";

export default function DesktopWindow() {
  const [windows, setWindows] = useState({
    about: false,
    work: false,
    play: false,
  });

  // track z indices per window
  const [zIndices, setZIndices] = useState<Record<string, number>>({});
  const zCounter = useRef(1);

  // when a window focuses, update that window's z index
  const bringToFront = (name: string) => {
    // look at current z indices and find current max
    setZIndices((prev) => {
      return {
        ...prev,
        [name]: zCounter.current++,
      };
    });
  };

  const openWindow = (name: string) => {
    setWindows((prev) => ({ ...prev, [name]: true }));
    bringToFront(name);
  };

  const closeWindow = (name: string) => {
    setWindows((prev) => ({ ...prev, [name]: false }));
  };

  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-screen h-screen" ref={constraintsRef}>
      <div className="absolute top-4 left-6 grid gap-4">
        <button
          onClick={() => openWindow("about")}
          className="flex flex-col items-center gap-2 hover:bg-gray-200 p-3 rounded"
        >
          <Image src={Folder} alt="temporary icon" width={80} />
          about me
        </button>
        <button
          onClick={() => openWindow("work")}
          className="flex flex-col items-center gap-2 hover:bg-gray-200 p-3 rounded"
        >
          <Image src={Folder} alt="temporary icon" width={80} />
          work
        </button>
        <button
          onClick={() => openWindow("play")}
          className="flex flex-col items-center gap-2 hover:bg-gray-200 p-3 rounded"
        >
          <Image src={Folder} alt="temporary icon" width={80} />
          fun stuff
        </button>
      </div>

      {windows.about && (
        <Window
          onClose={() => closeWindow("about")}
          zIndex={zIndices["about"] ?? 1}
          onFocus={() => bringToFront("about")}
          constraint={constraintsRef}
        >
          <AboutWindow />
        </Window>
      )}
      {windows.work && (
        <Window
          onClose={() => closeWindow("work")}
          zIndex={zIndices["work"] ?? 1}
          onFocus={() => bringToFront("work")}
          constraint={constraintsRef}
        >
          <WorkWindow />
        </Window>
      )}
      {windows.play && (
        <Window
          onClose={() => closeWindow("play")}
          zIndex={zIndices["play"] ?? 1}
          onFocus={() => bringToFront("play")}
          constraint={constraintsRef}
        >
          <PlayWindow />
        </Window>
      )}
    </div>
  );
}
