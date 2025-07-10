// Sister Mystical’s Sparkle Power
let sparkleSize = 10;

function setup() {
  createCanvas(600, 600);
  background(10, 10, 30); // deep magical background
}

function draw() {
  // Faint background blur to create motion trail
  fill(10, 10, 30, 20);
  

  // Draw sparkle at mouse location
  fill(200, 255, 200, 150);
  noStroke();
  ellipse(mouseX + random(-3, 3), mouseY + random(-3, 3), sparkleSize, sparkleSize);
}

// Optional: Change sparkle size with a click
function mousePressed() {
  sparkleSize = random(5, 20); // custom variable in action
}
