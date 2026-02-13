/*
 * The Son of Man by René Magritte (1964)
 *
 * Description: A man in a dark overcoat and bowler hat stands facing
 * the viewer against a backdrop of a cloudy sky and a low stone wall
 * with the sea visible behind it. A large green apple hovers in front
 * of his face, obscuring most of it. His left arm appears to bend
 * backwards at the elbow. The painting is a surrealist self-portrait.
 *
 * Approach: Clean, realistic-looking blue sky with clouds. Low grey
 * stone wall at waist height. Green-blue sea between wall and sky.
 * The man is rendered in dark suit with white shirt and red tie,
 * wearing a black bowler hat. The green apple is prominently placed
 * over the face. Clear outlines, relatively flat color areas matching
 * Magritte's illustrative style.
 */

paintings.push({
  title: "The Son of Man",
  artist: "Ren\u00e9 Magritte",
  year: "1964",
  filename: "Rene Magritte - The Son of Man",
  aspectRatio: 0.767,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Sky - blue with white clouds
    for (var y = 0; y < h * 0.65; y++) {
      var t = y / (h * 0.65);
      var c = lerpColor(color(140, 175, 210), color(175, 200, 225), t);
      pg.stroke(c);
      pg.line(0, y, w, y);
    }

    // Clouds
    pg.noStroke();
    pg.fill(240, 242, 245, 200);
    pg.ellipse(w * 0.2, h * 0.12, w * 0.25, h * 0.08);
    pg.ellipse(w * 0.15, h * 0.1, w * 0.15, h * 0.06);
    pg.ellipse(w * 0.3, h * 0.1, w * 0.18, h * 0.06);

    pg.fill(238, 240, 243, 180);
    pg.ellipse(w * 0.65, h * 0.18, w * 0.3, h * 0.09);
    pg.ellipse(w * 0.72, h * 0.16, w * 0.2, h * 0.07);
    pg.ellipse(w * 0.6, h * 0.15, w * 0.15, h * 0.06);

    pg.fill(235, 238, 242, 160);
    pg.ellipse(w * 0.4, h * 0.25, w * 0.22, h * 0.07);
    pg.ellipse(w * 0.85, h * 0.08, w * 0.2, h * 0.07);

    pg.fill(242, 244, 246, 140);
    pg.ellipse(w * 0.1, h * 0.3, w * 0.2, h * 0.06);
    pg.ellipse(w * 0.8, h * 0.32, w * 0.25, h * 0.07);

    // Sea - blue-green strip
    pg.fill(70, 120, 140);
    pg.rect(0, h * 0.55, w, h * 0.12);

    // Sea waves
    pg.stroke(80, 135, 155, 60);
    pg.strokeWeight(w * 0.002);
    for (var sw = 0; sw < 5; sw++) {
      var swy = h * 0.56 + sw * h * 0.02;
      pg.noFill();
      pg.beginShape();
      for (var sx = 0; sx <= w; sx += w * 0.03) {
        pg.vertex(sx, swy + sin(sx * 0.03 + sw) * h * 0.003);
      }
      pg.endShape();
    }

    // Stone wall
    pg.noStroke();
    pg.fill(140, 135, 125);
    pg.rect(0, h * 0.62, w, h * 0.12);

    // Wall top edge
    pg.fill(155, 150, 140);
    pg.rect(0, h * 0.62, w, h * 0.015);

    // Wall stones pattern
    pg.stroke(125, 120, 110, 80);
    pg.strokeWeight(w * 0.002);
    for (var wy = 0; wy < 4; wy++) {
      pg.line(0, h * 0.635 + wy * h * 0.025, w, h * 0.635 + wy * h * 0.025);
    }
    for (var wx = 0; wx < 12; wx++) {
      var wxp = wx * w / 6;
      var wy2 = (wx % 2 === 0) ? h * 0.635 : h * 0.66;
      pg.line(wxp, wy2, wxp, wy2 + h * 0.025);
    }

    // Below wall - darker continuation
    pg.noStroke();
    pg.fill(90, 90, 80);
    pg.rect(0, h * 0.74, w, h * 0.26);

    // === THE MAN ===
    var mx = w * 0.5;

    // Dark overcoat
    pg.fill(35, 35, 32);
    pg.beginShape();
    pg.vertex(mx - w * 0.15, h * 0.38);
    pg.vertex(mx + w * 0.15, h * 0.38);
    pg.vertex(mx + w * 0.18, h * 0.95);
    pg.vertex(mx - w * 0.18, h * 0.95);
    pg.endShape(CLOSE);

    // Coat lapels
    pg.fill(30, 30, 28);
    pg.beginShape();
    pg.vertex(mx - w * 0.02, h * 0.38);
    pg.vertex(mx - w * 0.1, h * 0.42);
    pg.vertex(mx - w * 0.08, h * 0.55);
    pg.vertex(mx - w * 0.02, h * 0.52);
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(mx + w * 0.02, h * 0.38);
    pg.vertex(mx + w * 0.1, h * 0.42);
    pg.vertex(mx + w * 0.08, h * 0.55);
    pg.vertex(mx + w * 0.02, h * 0.52);
    pg.endShape(CLOSE);

    // White shirt visible
    pg.fill(235, 235, 230);
    pg.beginShape();
    pg.vertex(mx - w * 0.04, h * 0.38);
    pg.vertex(mx + w * 0.04, h * 0.38);
    pg.vertex(mx + w * 0.03, h * 0.58);
    pg.vertex(mx - w * 0.03, h * 0.58);
    pg.endShape(CLOSE);

    // Red tie
    pg.fill(170, 35, 30);
    pg.beginShape();
    pg.vertex(mx - w * 0.015, h * 0.39);
    pg.vertex(mx + w * 0.015, h * 0.39);
    pg.vertex(mx + w * 0.008, h * 0.55);
    pg.vertex(mx, h * 0.57);
    pg.vertex(mx - w * 0.008, h * 0.55);
    pg.endShape(CLOSE);

    // Tie knot
    pg.fill(155, 30, 25);
    pg.ellipse(mx, h * 0.4, w * 0.025, h * 0.015);

    // Coat buttons
    pg.fill(25, 25, 22);
    pg.ellipse(mx - w * 0.04, h * 0.56, w * 0.012, w * 0.012);
    pg.ellipse(mx - w * 0.04, h * 0.62, w * 0.012, w * 0.012);

    // Shoulders
    pg.fill(35, 35, 32);
    pg.beginShape();
    pg.vertex(mx - w * 0.15, h * 0.38);
    pg.bezierVertex(mx - w * 0.2, h * 0.37, mx - w * 0.22, h * 0.4, mx - w * 0.22, h * 0.45);
    pg.vertex(mx - w * 0.15, h * 0.45);
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(mx + w * 0.15, h * 0.38);
    pg.bezierVertex(mx + w * 0.2, h * 0.37, mx + w * 0.22, h * 0.4, mx + w * 0.22, h * 0.45);
    pg.vertex(mx + w * 0.15, h * 0.45);
    pg.endShape(CLOSE);

    // Arms
    pg.fill(35, 35, 32);
    // Left arm (viewer's left)
    pg.beginShape();
    pg.vertex(mx - w * 0.15, h * 0.42);
    pg.vertex(mx - w * 0.22, h * 0.45);
    pg.vertex(mx - w * 0.2, h * 0.72);
    pg.vertex(mx - w * 0.15, h * 0.72);
    pg.endShape(CLOSE);

    // Right arm (slightly bent back)
    pg.beginShape();
    pg.vertex(mx + w * 0.15, h * 0.42);
    pg.vertex(mx + w * 0.22, h * 0.45);
    pg.vertex(mx + w * 0.2, h * 0.72);
    pg.vertex(mx + w * 0.15, h * 0.72);
    pg.endShape(CLOSE);

    // Hands barely visible
    pg.fill(220, 195, 170);
    pg.ellipse(mx - w * 0.175, h * 0.72, w * 0.03, h * 0.02);
    pg.ellipse(mx + w * 0.175, h * 0.72, w * 0.03, h * 0.02);

    // Neck
    pg.fill(220, 195, 170);
    pg.rect(mx - w * 0.03, h * 0.33, w * 0.06, h * 0.06);

    // Collar
    pg.fill(230, 230, 225);
    pg.triangle(mx - w * 0.05, h * 0.38, mx, h * 0.4, mx - w * 0.01, h * 0.38);
    pg.triangle(mx + w * 0.05, h * 0.38, mx, h * 0.4, mx + w * 0.01, h * 0.38);

    // Head
    pg.fill(220, 195, 170);
    pg.ellipse(mx, h * 0.28, w * 0.12, h * 0.12);

    // Ears
    pg.fill(215, 188, 162);
    pg.ellipse(mx - w * 0.065, h * 0.29, w * 0.02, h * 0.025);
    pg.ellipse(mx + w * 0.065, h * 0.29, w * 0.02, h * 0.025);

    // Hair hint (sides visible past apple)
    pg.fill(80, 60, 40);
    pg.ellipse(mx - w * 0.055, h * 0.26, w * 0.03, h * 0.04);
    pg.ellipse(mx + w * 0.055, h * 0.26, w * 0.03, h * 0.04);

    // === BOWLER HAT ===
    pg.fill(20, 20, 18);
    // Brim
    pg.ellipse(mx, h * 0.22, w * 0.17, h * 0.025);
    // Crown
    pg.beginShape();
    pg.vertex(mx - w * 0.055, h * 0.22);
    pg.bezierVertex(mx - w * 0.06, h * 0.17, mx - w * 0.05, h * 0.14, mx, h * 0.135);
    pg.bezierVertex(mx + w * 0.05, h * 0.14, mx + w * 0.06, h * 0.17, mx + w * 0.055, h * 0.22);
    pg.endShape(CLOSE);

    // Hat band
    pg.fill(15, 15, 13);
    pg.rect(mx - w * 0.055, h * 0.205, w * 0.11, h * 0.012);

    // Hat highlight
    pg.fill(50, 50, 45, 60);
    pg.ellipse(mx, h * 0.17, w * 0.06, h * 0.03);

    // === GREEN APPLE ===
    var ax = mx;
    var ay = h * 0.29;
    var as = w * 0.09;

    // Apple shadow on face
    pg.fill(180, 165, 140, 60);
    pg.ellipse(ax + w * 0.005, ay + h * 0.005, as * 1.1, as * 1.05);

    // Apple body - green
    pg.fill(85, 155, 55);
    pg.ellipse(ax, ay, as, as * 0.95);

    // Apple highlight
    pg.fill(110, 180, 75, 120);
    pg.ellipse(ax - as * 0.15, ay - as * 0.15, as * 0.4, as * 0.35);

    // Apple darker area
    pg.fill(65, 125, 40, 80);
    pg.ellipse(ax + as * 0.15, ay + as * 0.1, as * 0.5, as * 0.4);

    // Apple bottom indent
    pg.fill(70, 130, 45, 60);
    pg.arc(ax, ay + as * 0.43, as * 0.3, as * 0.1, PI, TWO_PI);

    // Stem
    pg.stroke(80, 60, 30);
    pg.strokeWeight(w * 0.004);
    pg.line(ax, ay - as * 0.45, ax + w * 0.005, ay - as * 0.55);

    // Leaf
    pg.noStroke();
    pg.fill(50, 110, 35);
    pg.beginShape();
    pg.vertex(ax + w * 0.003, ay - as * 0.5);
    pg.bezierVertex(ax + w * 0.02, ay - as * 0.6, ax + w * 0.03, ay - as * 0.55, ax + w * 0.025, ay - as * 0.48);
    pg.endShape(CLOSE);

    // Eyes barely visible above apple
    pg.fill(220, 195, 170);
    pg.noStroke();
    // Just hints of eyes peeking above the apple
    pg.fill(40, 35, 30);
    pg.ellipse(mx - w * 0.02, h * 0.27, w * 0.01, h * 0.004);
    pg.ellipse(mx + w * 0.02, h * 0.27, w * 0.01, h * 0.004);
  },
});
