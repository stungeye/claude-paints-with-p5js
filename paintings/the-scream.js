/*
 * The Scream by Edvard Munch (1893)
 *
 * Description: An agonized figure stands on a bridge or boardwalk against
 * a tumultuous sky of red, orange, and yellow. The figure presses its
 * hands against its face, mouth open in a scream. The landscape features
 * a wavy blue-black fjord and undulating hills. Two figures walk away in
 * the background. The entire composition ripples with anxiety through
 * flowing, wavy lines.
 *
 * Approach: Wavy horizontal bands of vivid orange, red, and yellow for
 * the sky. Wavy blue-dark landscape for the fjord. Brown/tan diagonal
 * boardwalk in perspective. The central figure is a simplified skull-like
 * form with hands on face. Two dark silhouettes receding on the bridge.
 * All lines are wavy/undulating to convey emotional turbulence.
 */

paintings.push({
  title: "The Scream",
  artist: "Edvard Munch",
  year: "1893",
  filename: "Edvard Munch - The Scream",
  aspectRatio: 0.808,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // === WAVY SKY ===
    for (var y = 0; y < h * 0.65; y++) {
      var t = y / (h * 0.65);
      var c;
      if (t < 0.3) {
        c = lerpColor(color(200, 80, 30), color(230, 130, 40), t / 0.3);
      } else if (t < 0.5) {
        c = lerpColor(
          color(230, 130, 40),
          color(220, 160, 50),
          (t - 0.3) / 0.2,
        );
      } else if (t < 0.7) {
        c = lerpColor(color(220, 160, 50), color(200, 80, 40), (t - 0.5) / 0.2);
      } else {
        c = lerpColor(color(200, 80, 40), color(180, 60, 35), (t - 0.7) / 0.3);
      }
      // Make lines wavy
      pg.stroke(c);
      pg.strokeWeight(2);
      pg.noFill();
      pg.beginShape();
      for (var x = 0; x <= w; x += w * 0.02) {
        var yOff = sin(x * 0.015 + y * 0.02) * h * 0.008;
        pg.vertex(x, y + yOff);
      }
      pg.endShape();
    }

    // Blood-red streaks in sky
    pg.stroke(180, 40, 20, 100);
    pg.strokeWeight(h * 0.008);
    for (var rs = 0; rs < 8; rs++) {
      var rsy = h * 0.05 + rs * h * 0.07;
      pg.noFill();
      pg.beginShape();
      for (var rx = 0; rx <= w; rx += w * 0.03) {
        pg.curveVertex(rx, rsy + sin(rx * 0.01 + rs * 2) * h * 0.02);
      }
      pg.endShape();
    }

    // === FJORD / WATER (wavy dark blue) ===
    pg.noStroke();
    pg.fill(30, 45, 75);
    pg.beginShape();
    pg.vertex(w * 0.45, h * 0.45);
    for (var fx = w * 0.45; fx <= w; fx += w * 0.03) {
      var fy =
        h * 0.45 +
        sin(fx * 0.02) * h * 0.02 +
        ((fx - w * 0.45) / (w * 0.55)) * h * 0.15;
      pg.vertex(fx, fy);
    }
    pg.vertex(w, h * 0.7);
    pg.vertex(w, h);
    pg.vertex(w * 0.45, h);
    pg.endShape(CLOSE);

    // Water waves
    pg.noFill();
    pg.stroke(40, 60, 95, 120);
    pg.strokeWeight(w * 0.004);
    for (var wv = 0; wv < 12; wv++) {
      var wvy = h * 0.5 + wv * h * 0.035;
      pg.beginShape();
      for (var wx = w * 0.45; wx <= w; wx += w * 0.03) {
        pg.curveVertex(wx, wvy + sin(wx * 0.02 + wv) * h * 0.01);
      }
      pg.endShape();
    }

    // === LANDSCAPE / HILLS ===
    pg.noStroke();
    pg.fill(45, 60, 50);
    pg.beginShape();
    pg.vertex(w * 0.45, h * 0.52);
    pg.bezierVertex(w * 0.5, h * 0.45, w * 0.65, h * 0.4, w * 0.8, h * 0.42);
    pg.bezierVertex(w * 0.9, h * 0.44, w * 0.95, h * 0.48, w, h * 0.5);
    pg.vertex(w, h * 0.55);
    pg.vertex(w * 0.45, h * 0.55);
    pg.endShape(CLOSE);

    // === BRIDGE/BOARDWALK ===
    pg.fill(120, 100, 70);
    pg.beginShape();
    pg.vertex(0, h * 0.5);
    pg.vertex(w * 0.5, h * 0.45);
    pg.vertex(w * 0.5, h * 0.42);
    pg.vertex(w * 0.05, h * 0.42);
    pg.endShape(CLOSE);

    // Bridge railing - left
    pg.fill(110, 90, 60);
    pg.beginShape();
    pg.vertex(0, h * 0.35);
    pg.vertex(w * 0.5, h * 0.33);
    pg.vertex(w * 0.5, h * 0.35);
    pg.vertex(0, h * 0.38);
    pg.endShape(CLOSE);

    // Bridge extends to bottom
    pg.fill(120, 100, 70);
    pg.beginShape();
    pg.vertex(0, h * 0.5);
    pg.vertex(w * 0.45, h * 0.48);
    pg.vertex(w * 0.55, h);
    pg.vertex(0, h);
    pg.endShape(CLOSE);

    // Bridge railing extends
    pg.fill(110, 90, 60);
    pg.beginShape();
    pg.vertex(0, h * 0.35);
    pg.vertex(0, h * 0.38);
    pg.vertex(0, h);
    pg.vertex(0, h);
    pg.endShape(CLOSE);

    // Bridge planks
    pg.stroke(100, 80, 55, 80);
    pg.strokeWeight(w * 0.002);
    for (var bp = 0; bp < 20; bp++) {
      var bpY = h * 0.48 + bp * h * 0.025;
      var bpX1 = bp * w * 0.01;
      pg.line(bpX1, bpY, bpX1 + w * 0.45 - bp * w * 0.01, bpY - h * 0.01);
    }

    // Railing posts
    pg.stroke(90, 75, 50);
    pg.strokeWeight(w * 0.006);
    for (var rp = 0; rp < 5; rp++) {
      var rpx = w * 0.02 + rp * w * 0.1;
      pg.line(rpx, h * 0.35 + rp * h * 0.01, rpx, h * 0.5 + rp * h * 0.015);
    }

    // === TWO FIGURES IN BACKGROUND ===
    pg.noStroke();
    pg.fill(30, 28, 25);
    // Figure 1
    pg.ellipse(w * 0.35, h * 0.38, w * 0.025, h * 0.025);
    pg.rect(w * 0.34, h * 0.39, w * 0.02, h * 0.06);
    // Figure 2
    pg.ellipse(w * 0.4, h * 0.37, w * 0.025, h * 0.025);
    pg.rect(w * 0.39, h * 0.385, w * 0.02, h * 0.06);

    // === THE SCREAMING FIGURE ===
    var figX = w * 0.28;
    var figY = h * 0.55;

    // Body - dark wavy form
    pg.fill(50, 55, 80);
    pg.beginShape();
    pg.vertex(figX - w * 0.04, figY);
    pg.bezierVertex(
      figX - w * 0.05,
      figY + h * 0.08,
      figX - w * 0.06,
      figY + h * 0.18,
      figX - w * 0.07,
      figY + h * 0.32,
    );
    pg.vertex(figX + w * 0.04, figY + h * 0.32);
    pg.bezierVertex(
      figX + w * 0.03,
      figY + h * 0.18,
      figX + w * 0.02,
      figY + h * 0.08,
      figX + w * 0.04,
      figY,
    );
    pg.endShape(CLOSE);

    // Wavy robe effect
    pg.stroke(40, 45, 70, 80);
    pg.strokeWeight(w * 0.003);
    pg.noFill();
    for (var wr = 0; wr < 8; wr++) {
      var wry = figY + h * 0.05 + wr * h * 0.03;
      pg.beginShape();
      pg.curveVertex(figX - w * 0.05, wry);
      pg.curveVertex(figX - w * 0.04, wry + sin(wr) * h * 0.005);
      pg.curveVertex(figX, wry - sin(wr + 1) * h * 0.005);
      pg.curveVertex(figX + w * 0.03, wry + sin(wr + 2) * h * 0.005);
      pg.curveVertex(figX + w * 0.04, wry);
      pg.endShape();
    }

    // Head - elongated skull-like oval
    pg.noStroke();
    pg.fill(210, 190, 145);
    pg.ellipse(figX, figY - h * 0.04, w * 0.07, h * 0.1);

    // Eyes - wide, terrified
    pg.fill(30, 30, 30);
    pg.ellipse(figX - w * 0.015, figY - h * 0.055, w * 0.02, h * 0.02);
    pg.ellipse(figX + w * 0.015, figY - h * 0.055, w * 0.02, h * 0.02);
    // Eye whites
    pg.fill(220, 210, 190);
    pg.ellipse(figX - w * 0.015, figY - h * 0.055, w * 0.014, h * 0.014);
    pg.fill(20, 20, 20);
    pg.ellipse(figX - w * 0.015, figY - h * 0.055, w * 0.008, h * 0.008);
    pg.fill(220, 210, 190);
    pg.ellipse(figX + w * 0.015, figY - h * 0.055, w * 0.014, h * 0.014);
    pg.fill(20, 20, 20);
    pg.ellipse(figX + w * 0.015, figY - h * 0.055, w * 0.008, h * 0.008);

    // Mouth - wide open oval of terror
    pg.fill(60, 40, 35);
    pg.ellipse(figX, figY - h * 0.01, w * 0.025, h * 0.035);

    // Nostrils
    pg.fill(180, 160, 125);
    pg.ellipse(figX, figY - h * 0.035, w * 0.01, h * 0.008);

    // Hands on cheeks
    pg.fill(210, 190, 145);
    // Left hand
    pg.beginShape();
    pg.vertex(figX - w * 0.035, figY - h * 0.06);
    pg.bezierVertex(
      figX - w * 0.06,
      figY - h * 0.04,
      figX - w * 0.06,
      figY,
      figX - w * 0.04,
      figY + h * 0.01,
    );
    pg.vertex(figX - w * 0.03, figY);
    pg.bezierVertex(
      figX - w * 0.04,
      figY - h * 0.02,
      figX - w * 0.045,
      figY - h * 0.04,
      figX - w * 0.035,
      figY - h * 0.05,
    );
    pg.endShape(CLOSE);

    // Right hand
    pg.beginShape();
    pg.vertex(figX + w * 0.035, figY - h * 0.06);
    pg.bezierVertex(
      figX + w * 0.06,
      figY - h * 0.04,
      figX + w * 0.06,
      figY,
      figX + w * 0.04,
      figY + h * 0.01,
    );
    pg.vertex(figX + w * 0.03, figY);
    pg.bezierVertex(
      figX + w * 0.04,
      figY - h * 0.02,
      figX + w * 0.045,
      figY - h * 0.04,
      figX + w * 0.035,
      figY - h * 0.05,
    );
    pg.endShape(CLOSE);

    // Wavy distortion lines across entire image
    pg.noFill();
    pg.strokeWeight(w * 0.003);
    for (var dl = 0; dl < 5; dl++) {
      pg.stroke(190, 90, 40, 25);
      var dly = h * 0.1 + dl * h * 0.12;
      pg.beginShape();
      for (var dlx = 0; dlx <= w; dlx += w * 0.02) {
        pg.curveVertex(dlx, dly + sin(dlx * 0.02 + dl * 3) * h * 0.015);
      }
      pg.endShape();
    }
  },
});
