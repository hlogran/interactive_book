import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y) {
    const frameNames = scene.anims.generateFrameNames(
      'atlas',
      {
        start: 1,
        end: 4,
        zeroPad: 4,
        prefix: 'ball/idle/',
        suffix: '.png'
      }
    );

    scene.anims.create({
      key: 'idle1',
      frames: frameNames,
      frameRate: 5,
      repeat: -1,
      yoyo: true
    });

    super(scene, x, y/*, 'ball/idle/0001.png'*/);

    scene.add.existing(this).play('idle1');
  }
}
