"use client";
import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileItems from "./MobileItems";

interface MobileSideBarProps {
  isOpen: boolean;
  setOpen: (val: boolean) => void;
}

const MobileSideBar: FC<MobileSideBarProps> = ({ isOpen, setOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-[999]"
            onClick={() => setOpen(!isOpen)}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed h-screen w-[20rem] bg-[#252525] z-50 border-r border-gray-200"
          >
            <MobileItems />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSideBar;
