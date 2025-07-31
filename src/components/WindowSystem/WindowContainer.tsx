import Draggable from "react-draggable";
import { useRef } from "react";

// define proper type for properties of window component
type WindowContainerProps = {
    onClose: () => void; // no arg function
    onFocus: () => void; // no arg function
    isTop: boolean;
    children: React.ReactNode;
};

export default function AboutWindow({ onClose, onFocus, isTop, children }: WindowContainerProps) {
  // create a red to the node we want to drag and pass it in as a prop
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} onStart={onFocus}>
      <div
        ref={nodeRef}
        className={`absolute top-20 left-20 border w-[400px] h-[400px] bg-white ${isTop ? "z-50" : "z-40"}`}
      >
        <div className="flex justify-between border-b border-b-black bg-gray-200 w-full px-4 py-2">
            this is a test window
            <button onClick={onClose}>x</button>
        </div>
        <div className="px-4 py-2">{children}</div>
      </div>
    </Draggable>
  );
}
