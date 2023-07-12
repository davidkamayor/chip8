class Renderer {
  constructor(scale) {
    this.scale = scale;

    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    //system has 2048 pixels
    this.cols = 64;
    this.rows = 32;

    this.display = new Array(this.cols * this.rows);
    this.canvas.width = this.cols * this.scale;
    this.canvas.hieght = this.rows * this.scale;
  }

  setPixel(x, y) {
    //prevents overflow
    if (x > this.cols) {
      x -= this.cols;
    }
    if (x < 0) {
      x += this.cols;
    }
    if (y > this.rows) {
      y -= this.rows;
    }
    if (y < 0) {
      y += this.rows;
    }

    let pixelLoc = x + y * this.cols;
    this.display[pixelLoc] ^= 1;

    //returns true if pixel was erased
    return !this.display[pixelLoc];
  }

  clear() {
    this.display = new Array(this.cols * this.rows);
  }

  render() {
    //clears display every render cycle
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.hieght);

    //loops through each pixel in the grid
    for (let i = 0; i < this.cols * this.rows; i++) {
      //get x position based on i
      let x = (i % this.cols) * this.scale;

      let y = Math.floor(i / this.cols) * this.scale;

      if (this.display[i]) {
        console.log(true);
        console.log("filling pixel" + "i");
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(x, y, this.scale, this.scale);
      }
    }
  }

  testRender() {
    this.setPixel(0, 0);
    this.setPixel(5, 2);
  }
}

export default Renderer;
