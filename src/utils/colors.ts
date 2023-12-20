export type RGB = [number, number, number];
export const changeBG = ([r1, g1, b1]:RGB, [r2,g2,b2]: RGB, progress: number) => {
  return [
    Math.abs(Math.floor(r1 + (r2 - r1) * progress)),
    Math.abs(Math.floor(g1 + (g2 - g1) * progress)),
    Math.abs(Math.floor(b1 + (b2 - b1) * progress))
  ];
};
