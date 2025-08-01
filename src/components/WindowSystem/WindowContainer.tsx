import Draggable from "react-draggable";
import { useRef } from "react";
import { motion } from "framer-motion";

// define proper type for properties of window component
type WindowContainerProps = {
  onClose: () => void; // no arg function
  onFocus: () => void; // no arg function
  zIndex: number;
  children: React.ReactNode;
};

export default function AboutWindow({
  onClose,
  onFocus,
  zIndex,
  children,
}: WindowContainerProps) {
  // create a red to the node we want to drag and pass it in as a prop
  const nodeRef = useRef(null);

  return (
    // <Draggable nodeRef={nodeRef} onStart={onFocus}>
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      onMouseDown={onFocus}
      style={{ zIndex }}
      className={`absolute top-1/4 left-1/4 border bg-white w-fit min-w-[300px] max-h-[80vh] overflow-auto`}
    >
      {/* <div
        ref={nodeRef}
        className={`absolute top-20 left-20 border w-[400px] h-[400px] bg-white ${
          isTop ? "z-50" : "z-40"
        }`}
      > */}
      <div className="flex justify-between border-b border-b-black bg-gray-200 w-full px-4 py-2">
        this is a test window
        <button onClick={onClose}>x</button>
      </div>
      <div className="px-4 py-2">{children}</div>
      {/* </div> */}
    </motion.div>
    // </Draggable>
  );
}
