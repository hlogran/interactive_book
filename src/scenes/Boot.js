import Phaser from 'phaser';
import logo from 'images/logo.png';
import mushroom from 'images/mushroom2.png';
import _001_bg from 'images/001/bg.png';

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'Boot' });
  }

  preload () {
    const progress = this.add.graphics()

    this.load.on('fileprogress', (file, value) => {
      progress.clear()
      progress.fillStyle(0xffffff, 0.75)
      progress.fillRect(700 - (value * 600), 250, value * 600, 100)
    })

    this.load.image('logo', logo);
    this.load.image('mushroom', mushroom);
    this.load.image('bg', bg);
    this.load.image('bg1', bg1);
  }

  create () {
    this.scene.start('Game')
  }
}
