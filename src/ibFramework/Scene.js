import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor (key) {
    super({ key: key });
    this.key = key;
  }

  loadImage (key, path) {
    const newKey = this.key + '_' + key;
    console.log(newKey);
    this.sys.load.image(newKey, path);
  }
};
