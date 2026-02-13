/*
 * The Birth of Venus by Sandro Botticelli (c. 1485)
 *
 * Description: Venus emerges from the sea as a fully grown woman, standing
 * on a giant scallop shell. On the left, Zephyr (the west wind) blows her
 * toward shore, entangled with the nymph Chloris. On the right, a female
 * figure (one of the Horae) reaches out with a flowered cloak. Roses float
 * in the air. The sea is rendered in stylized waves.
 *
 * Approach: Use a pastel palette with creamy skin tones, soft blues and
 * greens for water. The shell is drawn with arcs and curves. Venus is a
 * simplified figure with long flowing golden hair. Wind figures on the left,
 * nymph on the right. Stylized waves using sine curves. Roses as small
 * pink circles scattered in the air.
 */

paintings.push({
  title: "The Birth of Venus",
  artist: "Sandro Botticelli",
  year: "c. 1485",
  filename: "Sandro Botticelli - The Birth of Venus",
  aspectRatio: 1.615,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Sky - soft gradient blue to peach
    for (var y = 0; y < h * 0.6; y++) {
      var t = y / (h * 0.6);
      var c = lerpColor(color(155, 190, 200), color(195, 210, 200), t);
      pg.stroke(c);
      pg.line(0, y, w, y);
    }

    // Sea - darker blue-green with stylized waves
    for (var y2 = floor(h * 0.55); y2 < h; y2++) {
      var t2 = (y2 - h * 0.55) / (h * 0.45);
      var c2 = lerpColor(color(80, 130, 135), color(60, 105, 115), t2);
      pg.stroke(c2);
      pg.line(0, y2, w, y2);
    }

    // Stylized wave lines
    pg.noFill();
    pg.stroke(100, 160, 160, 80);
    pg.strokeWeight(w * 0.002);
    for (var wv = 0; wv < 25; wv++) {
      var wy = h * 0.58 + wv * h * 0.016;
      pg.beginShape();
      for (var x = 0; x < w; x += w * 0.02) {
        var yo = sin(x * 0.05 + wv * 1.5) * h * 0.008;
        pg.curveVertex(x, wy + yo);
      }
      pg.endShape();
    }

    // White foam/caps on waves
    pg.stroke(200, 220, 220, 50);
    pg.strokeWeight(w * 0.003);
    for (var wf = 0; wf < 15; wf++) {
      var wfy = h * 0.6 + wf * h * 0.025;
      pg.beginShape();
      for (var x2 = 0; x2 < w; x2 += w * 0.015) {
        var yo2 = sin(x2 * 0.08 + wf * 2.0) * h * 0.005;
        pg.curveVertex(x2, wfy + yo2);
      }
      pg.endShape();
    }

    // Shore/beach on right
    pg.noStroke();
    pg.fill(160, 170, 130, 120);
    pg.beginShape();
    pg.vertex(w * 0.82, h * 0.3);
    pg.bezierVertex(w * 0.84, h * 0.5, w * 0.86, h * 0.7, w * 0.85, h);
    pg.vertex(w, h);
    pg.vertex(w, h * 0.25);
    pg.bezierVertex(w * 0.95, h * 0.22, w * 0.88, h * 0.25, w * 0.82, h * 0.3);
    pg.endShape(CLOSE);

    // Trees on shore
    pg.fill(90, 120, 75, 150);
    pg.ellipse(w * 0.92, h * 0.15, w * 0.12, h * 0.25);
    pg.ellipse(w * 0.88, h * 0.2, w * 0.08, h * 0.2);
    pg.fill(80, 100, 60, 130);
    pg.ellipse(w * 0.95, h * 0.22, w * 0.1, h * 0.18);

    // Tree trunk
    pg.fill(100, 80, 55);
    pg.rect(w * 0.91, h * 0.25, w * 0.015, h * 0.15);

    // === SCALLOP SHELL ===
    pg.push();
    pg.translate(w * 0.48, h * 0.78);

    // Shell base
    pg.fill(220, 195, 160);
    pg.stroke(200, 175, 140);
    pg.strokeWeight(w * 0.002);
    pg.ellipse(0, 0, w * 0.2, h * 0.12);

    // Shell ribs
    pg.stroke(195, 170, 135, 150);
    pg.strokeWeight(w * 0.003);
    for (var r = -5; r <= 5; r++) {
      var angle = (r / 5) * 0.8;
      pg.line(
        0,
        h * 0.02,
        sin(angle) * w * 0.1,
        -cos(angle) * h * 0.06 + h * 0.02,
      );
    }

    // Shell edge scallop pattern
    pg.noFill();
    pg.stroke(210, 185, 150);
    pg.strokeWeight(w * 0.003);
    pg.arc(0, 0, w * 0.2, h * 0.12, PI, TWO_PI);

    pg.pop();

    // === VENUS FIGURE ===
    var vx = w * 0.48;
    var vy = h * 0.42;

    // Body
    pg.noStroke();
    pg.fill(230, 205, 180);

    // Torso
    pg.beginShape();
    pg.vertex(vx - w * 0.035, vy + h * 0.02);
    pg.bezierVertex(
      vx - w * 0.04,
      vy + h * 0.1,
      vx - w * 0.045,
      vy + h * 0.2,
      vx - w * 0.03,
      vy + h * 0.3,
    );
    pg.bezierVertex(
      vx - w * 0.02,
      vy + h * 0.32,
      vx + w * 0.02,
      vy + h * 0.32,
      vx + w * 0.03,
      vy + h * 0.3,
    );
    pg.bezierVertex(
      vx + w * 0.045,
      vy + h * 0.2,
      vx + w * 0.04,
      vy + h * 0.1,
      vx + w * 0.035,
      vy + h * 0.02,
    );
    pg.endShape(CLOSE);

    // Legs
    pg.fill(225, 200, 175);
    // Left leg
    pg.beginShape();
    pg.vertex(vx - w * 0.02, vy + h * 0.28);
    pg.bezierVertex(
      vx - w * 0.025,
      vy + h * 0.35,
      vx - w * 0.02,
      vy + h * 0.42,
      vx - w * 0.015,
      vy + h * 0.5,
    );
    pg.vertex(vx - w * 0.005, vy + h * 0.5);
    pg.bezierVertex(
      vx - w * 0.008,
      vy + h * 0.42,
      vx - w * 0.01,
      vy + h * 0.35,
      vx - w * 0.005,
      vy + h * 0.28,
    );
    pg.endShape(CLOSE);

    // Right leg (weight-bearing, slightly bent)
    pg.beginShape();
    pg.vertex(vx + w * 0.005, vy + h * 0.28);
    pg.bezierVertex(
      vx + w * 0.015,
      vy + h * 0.35,
      vx + w * 0.02,
      vy + h * 0.42,
      vx + w * 0.018,
      vy + h * 0.5,
    );
    pg.vertex(vx + w * 0.028, vy + h * 0.5);
    pg.bezierVertex(
      vx + w * 0.033,
      vy + h * 0.42,
      vx + w * 0.028,
      vy + h * 0.35,
      vx + w * 0.02,
      vy + h * 0.28,
    );
    pg.endShape(CLOSE);

    // Head
    pg.fill(232, 208, 185);
    pg.ellipse(vx, vy - h * 0.03, w * 0.048, h * 0.07);

    // Neck
    pg.fill(228, 204, 180);
    pg.rect(vx - w * 0.01, vy - h * 0.0, w * 0.02, h * 0.03);

    // Face features
    pg.fill(60, 40, 30);
    pg.ellipse(vx - w * 0.008, vy - h * 0.04, w * 0.005, h * 0.005);
    pg.ellipse(vx + w * 0.008, vy - h * 0.04, w * 0.005, h * 0.005);
    pg.stroke(180, 140, 120);
    pg.strokeWeight(w * 0.002);
    pg.noFill();
    pg.arc(vx, vy - h * 0.02, w * 0.012, h * 0.008, 0, PI);

    // Long flowing golden hair
    pg.noStroke();
    pg.fill(190, 160, 90, 180);
    // Hair flowing left
    pg.beginShape();
    pg.vertex(vx - w * 0.02, vy - h * 0.06);
    pg.bezierVertex(
      vx - w * 0.06,
      vy - h * 0.02,
      vx - w * 0.08,
      vy + h * 0.1,
      vx - w * 0.06,
      vy + h * 0.25,
    );
    pg.bezierVertex(
      vx - w * 0.05,
      vy + h * 0.3,
      vx - w * 0.04,
      vy + h * 0.35,
      vx - w * 0.05,
      vy + h * 0.4,
    );
    pg.vertex(vx - w * 0.04, vy + h * 0.38);
    pg.bezierVertex(
      vx - w * 0.035,
      vy + h * 0.3,
      vx - w * 0.04,
      vy + h * 0.2,
      vx - w * 0.05,
      vy + h * 0.1,
    );
    pg.bezierVertex(
      vx - w * 0.05,
      vy + h * 0.0,
      vx - w * 0.04,
      vy - h * 0.03,
      vx - w * 0.02,
      vy - h * 0.04,
    );
    pg.endShape(CLOSE);

    // Hair right side
    pg.fill(200, 170, 100, 170);
    pg.beginShape();
    pg.vertex(vx + w * 0.02, vy - h * 0.06);
    pg.bezierVertex(
      vx + w * 0.04,
      vy - h * 0.02,
      vx + w * 0.05,
      vy + h * 0.05,
      vx + w * 0.04,
      vy + h * 0.15,
    );
    pg.bezierVertex(
      vx + w * 0.035,
      vy + h * 0.2,
      vx + w * 0.03,
      vy + h * 0.25,
      vx + w * 0.035,
      vy + h * 0.3,
    );
    pg.vertex(vx + w * 0.025, vy + h * 0.28);
    pg.bezierVertex(
      vx + w * 0.02,
      vy + h * 0.2,
      vx + w * 0.025,
      vy + h * 0.1,
      vx + w * 0.03,
      vy + h * 0.02,
    );
    pg.bezierVertex(
      vx + w * 0.03,
      vy - h * 0.02,
      vx + w * 0.025,
      vy - h * 0.05,
      vx + w * 0.02,
      vy - h * 0.06,
    );
    pg.endShape(CLOSE);

    // Hair strands over body (modesty)
    pg.fill(195, 165, 95, 140);
    pg.beginShape();
    pg.vertex(vx - w * 0.01, vy + h * 0.0);
    pg.bezierVertex(
      vx - w * 0.03,
      vy + h * 0.1,
      vx - w * 0.04,
      vy + h * 0.2,
      vx - w * 0.035,
      vy + h * 0.35,
    );
    pg.vertex(vx - w * 0.025, vy + h * 0.34);
    pg.bezierVertex(
      vx - w * 0.025,
      vy + h * 0.2,
      vx - w * 0.02,
      vy + h * 0.1,
      vx,
      vy + h * 0.02,
    );
    pg.endShape(CLOSE);

    // Right hand (covering)
    pg.fill(230, 205, 180);
    pg.ellipse(vx + w * 0.02, vy + h * 0.08, w * 0.03, h * 0.03);

    // Left arm raised to chest
    pg.fill(228, 203, 178);
    pg.beginShape();
    pg.vertex(vx - w * 0.035, vy + h * 0.05);
    pg.bezierVertex(
      vx - w * 0.05,
      vy + h * 0.04,
      vx - w * 0.04,
      vy + h * 0.02,
      vx - w * 0.03,
      vy + h * 0.03,
    );
    pg.endShape();
    pg.ellipse(vx - w * 0.035, vy + h * 0.04, w * 0.025, h * 0.02);

    // === ZEPHYR AND CHLORIS (left) ===
    var zx = w * 0.15;
    var zy = h * 0.3;

    // Wings
    pg.fill(180, 200, 210, 120);
    pg.beginShape();
    pg.vertex(zx - w * 0.02, zy - h * 0.05);
    pg.bezierVertex(
      zx - w * 0.1,
      zy - h * 0.15,
      zx - w * 0.12,
      zy - h * 0.05,
      zx - w * 0.08,
      zy + h * 0.02,
    );
    pg.endShape(CLOSE);

    pg.beginShape();
    pg.vertex(zx - w * 0.02, zy - h * 0.02);
    pg.bezierVertex(
      zx - w * 0.12,
      zy - h * 0.08,
      zx - w * 0.14,
      zy + h * 0.02,
      zx - w * 0.06,
      zy + h * 0.08,
    );
    pg.endShape(CLOSE);

    // Zephyr body
    pg.fill(210, 195, 175);
    pg.ellipse(zx, zy, w * 0.05, h * 0.07);
    // Zephyr torso
    pg.beginShape();
    pg.vertex(zx - w * 0.015, zy + h * 0.03);
    pg.bezierVertex(
      zx - w * 0.02,
      zy + h * 0.1,
      zx - w * 0.015,
      zy + h * 0.18,
      zx - w * 0.01,
      zy + h * 0.25,
    );
    pg.vertex(zx + w * 0.01, zy + h * 0.25);
    pg.bezierVertex(
      zx + w * 0.015,
      zy + h * 0.18,
      zx + w * 0.02,
      zy + h * 0.1,
      zx + w * 0.015,
      zy + h * 0.03,
    );
    pg.endShape(CLOSE);

    // Chloris (intertwined)
    pg.fill(225, 210, 190);
    pg.ellipse(zx + w * 0.035, zy + h * 0.02, w * 0.04, h * 0.06);
    pg.beginShape();
    pg.vertex(zx + w * 0.02, zy + h * 0.05);
    pg.bezierVertex(
      zx + w * 0.015,
      zy + h * 0.12,
      zx + w * 0.02,
      zy + h * 0.2,
      zx + w * 0.025,
      zy + h * 0.28,
    );
    pg.vertex(zx + w * 0.04, zy + h * 0.28);
    pg.bezierVertex(
      zx + w * 0.045,
      zy + h * 0.2,
      zx + w * 0.04,
      zy + h * 0.12,
      zx + w * 0.035,
      zy + h * 0.05,
    );
    pg.endShape(CLOSE);

    // Wind lines
    pg.stroke(200, 220, 230, 60);
    pg.strokeWeight(w * 0.002);
    pg.noFill();
    for (var wl = 0; wl < 8; wl++) {
      var wly = zy - h * 0.05 + wl * h * 0.04;
      pg.bezier(
        zx + w * 0.03,
        wly,
        zx + w * 0.1,
        wly - h * 0.02,
        zx + w * 0.2,
        wly + h * 0.01,
        vx - w * 0.06,
        wly,
      );
    }

    // Zephyr blowing cheeks
    pg.fill(210, 195, 175);
    pg.noStroke();
    pg.ellipse(zx + w * 0.01, zy + h * 0.01, w * 0.02, h * 0.02);

    // === HORA / NYMPH (right) with cloak ===
    var nx = w * 0.78;
    var ny = h * 0.35;

    // Flowered cloak
    pg.fill(185, 80, 80, 150);
    pg.beginShape();
    pg.vertex(nx - w * 0.04, ny - h * 0.05);
    pg.bezierVertex(
      nx - w * 0.08,
      ny + h * 0.05,
      nx - w * 0.1,
      ny + h * 0.15,
      nx - w * 0.08,
      ny + h * 0.3,
    );
    pg.bezierVertex(
      nx - w * 0.06,
      ny + h * 0.35,
      nx + w * 0.02,
      ny + h * 0.35,
      nx + w * 0.03,
      ny + h * 0.3,
    );
    pg.bezierVertex(
      nx + w * 0.04,
      ny + h * 0.15,
      nx + w * 0.02,
      ny + h * 0.05,
      nx,
      ny - h * 0.05,
    );
    pg.endShape(CLOSE);

    // White dress underneath
    pg.fill(235, 230, 220);
    pg.beginShape();
    pg.vertex(nx - w * 0.015, ny + h * 0.05);
    pg.bezierVertex(
      nx - w * 0.02,
      ny + h * 0.15,
      nx - w * 0.025,
      ny + h * 0.3,
      nx - w * 0.03,
      ny + h * 0.45,
    );
    pg.vertex(nx + w * 0.02, ny + h * 0.45);
    pg.bezierVertex(
      nx + w * 0.02,
      ny + h * 0.3,
      nx + w * 0.015,
      ny + h * 0.15,
      nx + w * 0.01,
      ny + h * 0.05,
    );
    pg.endShape(CLOSE);

    // Nymph head
    pg.fill(225, 205, 185);
    pg.ellipse(nx - w * 0.01, ny - h * 0.02, w * 0.04, h * 0.065);

    // Nymph hair
    pg.fill(140, 90, 50, 180);
    pg.ellipse(nx - w * 0.01, ny - h * 0.045, w * 0.045, h * 0.04);
    pg.beginShape();
    pg.vertex(nx - w * 0.03, ny - h * 0.03);
    pg.bezierVertex(
      nx - w * 0.035,
      ny + h * 0.05,
      nx - w * 0.03,
      ny + h * 0.1,
      nx - w * 0.025,
      ny + h * 0.15,
    );
    pg.vertex(nx - w * 0.02, ny + h * 0.12);
    pg.bezierVertex(
      nx - w * 0.025,
      ny + h * 0.05,
      nx - w * 0.025,
      ny,
      nx - w * 0.02,
      ny - h * 0.02,
    );
    pg.endShape(CLOSE);

    // Arms reaching toward Venus
    pg.fill(225, 205, 185);
    pg.strokeWeight(w * 0.002);
    pg.stroke(200, 180, 160, 80);
    pg.beginShape();
    pg.vertex(nx - w * 0.02, ny + h * 0.06);
    pg.bezierVertex(
      nx - w * 0.06,
      ny + h * 0.04,
      nx - w * 0.1,
      ny + h * 0.08,
      nx - w * 0.12,
      ny + h * 0.06,
    );
    pg.vertex(nx - w * 0.12, ny + h * 0.08);
    pg.bezierVertex(
      nx - w * 0.1,
      ny + h * 0.1,
      nx - w * 0.06,
      ny + h * 0.07,
      nx - w * 0.02,
      ny + h * 0.08,
    );
    pg.endShape(CLOSE);
    pg.noStroke();

    // Flowers on cloak
    pg.fill(255, 200, 200, 150);
    var flowerPositions = [
      [nx - w * 0.05, ny + h * 0.05],
      [nx - w * 0.02, ny + h * 0.12],
      [nx + w * 0.01, ny + h * 0.08],
      [nx - w * 0.06, ny + h * 0.18],
      [nx - w * 0.01, ny + h * 0.22],
      [nx + w * 0.02, ny + h * 0.15],
      [nx - w * 0.04, ny + h * 0.28],
    ];
    for (var fi = 0; fi < flowerPositions.length; fi++) {
      pg.fill(255, 210, 210, 140);
      pg.ellipse(
        flowerPositions[fi][0],
        flowerPositions[fi][1],
        w * 0.012,
        h * 0.012,
      );
      pg.fill(255, 255, 200, 120);
      pg.ellipse(
        flowerPositions[fi][0],
        flowerPositions[fi][1],
        w * 0.005,
        h * 0.005,
      );
    }

    // === SCATTERED ROSES in air ===
    pg.fill(230, 160, 170, 140);
    var roses = [
      [w * 0.2, h * 0.15],
      [w * 0.25, h * 0.25],
      [w * 0.3, h * 0.1],
      [w * 0.35, h * 0.2],
      [w * 0.22, h * 0.35],
      [w * 0.4, h * 0.15],
      [w * 0.42, h * 0.28],
      [w * 0.18, h * 0.45],
      [w * 0.32, h * 0.4],
      [w * 0.28, h * 0.5],
    ];
    for (var ri = 0; ri < roses.length; ri++) {
      pg.push();
      pg.translate(roses[ri][0], roses[ri][1]);
      pg.fill(230, 150, 160, 120 + ri * 5);
      for (var rp = 0; rp < 5; rp++) {
        pg.rotate(TWO_PI / 5);
        pg.ellipse(w * 0.003, 0, w * 0.01, w * 0.006);
      }
      pg.pop();
    }
  },
});
