// manages window state
"use client";

import { useState, useRef } from "react";
import Window from "./WindowContainer";
import AboutWindow from "./WindowContents/AboutWindow";
import WorkWindow from "./WindowContents/WorkWindow";
import PlayWindow from "./WindowContents/PlayWindow";
import Folder from "@/public/icons/folder.png";
import About from "@/public/icons/vina-explorer.png";
import Mail from "@/public/icons/mail.png";
import Image from "next/image";
import { AnimatePresence } from "motion/react";

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
    <section className="relative w-screen h-screen" ref={constraintsRef}>
      <div className="flex flex-col m-6 gap-4">
        <button
          onClick={() => openWindow("about")}
          className="flex flex-col items-center gap-2 p-3 w-fit"
        >
          <Image
            src={About}
            alt="temporary icon"
            // width={300}
            className="w-25 h-25 transition-transform duration-200 ease-in-out transform hover:-translate-y-1 hover:-translate-x-1 hover:drop-shadow-[10px_10px_0_rgba(0,0,0,0.5)]"
          />
          about me
        </button>

        <button
          onClick={() => openWindow("work")}
          className="flex flex-col items-center gap-2 p-3 w-fit"
        >
          <Image
            src={Folder}
            alt="temporary icon"
            // width={300}
            className="w-25 h-25 transition-transform duration-200 ease-in-out transform hover:-translate-y-1 hover:-translate-x-1 hover:drop-shadow-[10px_10px_0_rgba(0,0,0,0.5)]"
          />
          work
        </button>

        <button
          onClick={() => openWindow("play")}
          className="flex flex-col items-center gap-2 p-3 w-fit"
        >
          <Image
            src={Mail}
            alt="temporary icon"
            // width={300}
            className="w-25 h-25 transition-transform duration-200 ease-in-out transform hover:-translate-y-1 hover:-translate-x-1 hover:drop-shadow-[10px_10px_0_rgba(0,0,0,0.5)]"
          />
          contact
        </button>
      </div>

      <AnimatePresence>
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
      </AnimatePresence>
      <AnimatePresence>
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
      </AnimatePresence>
      <AnimatePresence>
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
      </AnimatePresence>
    </section>
  );
}
