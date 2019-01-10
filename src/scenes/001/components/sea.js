import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y) {
    const frameNames = scene.anims.generateFrameNames(
      'atlas',
      {
        start: 1,
        end: 2,
        zeroPad: 4,
        prefix: 'sea/idle/',
        suffix: '.png'
      }
    );

    scene.anims.create({
      key: 'idle',
      frames: frameNames,
      frameRate: 3,
      repeat: -1
    });

    super(scene, x, y, 'sea/idle/0001.png');

    scene.add.existing(this).play('idle');
  }
}
