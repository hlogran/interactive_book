import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Image {
  constructor (scene, x, y) {
    super(scene, x, y, 'bg')
    scene.add.existing(this);
  }
}
