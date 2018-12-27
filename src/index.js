import Phaser from 'phaser';
import { Boot, Game } from 'scenes';

const config = {
  type: Phaser.AUTO,
  parent: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
  scene: [
    Boot,
    Game
  ]
}

const game = new Phaser.Game(config);
