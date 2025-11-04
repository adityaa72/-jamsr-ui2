"use client";
import { AnimatePresence, motion } from "motion/react";

type Props = {
  isSelected: boolean;
  className?: string;
};

export const AnimatedTickIcon = (props: Props) => {
  const { isSelected, className } = props;
  return (
    <motion.svg
      className={className}
      fill="none"
      height={20}
      viewBox="0 0 24 24"
      width={20}
      xmlns="http://www.w3.org/2000/svg"
    >
      <AnimatePresence initial={false}>
        {isSelected ? (
          <motion.path
            animate={{ pathLength: 1 }}
            d="M5 14L8.5 17.5L19 6.5"
            exit={{ pathLength: 0 }}
            initial={{ pathLength: 0 }}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          />
        ) : null}
      </AnimatePresence>
    </motion.svg>
  );
};
