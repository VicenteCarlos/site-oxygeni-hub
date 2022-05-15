const btVariant = {
  visible: {
    x: 110,
    y: 0,
    marginRight: 10,
    transition: { type: "spring", stiffness: 30 },
  },
  initial: {
    y: -100,
  },
  exit: {
    opacity: 0,
  },
};

export { btVariant }
