import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Image {
  constructor (scene, x, y, key) {
    const newKey = scene.key + '_' + key;
    super(scene, x, y, newKey);
    this.key = newKey;
    scene.add.existing(this);
  }
};
