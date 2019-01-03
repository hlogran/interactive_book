import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y) {
    const mar001Key = scene.key + '_mar001';
    const mar002Key = scene.key + '_mar002';

    scene.anims.create({
      key: 'wave',
      frames: [
        { key: mar001Key },
        { key: mar002Key }
      ],
      frameRate: 3,
      repeat: -1
    });

    super(scene, x, y, mar001Key)

    scene.add.existing(this).play('wave');
  }
}
