import React from "react";
import Landing from "./Landing/Landing";
import ReqQuote from "./ReqQuote/ReqQuote";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const Transitions = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/req-quote" element={<ReqQuote />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default Transitions;
