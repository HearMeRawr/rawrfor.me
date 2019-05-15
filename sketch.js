var rainInt = 100;

var rain = [];

var randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
//  return 0;
}

if (window.innerWidth > 900){
  var colors = [
    'red',
    'yellow',
    'limegreen',
    'blue',
    'purple'
  ]
} else {
  var colors = [
    '#F06292',
    '#BA68C8',
    '#7986CB',
    '#64B5F6',
    '#4DB6AC',
    '#FFF176',
    '#FFB74D'
  ]
}

var colorScale = chroma.scale(colors).mode('hsl').domain([0,100]);

function setup() {
  createCanvas(window.innerWidth, window.outerHeight);
  frameRate(60);
}

function draw() {
  clear();
  background("#9164BE");

  fill("#9164BE");
  stroke("#9164BE");

  for(rainInt; rainInt > 0; rainInt--){
    rain.push(new DropRain());
    console.log("Raindrop pushed")
  }
  rain.forEach(function(s) {
    s.drawAndDrop();
  });
}

function DropRain() {
  this.color = 255;
  this.x = randomInt(0,window.innerWidth);
  this.y = randomInt(0, window.outerHeight);
  this.size = randomInt(3, 20);

  this.drawAndDrop = () => {
    this.draw();

    this.drop();
  };

  this.draw = () => {
      stroke(this.color);
      line(this.x, this.y, this.x + this.size, this.y + this.size);
  };

  this.drop = () => {
    if (this.x > -30 && this.y > -30) {
      this.x -= (this.size * 0.5);
      this.y -= (this.size * 0.5);
    } else {
      this.random = randomInt(0, window.outerHeight + window.innerWidth);
      if(this.random < window.outerHeight){
        this.x = window.innerWidth;
        this.y = randomInt(0,window.outerHeight);
      } else {
        this.x = randomInt(0,window.innerWidth);
        this.y = window.outerHeight;
      }
      this.size = randomInt(3, 20);
    }
  };


}