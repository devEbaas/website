
export const SIDEBAR_VARIANTS = {
  closed: {
    x: -250,
    height: "100%",
    opacity: 1,
  },
  open: {
    x: 0,
    height: "100%",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    x: -250,
    height: "100%",
    opacity: 1,
  },
};

export const LIST_VARIANTS = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

export const ITEM_VARIANTS = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
