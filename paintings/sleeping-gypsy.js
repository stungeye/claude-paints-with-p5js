/*
 * The Sleeping Gypsy by Henri Rousseau (1897)
 *
 * Description: A wandering musician lies asleep in a moonlit desert
 * landscape. A lion stands over her, sniffing but not attacking. A
 * mandolin and a water jug sit beside the sleeping figure, who wears
 * a colorful striped robe. The full moon illuminates the scene. The
 * painting has a dreamlike, naive quality with flat simplified forms.
 *
 * Approach: Flat color areas typical of Rousseau's naive style. Deep
 * blue-purple night sky with prominent full moon. Sandy desert ground.
 * The sleeping figure is rendered with simple shapes and colorful stripes.
 * The lion is built from basic ellipses and curves with a distinctive mane.
 * The mandolin and jug are simple geometric forms.
 */

paintings.push({
  title: "The Sleeping Gypsy",
  artist: "Henri Rousseau",
  year: "1897",
  filename: "Henri Rousseau - The Sleeping Gypsy",
  aspectRatio: 1.544,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Night sky - deep blue/purple gradient
    for (var y = 0; y < h * 0.6; y++) {
      var t = y / (h * 0.6);
      var c = lerpColor(color(15, 15, 55), color(30, 30, 75), t);
      pg.stroke(c);
      pg.line(0, y, w, y);
    }

    // Desert ground - sandy brown
    for (var y2 = floor(h * 0.58); y2 < h; y2++) {
      var t2 = (y2 - h * 0.58) / (h * 0.42);
      var c2 = lerpColor(color(140, 120, 85), color(110, 95, 70), t2);
      pg.stroke(c2);
      pg.line(0, y2, w, y2);
    }

    // Desert hills/dunes in background
    pg.noStroke();
    pg.fill(120, 105, 75, 80);
    pg.beginShape();
    pg.vertex(0, h * 0.6);
    pg.bezierVertex(w * 0.15, h * 0.52, w * 0.3, h * 0.55, w * 0.45, h * 0.58);
    pg.bezierVertex(w * 0.6, h * 0.54, w * 0.75, h * 0.5, w, h * 0.56);
    pg.vertex(w, h * 0.65);
    pg.vertex(0, h * 0.65);
    pg.endShape(CLOSE);

    // Moon - full, bright
    pg.fill(240, 240, 220);
    pg.noStroke();
    pg.ellipse(w * 0.72, h * 0.15, w * 0.08, w * 0.08);
    // Moon glow
    pg.fill(240, 240, 220, 30);
    pg.ellipse(w * 0.72, h * 0.15, w * 0.14, w * 0.14);
    pg.fill(240, 240, 220, 15);
    pg.ellipse(w * 0.72, h * 0.15, w * 0.2, w * 0.2);

    // Stars
    pg.fill(220, 220, 200, 180);
    var stars = [
      [0.1, 0.08], [0.2, 0.15], [0.35, 0.05], [0.45, 0.18],
      [0.55, 0.08], [0.85, 0.1], [0.9, 0.2], [0.15, 0.25],
      [0.6, 0.22], [0.3, 0.28], [0.82, 0.28],
    ];
    for (var si = 0; si < stars.length; si++) {
      pg.ellipse(w * stars[si][0], h * stars[si][1], w * 0.005, w * 0.005);
    }

    // === SLEEPING FIGURE ===
    var fx = w * 0.35;
    var fy = h * 0.72;

    // Body - lying on ground, wearing striped robe
    // Robe base shape
    pg.fill(100, 80, 60);
    pg.beginShape();
    pg.vertex(fx - w * 0.18, fy - h * 0.02);
    pg.bezierVertex(fx - w * 0.15, fy - h * 0.08, fx - w * 0.05, fy - h * 0.1, fx + w * 0.05, fy - h * 0.08);
    pg.bezierVertex(fx + w * 0.12, fy - h * 0.06, fx + w * 0.18, fy - h * 0.04, fx + w * 0.2, fy);
    pg.bezierVertex(fx + w * 0.2, fy + h * 0.04, fx + w * 0.15, fy + h * 0.06, fx + w * 0.05, fy + h * 0.06);
    pg.bezierVertex(fx - w * 0.05, fy + h * 0.06, fx - w * 0.15, fy + h * 0.04, fx - w * 0.18, fy - h * 0.02);
    pg.endShape(CLOSE);

    // Colorful stripes on robe
    var stripeColors = [
      color(180, 60, 50),
      color(60, 120, 160),
      color(200, 180, 80),
      color(100, 160, 80),
      color(180, 100, 160),
      color(200, 120, 60),
      color(60, 100, 140),
    ];
    pg.strokeWeight(h * 0.012);
    for (var si2 = 0; si2 < 12; si2++) {
      var st = si2 / 12;
      var sx1 = lerp(fx - w * 0.15, fx + w * 0.17, st);
      var sy1 = lerp(fy - h * 0.06, fy - h * 0.04, st);
      var sx2 = lerp(fx - w * 0.14, fx + w * 0.16, st);
      var sy2 = lerp(fy + h * 0.04, fy + h * 0.05, st);
      pg.stroke(stripeColors[si2 % stripeColors.length]);
      pg.line(sx1, sy1, sx2, sy2);
    }

    // Head
    pg.noStroke();
    pg.fill(120, 80, 55);
    pg.ellipse(fx - w * 0.17, fy - h * 0.04, w * 0.06, h * 0.06);

    // Head wrap / turban
    pg.fill(220, 200, 170);
    pg.arc(fx - w * 0.17, fy - h * 0.05, w * 0.065, h * 0.05, PI, TWO_PI);

    // Face features
    pg.fill(60, 40, 30);
    // Closed eye
    pg.stroke(60, 40, 30);
    pg.strokeWeight(w * 0.003);
    pg.noFill();
    pg.arc(fx - w * 0.16, fy - h * 0.045, w * 0.015, h * 0.008, 0, PI);

    // Feet sticking out
    pg.noStroke();
    pg.fill(120, 80, 55);
    pg.ellipse(fx + w * 0.2, fy + h * 0.01, w * 0.025, h * 0.02);
    pg.ellipse(fx + w * 0.21, fy - h * 0.005, w * 0.02, h * 0.018);

    // === MANDOLIN (near the figure) ===
    pg.fill(160, 120, 60);
    pg.stroke(120, 85, 40);
    pg.strokeWeight(w * 0.002);
    pg.ellipse(fx - w * 0.08, fy + h * 0.1, w * 0.06, h * 0.04);
    pg.fill(140, 100, 50);
    pg.rect(fx - w * 0.06, fy + h * 0.09, w * 0.08, h * 0.008);
    // Sound hole
    pg.fill(80, 55, 25);
    pg.noStroke();
    pg.ellipse(fx - w * 0.08, fy + h * 0.1, w * 0.015, h * 0.012);
    // Neck
    pg.fill(140, 100, 50);
    pg.stroke(120, 85, 40);
    pg.strokeWeight(w * 0.002);
    pg.rect(fx - w * 0.12, fy + h * 0.095, w * 0.04, h * 0.006);

    // === WATER JUG ===
    pg.fill(100, 120, 140);
    pg.stroke(80, 100, 120);
    pg.strokeWeight(w * 0.002);
    pg.ellipse(fx - w * 0.22, fy + h * 0.08, w * 0.03, h * 0.04);
    pg.rect(fx - w * 0.23, fy + h * 0.05, w * 0.02, h * 0.015);

    // Walking stick
    pg.stroke(130, 95, 55);
    pg.strokeWeight(w * 0.005);
    pg.line(fx - w * 0.2, fy - h * 0.05, fx + w * 0.22, fy + h * 0.08);

    // === LION ===
    var lx = w * 0.65;
    var ly = h * 0.58;

    // Lion body
    pg.noStroke();
    pg.fill(175, 140, 80);
    pg.beginShape();
    pg.vertex(lx - w * 0.08, ly);
    pg.bezierVertex(lx - w * 0.1, ly - h * 0.05, lx - w * 0.06, ly - h * 0.08, lx, ly - h * 0.06);
    pg.bezierVertex(lx + w * 0.06, ly - h * 0.05, lx + w * 0.1, ly - h * 0.04, lx + w * 0.12, ly - h * 0.02);
    pg.bezierVertex(lx + w * 0.13, ly, lx + w * 0.12, ly + h * 0.03, lx + w * 0.1, ly + h * 0.04);
    pg.vertex(lx - w * 0.06, ly + h * 0.04);
    pg.bezierVertex(lx - w * 0.08, ly + h * 0.03, lx - w * 0.09, ly + h * 0.01, lx - w * 0.08, ly);
    pg.endShape(CLOSE);

    // Lion legs
    pg.fill(165, 130, 70);
    pg.rect(lx - w * 0.06, ly + h * 0.02, w * 0.02, h * 0.12);
    pg.rect(lx - w * 0.02, ly + h * 0.02, w * 0.02, h * 0.12);
    pg.rect(lx + w * 0.05, ly + h * 0.01, w * 0.02, h * 0.12);
    pg.rect(lx + w * 0.09, ly, w * 0.02, h * 0.12);

    // Lion mane
    pg.fill(155, 115, 55);
    pg.ellipse(lx - w * 0.07, ly - h * 0.04, w * 0.07, h * 0.1);

    // Lion head
    pg.fill(180, 145, 85);
    pg.ellipse(lx - w * 0.1, ly - h * 0.04, w * 0.045, h * 0.06);

    // Lion face
    pg.fill(60, 40, 25);
    pg.ellipse(lx - w * 0.108, ly - h * 0.05, w * 0.006, h * 0.006);
    pg.ellipse(lx - w * 0.095, ly - h * 0.05, w * 0.006, h * 0.006);
    // Nose
    pg.fill(80, 55, 35);
    pg.ellipse(lx - w * 0.102, ly - h * 0.035, w * 0.008, h * 0.006);

    // Lion tail
    pg.noFill();
    pg.stroke(165, 130, 70);
    pg.strokeWeight(w * 0.005);
    pg.bezier(lx + w * 0.12, ly - h * 0.02, lx + w * 0.15, ly - h * 0.08, lx + w * 0.18, ly - h * 0.06, lx + w * 0.17, ly - h * 0.1);
    // Tail tuft
    pg.noStroke();
    pg.fill(140, 100, 50);
    pg.ellipse(lx + w * 0.17, ly - h * 0.1, w * 0.015, h * 0.015);

    // Moonlight reflection on ground
    pg.fill(200, 200, 180, 15);
    pg.noStroke();
    pg.ellipse(w * 0.5, h * 0.75, w * 0.6, h * 0.15);
  },
});
