import { useRef, useContext } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../uteis/use-follow-pointer";
import { PointerContext } from "@/context/SpringContext";
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Spring() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const { pointer } = useContext(PointerContext);

  return (
    <motion.div
      ref={ref}
      className={`hidden lg:flex w-8 h-8 rounded-full border border-emerald-500 ease-in-out fixed z-[1000] pointer-events-none justify-center items-center ${
        pointer.length > 0
          ? "drop-shadow-[0px_0px_8px_rgba(48,171,176)] w-12 h-12"
          : ""
      }`}
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 1000,
        restDelta: 0.001,
      }}
    >
      {pointer === "left" || pointer === "right" ? (
        pointer === "left" ? (
          <FaChevronLeft className="text-emerald-500 text-3xl ease-in-out duration-300" />
        ) : (
          <FaChevronRight className="text-emerald-500 text-3xl ease-in-out duration-300" />
        )
      ) : (
        <div
          className={`w-1 h-1 bg-emerald-500 rounded-full ease-in-out duration-300 ${pointer}`}
        ></div>
      )}
    </motion.div>
  );
}
