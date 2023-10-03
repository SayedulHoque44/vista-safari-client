export const locationCardAnime = {
  intial: {
    y: '-100%',
  },
  enter: (index: number) => ({
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.25, 1, 0.5, 1],
      delay: index * 0.075,
    },
  }),
};
