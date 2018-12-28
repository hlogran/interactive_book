import Phaser from 'phaser';
import { bg } from '../images';

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'scene_001' })
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


    this.container = this.add.container(this.sys.canvas.width / 2, this.sys.canvas.height / 2);

    this.bg = new Bg(this, 0, 0);
    this.bg.displayHeight = this.sys.canvas.height;
    this.bg.scaleX = this.bg.scaleY;
    this.container.add(this.bg);

    /*
    this.container.add(this.logo);

    this.events.on('resize', (w, h) => {
      this.container.setPosition(w / 2, h / 2);
      this.container.displayHeight = h;

      this.container.scaleX = this.container.scaleY;

      console.log(this.container.getBoundsTransformMatrix());

    }, this);
    */
  }


  update () {
    //this.mushroom.update()
  }
}
