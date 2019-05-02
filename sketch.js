var rainInt = 300;

var rain = [];

var randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
//  return 0;
}

var colorScale = chroma.scale(['red','yellow','limegreen','blue','purple']).mode('hsl').domain([0,100]);

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);
}

function draw() {
  clear();
  background(255);

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
  this.color = colorScale(randomInt(0,100)).saturate(5).hex();
  this.x = randomInt(0,window.innerWidth);
  this.y = randomInt(0, window.innerHeight);
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
      this.random = randomInt(0, window.innerHeight + window.innerWidth);
      if(this.random < window.innerHeight){
        this.x = window.innerWidth;
        this.y = randomInt(0,window.innerHeight);
      } else {
        this.x = randomInt(0,window.innerWidth);
        this.y = window.innerHeight;
      }
      this.size = randomInt(3, 20);
    }
  };


}