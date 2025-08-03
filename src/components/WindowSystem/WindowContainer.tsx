import { motion } from "framer-motion";

// define proper type for properties of window component
type WindowContainerProps = {
  onClose: () => void; // no arg function
  onFocus: () => void; // no arg function
  zIndex: number;
  children: React.ReactNode;
  constraint: React.RefObject<HTMLDivElement | null>;
};

export default function WindowContainer({
  onClose,
  onFocus,
  zIndex,
  children,
  constraint,
}: WindowContainerProps) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={constraint}
      onMouseDown={onFocus}
      style={{ zIndex }}
      className="absolute top-1/4 left-1/4 border-[6px] bg-white w-fit min-w-[300px] max-h-[80vh] overflow-auto rounded solid-shadow"
      animate={{ scale: [0, 1] }}
      exit={{ scale:[1, 0] }}
      // transition={{ type: "spring", bounce: 0.50 }}
    >
      <div
        className="flex justify-between border-b border-b-black border-b-[6px] bg-gray-200 w-full px-4 py-2"
        style={{ borderBottomColor: "var(--color-border)" }}
      >
        this is a test window
        <motion.button whileHover={{ scale: 1.2 }} onClick={onClose}>
          &#91; x &#93;
        </motion.button>
      </div>
      <div className="p-8">{children}</div>
    </motion.div>
  );
}
