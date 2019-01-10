import Phaser from 'phaser';
import { scene_001 } from 'scenes';

const getNewGameSize = () => {
  const minRatio = 4 / 3;
  const maxRatio = 16 / 9;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const r = w / h;
  let newHeight = h;
  let newWidth = w;
  if (r < minRatio) {
    newHeight = w / minRatio;
  } else if (r > maxRatio) {
    newWidth = h * maxRatio;
  }

  return {
    w: newWidth,
    h: newHeight
  };
};

const newSize = getNewGameSize();
const config = {
  type: Phaser.AUTO,
  parent: 'container',
  width: newSize.w,
  height: newSize.h,
  scene: [
    scene_001
  ]
};

const game = new Phaser.Game(config);
