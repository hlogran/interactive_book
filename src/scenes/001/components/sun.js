import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y) {
    const frameNames = scene.anims.generateFrameNames(
      'atlas',
      {
        start: 1,
        end: 2,
        zeroPad: 4,
        prefix: 'sun/idle/',
        suffix: '.png'
      }
    );
console.log('frameNames', frameNames)
    scene.anims.create({
      key: 'idle2',
      frames: frameNames,
      frameRate: 2,
      repeat: -1,
      yoyo: true
    });

    super(scene, x, y);

    scene.add.existing(this).play('idle2');
  }
}
