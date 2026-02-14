let currentIndex = 0;
let paintingGraphics = null;
let needsRedraw = true;
let touchStartX = 0;
let touchStartY = 0;
let isMobile = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Georgia");
  pixelDensity(1);
  isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  noLoop();
  if (paintings.length > 0) {
    renderCurrentPainting();
  }
  redraw();
}

function draw() {
  background(25, 25, 30);
  if (paintings.length === 0) return;

  if (needsRedraw) {
    renderCurrentPainting();
    needsRedraw = false;
  }

  if (paintingGraphics) {
    let maxW = width - 60;
    let maxH = height - 120;
    let s = min(maxW / paintingGraphics.width, maxH / paintingGraphics.height);
    let pw = paintingGraphics.width * s;
    let ph = paintingGraphics.height * s;
    let px = (width - pw) / 2;
    let py = (height - ph - 60) / 2;

    // Frame shadow
    noStroke();
    fill(0, 0, 0, 60);
    rect(px + 8, py + 8, pw, ph);

    // Frame border
    fill(160, 140, 100);
    rect(px - 6, py - 6, pw + 12, ph + 12);
    fill(120, 100, 70);
    rect(px - 3, py - 3, pw + 6, ph + 6);

    // Painting
    image(paintingGraphics, px, py, pw, ph);

    // Title
    let p = paintings[currentIndex];
    fill(255, 255, 255, 220);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(min(18, width / 45));
    text(
      p.artist + " \u2014 " + p.title + " (" + p.year + ")",
      width / 2,
      py + ph + 16,
    );

    // Navigation hint
    fill(255, 255, 255, 100);
    textSize(min(13, width / 60));
    let hint = isMobile
      ? "Swipe or Tap \u2190 \u2192  |  " +
        (currentIndex + 1) +
        " / " +
        paintings.length
      : "\u2190 \u2192 Navigate  |  S Save  |  " +
        (currentIndex + 1) +
        " / " +
        paintings.length;
    text(hint, width / 2, py + ph + 42);
  }
}

function renderCurrentPainting() {
  let p = paintings[currentIndex];
  let maxW = width - 60;
  let maxH = height - 120;

  let pw, ph;
  if (p.aspectRatio >= maxW / maxH) {
    pw = maxW;
    ph = pw / p.aspectRatio;
  } else {
    ph = maxH;
    pw = ph * p.aspectRatio;
  }

  pw = max(200, floor(pw));
  ph = max(200, floor(ph));

  if (paintingGraphics) {
    paintingGraphics.remove();
  }
  paintingGraphics = createGraphics(pw, ph);
  p.draw(paintingGraphics);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    navigateNext();
  } else if (keyCode === LEFT_ARROW) {
    navigatePrev();
  } else if (key === "s" || key === "S") {
    if (paintingGraphics) {
      saveCanvas(paintingGraphics, paintings[currentIndex].filename, "png");
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  needsRedraw = true;
  redraw();
}

function navigateNext() {
  currentIndex = (currentIndex + 1) % paintings.length;
  needsRedraw = true;
  redraw();
}

function navigatePrev() {
  currentIndex = (currentIndex - 1 + paintings.length) % paintings.length;
  needsRedraw = true;
  redraw();
}

function touchStarted() {
  touchStartX = mouseX;
  touchStartY = mouseY;
  return true;
}

function touchEnded() {
  let dx = mouseX - touchStartX;
  let dy = mouseY - touchStartY;
  let absDx = abs(dx);
  let absDy = abs(dy);

  if (absDx > 40 && absDx > absDy) {
    // Horizontal swipe
    if (dx < 0) {
      navigateNext();
    } else {
      navigatePrev();
    }
  } else if (absDx < 10 && absDy < 10) {
    // Tap — left half goes back, right half goes forward
    if (mouseX < width / 2) {
      navigatePrev();
    } else {
      navigateNext();
    }
  }
  return true;
}
