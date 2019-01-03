import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y) {
    const mar001Key = scene.key + '_mar001';
    const mar002Key = scene.key + '_mar002';
    scene.bg = new bg(this, 0, 0);
    this.bg = new bg(this, 0, 0);

    this.anims.create({
      key: 'snooze',
      frames: [
        { key: mar001Key },
        { key: mar002Key }
      ],
      frameRate: 2,
      repeat: -1
    });

    super(scene, x, y, mar001Key)

    scene.add.existing(this)
  }

  update () {
    this.angle += 1
  }
}

export default class extends Phaser.GameObjects.Image {
  constructor (scene, x, y, key) {
    const newKey = scene.key + '_' + key;
    super(scene, x, y, newKey);
    scene.add.existing(this);
  }
};

export default class extends Image {
  constructor (scene, x, y) {
    super(scene, x, y, 'bg');
    scene.add.existing(this);
  }
}

export default class extends Image {
  constructor (scene, x, y) {
    super(scene, x, y, 'bg');
    scene.add.existing(this);
  }
}
