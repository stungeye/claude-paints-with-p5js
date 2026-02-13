/*
 * The Kiss by Gustav Klimt (1907-1908)
 *
 * Description: Two lovers embrace on a flowery meadow at the edge of a cliff.
 * The man bends to kiss the woman, who kneels. Both are wrapped in elaborate
 * golden robes decorated with geometric patterns - the man's robe has
 * rectangular/block patterns, the woman's has circular/floral patterns.
 * The background is gold leaf. A dominant golden/amber palette.
 *
 * Approach: Rich gold background with subtle texture. The embracing couple
 * is built as a unified golden mass with geometric pattern overlays. The
 * man's robe gets black and white rectangles, the woman's gets colorful
 * circles. A flower-dotted meadow at the bottom. Gold tones throughout
 * with accents of green, red, and blue in the decorative patterns.
 */

paintings.push({
  title: "The Kiss",
  artist: "Gustav Klimt",
  year: "1907-1908",
  filename: "Gustav Klimt - The Kiss",
  aspectRatio: 0.996,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    randomSeed(1907);

    // Gold background
    for (var y = 0; y < h; y++) {
      var t = y / h;
      var c = lerpColor(color(180, 155, 75), color(160, 135, 60), t);
      pg.stroke(c);
      pg.line(0, y, w, y);
    }

    // Gold texture - random small marks
    pg.noStroke();
    for (var gt = 0; gt < 2000; gt++) {
      pg.fill(
        160 + random(60),
        135 + random(50),
        50 + random(40),
        random(20, 60)
      );
      pg.ellipse(random(w), random(h), random(w * 0.005, w * 0.02), random(h * 0.003, h * 0.01));
    }

    // Swirling gold pattern in background
    pg.noFill();
    pg.stroke(200, 170, 80, 40);
    pg.strokeWeight(w * 0.005);
    for (var sp = 0; sp < 15; sp++) {
      var sx = random(w);
      var sy = random(h * 0.7);
      pg.beginShape();
      for (var sa = 0; sa < TWO_PI * 2; sa += 0.3) {
        var sr = sa * w * 0.008;
        pg.curveVertex(sx + cos(sa) * sr, sy + sin(sa) * sr);
      }
      pg.endShape();
    }

    // === FLOWER MEADOW at bottom ===
    // Green ground
    pg.noStroke();
    pg.fill(65, 90, 45);
    pg.beginShape();
    pg.vertex(0, h * 0.85);
    pg.bezierVertex(w * 0.2, h * 0.82, w * 0.4, h * 0.88, w * 0.5, h * 0.84);
    pg.bezierVertex(w * 0.7, h * 0.8, w * 0.85, h * 0.86, w, h * 0.83);
    pg.vertex(w, h);
    pg.vertex(0, h);
    pg.endShape(CLOSE);

    // Flowers on meadow
    var flowerColors = [
      color(255, 200, 50),
      color(255, 150, 50),
      color(220, 80, 80),
      color(255, 255, 100),
      color(200, 100, 200),
      color(255, 180, 180),
    ];
    for (var fl = 0; fl < 80; fl++) {
      var fx = random(w);
      var fy = random(h * 0.83, h);
      pg.fill(flowerColors[floor(random(flowerColors.length))]);
      pg.ellipse(fx, fy, w * 0.015, w * 0.015);
      pg.fill(255, 230, 100);
      pg.ellipse(fx, fy, w * 0.006, w * 0.006);
    }

    // Cliff edge
    pg.fill(80, 100, 55);
    pg.beginShape();
    pg.vertex(w * 0.15, h * 0.85);
    pg.bezierVertex(w * 0.1, h * 0.87, w * 0.05, h * 0.9, 0, h * 0.95);
    pg.vertex(0, h);
    pg.vertex(w * 0.2, h);
    pg.bezierVertex(w * 0.18, h * 0.95, w * 0.17, h * 0.9, w * 0.15, h * 0.85);
    pg.endShape(CLOSE);

    // === THE COUPLE - unified golden form ===
    var cx = w * 0.5;
    var cy = h * 0.45;

    // Main golden mass (combined figures)
    pg.fill(195, 165, 65);
    pg.stroke(175, 145, 50);
    pg.strokeWeight(w * 0.003);
    pg.beginShape();
    // Top of man's head
    pg.vertex(cx - w * 0.02, cy - h * 0.25);
    pg.bezierVertex(cx - w * 0.08, cy - h * 0.25, cx - w * 0.13, cy - h * 0.2, cx - w * 0.15, cy - h * 0.1);
    // Left side
    pg.bezierVertex(cx - w * 0.17, cy, cx - w * 0.18, cy + h * 0.1, cx - w * 0.17, cy + h * 0.2);
    pg.bezierVertex(cx - w * 0.16, cy + h * 0.3, cx - w * 0.12, cy + h * 0.35, cx - w * 0.08, cy + h * 0.38);
    // Bottom (woman kneeling)
    pg.bezierVertex(cx - w * 0.04, cy + h * 0.4, cx + w * 0.04, cy + h * 0.42, cx + w * 0.1, cy + h * 0.4);
    pg.bezierVertex(cx + w * 0.15, cy + h * 0.38, cx + w * 0.18, cy + h * 0.32, cx + w * 0.18, cy + h * 0.22);
    // Right side
    pg.bezierVertex(cx + w * 0.17, cy + h * 0.12, cx + w * 0.15, cy, cx + w * 0.12, cy - h * 0.08);
    pg.bezierVertex(cx + w * 0.1, cy - h * 0.15, cx + w * 0.06, cy - h * 0.2, cx + w * 0.02, cy - h * 0.22);
    pg.bezierVertex(cx, cy - h * 0.24, cx - w * 0.01, cy - h * 0.25, cx - w * 0.02, cy - h * 0.25);
    pg.endShape(CLOSE);

    // Man's head/face (leaning down to kiss)
    pg.noStroke();
    pg.fill(210, 180, 140);
    pg.ellipse(cx - w * 0.04, cy - h * 0.18, w * 0.08, h * 0.08);

    // Wreath/ivy on man's head
    pg.fill(80, 120, 50);
    for (var iv = 0; iv < 8; iv++) {
      var ia = -PI * 0.3 + iv * 0.3;
      pg.ellipse(
        cx - w * 0.04 + cos(ia) * w * 0.04,
        cy - h * 0.2 + sin(ia) * h * 0.03,
        w * 0.015, h * 0.012
      );
    }

    // Woman's face (tilted, receiving kiss)
    pg.fill(220, 190, 155);
    pg.ellipse(cx + w * 0.02, cy - h * 0.12, w * 0.06, h * 0.065);

    // Woman's hair (auburn flowing down)
    pg.fill(140, 80, 40);
    pg.beginShape();
    pg.vertex(cx + w * 0.04, cy - h * 0.15);
    pg.bezierVertex(cx + w * 0.08, cy - h * 0.12, cx + w * 0.1, cy - h * 0.05, cx + w * 0.08, cy + h * 0.05);
    pg.bezierVertex(cx + w * 0.06, cy + h * 0.08, cx + w * 0.04, cy + h * 0.05, cx + w * 0.03, cy);
    pg.bezierVertex(cx + w * 0.04, cy - h * 0.05, cx + w * 0.05, cy - h * 0.1, cx + w * 0.04, cy - h * 0.15);
    pg.endShape(CLOSE);

    // Decorative flowers in hair
    pg.fill(200, 80, 80);
    pg.ellipse(cx + w * 0.06, cy - h * 0.14, w * 0.012, w * 0.012);
    pg.fill(220, 180, 50);
    pg.ellipse(cx + w * 0.07, cy - h * 0.11, w * 0.01, w * 0.01);

    // Man's hands on woman's face
    pg.fill(210, 180, 140);
    pg.ellipse(cx + w * 0.01, cy - h * 0.1, w * 0.03, h * 0.02);
    pg.ellipse(cx - w * 0.01, cy - h * 0.11, w * 0.025, h * 0.018);

    // Woman's hand
    pg.fill(220, 190, 155);
    pg.ellipse(cx - w * 0.08, cy - h * 0.08, w * 0.025, h * 0.02);

    // Woman's bare shoulder and arm
    pg.fill(220, 190, 155);
    pg.beginShape();
    pg.vertex(cx + w * 0.05, cy - h * 0.06);
    pg.bezierVertex(cx + w * 0.08, cy - h * 0.04, cx + w * 0.1, cy, cx + w * 0.08, cy + h * 0.05);
    pg.vertex(cx + w * 0.06, cy + h * 0.04);
    pg.bezierVertex(cx + w * 0.07, cy, cx + w * 0.06, cy - h * 0.03, cx + w * 0.05, cy - h * 0.06);
    pg.endShape(CLOSE);

    // Woman's feet visible at bottom
    pg.fill(220, 190, 155);
    pg.ellipse(cx + w * 0.12, cy + h * 0.38, w * 0.03, h * 0.015);

    // === GEOMETRIC PATTERNS on man's robe (rectangles) ===
    pg.rectMode(CENTER);
    for (var mr = 0; mr < 40; mr++) {
      var mrx = cx - w * 0.12 + random(w * 0.12);
      var mry = cy - h * 0.12 + random(h * 0.45);
      // Check if point is roughly within man's robe area (left side)
      if (mrx < cx - w * 0.02 && mrx > cx - w * 0.16) {
        var rcol = random(1);
        if (rcol < 0.3) {
          pg.fill(30, 30, 30, 180);
        } else if (rcol < 0.5) {
          pg.fill(240, 240, 240, 180);
        } else if (rcol < 0.7) {
          pg.fill(200, 170, 60, 180);
        } else {
          pg.fill(150, 130, 50, 150);
        }
        pg.noStroke();
        pg.rect(mrx, mry, w * 0.015, h * 0.018);
      }
    }
    pg.rectMode(CORNER);

    // === CIRCULAR/FLORAL PATTERNS on woman's robe (right side + bottom) ===
    for (var wr = 0; wr < 50; wr++) {
      var wrx = cx - w * 0.02 + random(w * 0.18);
      var wry = cy + h * 0.05 + random(h * 0.35);
      if (wrx > cx - w * 0.05) {
        var wcol = random(1);
        if (wcol < 0.3) {
          pg.fill(200, 60, 60, 160);
        } else if (wcol < 0.5) {
          pg.fill(60, 130, 180, 160);
        } else if (wcol < 0.7) {
          pg.fill(180, 60, 180, 150);
        } else {
          pg.fill(200, 180, 60, 150);
        }
        pg.noStroke();
        pg.ellipse(wrx, wry, w * 0.018, w * 0.018);
        pg.fill(255, 220, 80, 100);
        pg.ellipse(wrx, wry, w * 0.008, w * 0.008);
      }
    }

    // Gold leaf shimmer overlay
    pg.noStroke();
    for (var gl = 0; gl < 200; gl++) {
      pg.fill(255, 230, 100, random(10, 30));
      pg.ellipse(
        cx + random(-w * 0.2, w * 0.2),
        cy + random(-h * 0.25, h * 0.4),
        random(w * 0.005, w * 0.02),
        random(h * 0.005, h * 0.015)
      );
    }

    // Subtle dark edges
    for (var e = 0; e < 20; e++) {
      pg.noFill();
      pg.stroke(60, 50, 20, 15);
      pg.strokeWeight(w * 0.008);
      pg.rect(e * 2, e * 2, w - e * 4, h - e * 4);
    }
  },
});
