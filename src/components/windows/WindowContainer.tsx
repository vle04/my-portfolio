import Draggable from "react-draggable";
import { useRef } from "react";

export default function AboutWindow({ onClose, onFocus, isTop }: any) {
  // create a red to the node we want to drag and pass it in as a prop
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} onStart={onFocus}>
      <div
        ref={nodeRef}
        className={`border w-[400px] h-[400px] p-4 bg-red-100 ${isTop ? "z-50" : "z-40"}`}
      >
        this is a test window
      </div>
    </Draggable>
  );
}
