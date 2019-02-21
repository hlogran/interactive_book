import { Scene } from '../../framework';
import { sea, ball, sun } from './components';
import atlas from '../../assets/001/images/atlas.json';

const KEY = '001';

export default class extends Scene {
  constructor () {
    super(KEY, atlas);
  }

  create () {
    //this.container = this.add.container(this.sys.canvas.width / 2, this.sys.canvas.height / 2);

    //sea
    this.sea = new sea(this, this.sys.canvas.width / 2, this.sys.canvas.height / 2);
    this.sea.displayHeight = this.sys.canvas.height;
    this.sea.scaleX = this.sea.scaleY;
    //this.container.add(this.sea);
    this.sea.play('idle');

    //ball
    this.ball = new ball(this, this.sys.canvas.width / 2, this.sys.canvas.height / 2);
    this.ball.displayHeight = this.sys.canvas.height;
    this.ball.scaleX = this.ball.scaleY;
    //this.container.add(this.ball);
    this.ball.play('idle1');

    this.sun = new sun(this, this.sys.canvas.width / 2, this.sys.canvas.height / 2);
    this.sun.displayHeight = this.sys.canvas.height;
    this.sun.scaleX = this.sun.scaleY;
    //this.container.add(this.sun);
    this.sun.play('idle2');
  }

  update () {
    //this.mushroom.update()
  }
}
