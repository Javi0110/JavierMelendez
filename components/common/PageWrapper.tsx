"use client";

import { classNames } from "@/utils/strings";
import { PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

type PageWrapperProps = PropsWithChildren & {
  className?: string;
};

const slideIn = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 0,
  },
  exit: {
    scaleY: 1,
  },
  transition: {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  },
};
const slideOut = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: 0,
  },
  exit: {
    scaleY: 0,
  },
  transition: {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  },
};

export const PageWrapper = ({ children, className }: PageWrapperProps) => {
  const router = useRouter();

  const slidesClasses = "absolute top-0 left-0 w-full h-screen bg-black";

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <motion.div
          id="slide-in"
          {...slideIn}
          className={classNames(slidesClasses, "origin-bottom")}
        />
        <motion.div
          id="slide-out"
          {...slideOut}
          className={classNames(slidesClasses, "origin-top")}
        />
        <article
          className={classNames(
            "min-h-screen pt-8",
            className ? className : ""
          )}
        >
          {children}
        </article>
      </motion.div>
    </AnimatePresence>
  );
};
