import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor (key, atlas) {
    super({ key: key });
    this.key = key;
    this.atlas = atlas;
  }

  preload () {
    const progress = this.add.graphics();

    this.load.on('fileprogress', (file, value) => {
      progress.clear();
      progress.fillStyle(0xffffff, 0.75);
      progress.fillRect(700 - (value * 600), 250, value * 600, 100);
    });
    /*
    Object.keys(this.images).forEach((key, index) => {
      this.loadImage(key, this.images[key]);
      console.log(key);
    });
    */
    console.log('atlas', this.atlas);
    this.load.multiatlas('atlas', this.atlas);
  }

  loadImage (key, path) {
    const newKey = this.key + '_' + key;
    console.log(newKey);
    this.sys.load.image(newKey, path);
  }
};
