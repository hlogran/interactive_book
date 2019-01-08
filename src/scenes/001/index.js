import Phaser from 'phaser';
import { Scene } from '../../ibFramework';
import * as images from './assets/images';
import { bg } from './images';
import { sea } from './animations';
import atlas from './assets/images/atlas.json';

const KEY = '001';

export default class extends Scene {
  constructor () {
    super(KEY, atlas);
  }

  create () {

    this.container = this.add.container(this.sys.canvas.width / 2, this.sys.canvas.height / 2);
    this.sea = new sea(this, 0, 0);
    this.sea.displayHeight = this.sys.canvas.height;
    this.sea.scaleX = this.sea.scaleY;
    this.container.add(this.sea);
    sea.play('idle');

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
