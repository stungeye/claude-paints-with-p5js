/*
 * Three Musicians by Pablo Picasso (1921)
 *
 * Description: A cubist painting showing three figures seated at a table:
 * Pierrot (left) in white/blue playing a clarinet, Harlequin (center) in
 * a diamond-patterned costume playing a guitar, and a Monk (right) in
 * dark brown/black holding sheet music. A dog lies hidden beneath the table.
 * The painting uses flat, overlapping geometric shapes in bold colors against
 * a dark brown/black background.
 *
 * Approach: Flat geometric shapes with no perspective, in the Synthetic
 * Cubist style. Bold, simple color blocks - white/blue for Pierrot,
 * orange/yellow diamonds for Harlequin, brown/black for Monk. Angular
 * interlocking shapes. Dark background. Musical instruments as simplified
 * geometric forms.
 */

paintings.push({
  title: "Three Musicians",
  artist: "Pablo Picasso",
  year: "1921",
  filename: "Pablo Picasso - Three Musicians",
  aspectRatio: 0.901,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Dark brown/black background
    pg.background(35, 25, 18);

    // Floor/table area - dark brown
    pg.noStroke();
    pg.fill(55, 40, 28);
    pg.rect(0, h * 0.6, w, h * 0.4);

    // Back wall slightly lighter
    pg.fill(50, 38, 28);
    pg.rect(0, 0, w, h * 0.62);

    // Table top
    pg.fill(75, 55, 35);
    pg.beginShape();
    pg.vertex(w * 0.05, h * 0.55);
    pg.vertex(w * 0.95, h * 0.55);
    pg.vertex(w * 0.9, h * 0.62);
    pg.vertex(w * 0.1, h * 0.62);
    pg.endShape(CLOSE);

    // === PIERROT (left) - white/blue ===
    // Body - white
    pg.fill(230, 230, 235);
    pg.beginShape();
    pg.vertex(w * 0.08, h * 0.2);
    pg.vertex(w * 0.32, h * 0.2);
    pg.vertex(w * 0.35, h * 0.55);
    pg.vertex(w * 0.05, h * 0.55);
    pg.endShape(CLOSE);

    // Pierrot sleeves
    pg.fill(220, 220, 230);
    pg.beginShape();
    pg.vertex(w * 0.05, h * 0.25);
    pg.vertex(w * 0.02, h * 0.35);
    pg.vertex(w * 0.08, h * 0.45);
    pg.vertex(w * 0.12, h * 0.3);
    pg.endShape(CLOSE);

    // Pierrot collar
    pg.fill(240, 240, 245);
    pg.triangle(w * 0.12, h * 0.2, w * 0.28, h * 0.2, w * 0.2, h * 0.28);

    // Pierrot head - angular
    pg.fill(235, 225, 210);
    pg.beginShape();
    pg.vertex(w * 0.13, h * 0.08);
    pg.vertex(w * 0.28, h * 0.08);
    pg.vertex(w * 0.3, h * 0.2);
    pg.vertex(w * 0.2, h * 0.22);
    pg.vertex(w * 0.11, h * 0.2);
    pg.endShape(CLOSE);

    // Pierrot hat - blue cone
    pg.fill(60, 80, 140);
    pg.triangle(w * 0.12, h * 0.08, w * 0.29, h * 0.08, w * 0.2, h * 0.0);

    // Pierrot eyes
    pg.fill(20, 20, 30);
    pg.ellipse(w * 0.17, h * 0.13, w * 0.02, h * 0.015);
    pg.ellipse(w * 0.24, h * 0.13, w * 0.02, h * 0.015);

    // Pierrot mouth
    pg.stroke(20, 20, 30);
    pg.strokeWeight(w * 0.003);
    pg.noFill();
    pg.line(w * 0.18, h * 0.17, w * 0.24, h * 0.17);

    // Clarinet
    pg.noStroke();
    pg.fill(25, 25, 25);
    pg.rect(w * 0.25, h * 0.16, w * 0.015, h * 0.25);
    pg.fill(35, 35, 35);
    pg.ellipse(w * 0.257, h * 0.42, w * 0.025, h * 0.025);
    // Keys
    pg.fill(200, 180, 80);
    pg.ellipse(w * 0.26, h * 0.22, w * 0.008, h * 0.008);
    pg.ellipse(w * 0.26, h * 0.27, w * 0.008, h * 0.008);
    pg.ellipse(w * 0.26, h * 0.32, w * 0.008, h * 0.008);

    // Pierrot hands (holding clarinet)
    pg.fill(235, 225, 210);
    pg.ellipse(w * 0.25, h * 0.25, w * 0.025, h * 0.02);

    // === HARLEQUIN (center) - diamond pattern ===
    // Body shape
    pg.fill(200, 120, 40);
    pg.beginShape();
    pg.vertex(w * 0.32, h * 0.15);
    pg.vertex(w * 0.65, h * 0.15);
    pg.vertex(w * 0.68, h * 0.55);
    pg.vertex(w * 0.3, h * 0.55);
    pg.endShape(CLOSE);

    // Diamond pattern overlay
    var dSize = w * 0.04;
    for (var dy = 0; dy < 12; dy++) {
      for (var dx = 0; dx < 10; dx++) {
        var ddx = w * 0.32 + dx * dSize;
        var ddy = h * 0.15 + dy * dSize * 0.8;
        if (ddx < w * 0.65 && ddy < h * 0.55) {
          if ((dx + dy) % 2 === 0) {
            pg.fill(220, 160, 40, 200);
          } else {
            pg.fill(180, 80, 30, 200);
          }
          pg.noStroke();
          pg.push();
          pg.translate(ddx + dSize / 2, ddy + dSize * 0.4);
          pg.rotate(PI / 4);
          pg.rect(-dSize * 0.3, -dSize * 0.3, dSize * 0.6, dSize * 0.6);
          pg.pop();
        }
      }
    }

    // Harlequin head
    pg.noStroke();
    pg.fill(50, 45, 35);
    pg.beginShape();
    pg.vertex(w * 0.4, h * 0.05);
    pg.vertex(w * 0.58, h * 0.05);
    pg.vertex(w * 0.6, h * 0.18);
    pg.vertex(w * 0.5, h * 0.2);
    pg.vertex(w * 0.38, h * 0.18);
    pg.endShape(CLOSE);

    // Harlequin hat (two-pointed)
    pg.fill(200, 120, 40);
    pg.triangle(w * 0.38, h * 0.06, w * 0.49, h * 0.06, w * 0.35, h * 0.0);
    pg.fill(40, 40, 40);
    pg.triangle(w * 0.49, h * 0.06, w * 0.6, h * 0.06, w * 0.63, h * 0.0);

    // Harlequin face features
    pg.fill(255, 255, 230);
    pg.ellipse(w * 0.46, h * 0.1, w * 0.02, h * 0.02);
    pg.ellipse(w * 0.54, h * 0.1, w * 0.02, h * 0.02);
    pg.fill(20, 20, 20);
    pg.ellipse(w * 0.46, h * 0.1, w * 0.01, h * 0.01);
    pg.ellipse(w * 0.54, h * 0.1, w * 0.01, h * 0.01);

    // Guitar (Harlequin)
    pg.fill(180, 140, 70);
    pg.stroke(120, 90, 40);
    pg.strokeWeight(w * 0.002);
    // Guitar body
    pg.ellipse(w * 0.48, h * 0.4, w * 0.1, h * 0.15);
    pg.ellipse(w * 0.48, h * 0.32, w * 0.08, h * 0.1);
    // Sound hole
    pg.fill(40, 30, 20);
    pg.noStroke();
    pg.ellipse(w * 0.48, h * 0.38, w * 0.03, h * 0.03);
    // Neck
    pg.fill(160, 120, 60);
    pg.rect(w * 0.46, h * 0.22, w * 0.03, h * 0.1);
    // Strings
    pg.stroke(200, 200, 180);
    pg.strokeWeight(w * 0.001);
    pg.line(w * 0.472, h * 0.25, w * 0.472, h * 0.45);
    pg.line(w * 0.48, h * 0.25, w * 0.48, h * 0.45);
    pg.line(w * 0.488, h * 0.25, w * 0.488, h * 0.45);

    // Harlequin hands
    pg.noStroke();
    pg.fill(235, 225, 210);
    pg.ellipse(w * 0.44, h * 0.33, w * 0.025, h * 0.02);
    pg.ellipse(w * 0.52, h * 0.35, w * 0.025, h * 0.02);

    // === MONK (right) - dark brown/black ===
    // Robe
    pg.fill(45, 35, 25);
    pg.beginShape();
    pg.vertex(w * 0.62, h * 0.15);
    pg.vertex(w * 0.92, h * 0.15);
    pg.vertex(w * 0.95, h * 0.55);
    pg.vertex(w * 0.6, h * 0.55);
    pg.endShape(CLOSE);

    // Monk head/hood
    pg.fill(40, 30, 22);
    pg.beginShape();
    pg.vertex(w * 0.68, h * 0.04);
    pg.vertex(w * 0.88, h * 0.04);
    pg.vertex(w * 0.9, h * 0.2);
    pg.vertex(w * 0.65, h * 0.2);
    pg.endShape(CLOSE);

    // Monk hood top
    pg.fill(50, 38, 28);
    pg.arc(w * 0.78, h * 0.04, w * 0.2, h * 0.08, PI, TWO_PI);

    // Monk face (minimal in shadow)
    pg.fill(200, 180, 150, 180);
    pg.ellipse(w * 0.78, h * 0.12, w * 0.08, h * 0.08);

    pg.fill(30, 25, 18);
    pg.ellipse(w * 0.75, h * 0.11, w * 0.015, h * 0.012);
    pg.ellipse(w * 0.81, h * 0.11, w * 0.015, h * 0.012);

    // Sheet music the monk is holding
    pg.fill(235, 225, 200);
    pg.beginShape();
    pg.vertex(w * 0.68, h * 0.25);
    pg.vertex(w * 0.88, h * 0.25);
    pg.vertex(w * 0.87, h * 0.5);
    pg.vertex(w * 0.69, h * 0.5);
    pg.endShape(CLOSE);

    // Music notation lines
    pg.stroke(30, 25, 20, 150);
    pg.strokeWeight(w * 0.001);
    for (var ml = 0; ml < 12; ml++) {
      var MY = h * 0.28 + ml * h * 0.018;
      pg.line(w * 0.7, MY, w * 0.86, MY);
    }

    // Music notes
    pg.noStroke();
    pg.fill(30, 25, 20, 150);
    for (var mn = 0; mn < 15; mn++) {
      pg.ellipse(
        w * 0.71 + (mn % 5) * w * 0.03,
        h * 0.29 + floor(mn / 5) * h * 0.065 + (mn % 3) * h * 0.015,
        w * 0.008,
        h * 0.006
      );
    }

    // Monk hands
    pg.fill(200, 180, 150);
    pg.ellipse(w * 0.72, h * 0.35, w * 0.025, h * 0.018);
    pg.ellipse(w * 0.84, h * 0.35, w * 0.025, h * 0.018);

    // === DOG under table (hidden, abstract) ===
    pg.fill(45, 35, 28);
    pg.beginShape();
    pg.vertex(w * 0.3, h * 0.65);
    pg.bezierVertex(w * 0.35, h * 0.62, w * 0.5, h * 0.63, w * 0.6, h * 0.65);
    pg.bezierVertex(w * 0.65, h * 0.7, w * 0.6, h * 0.78, w * 0.55, h * 0.8);
    pg.bezierVertex(w * 0.45, h * 0.82, w * 0.35, h * 0.78, w * 0.3, h * 0.72);
    pg.endShape(CLOSE);

    // Dog tail
    pg.stroke(45, 35, 28);
    pg.strokeWeight(w * 0.008);
    pg.noFill();
    pg.bezier(w * 0.6, h * 0.66, w * 0.65, h * 0.62, w * 0.7, h * 0.6, w * 0.72, h * 0.62);

    // Dog paws
    pg.noStroke();
    pg.fill(50, 40, 30);
    pg.ellipse(w * 0.35, h * 0.8, w * 0.02, h * 0.015);
    pg.ellipse(w * 0.42, h * 0.81, w * 0.02, h * 0.015);

    // Bold black outlines (cubist style)
    pg.noFill();
    pg.stroke(15, 12, 8);
    pg.strokeWeight(w * 0.005);
    // Pierrot outline
    pg.beginShape();
    pg.vertex(w * 0.08, h * 0.2);
    pg.vertex(w * 0.32, h * 0.2);
    pg.vertex(w * 0.35, h * 0.55);
    pg.vertex(w * 0.05, h * 0.55);
    pg.endShape(CLOSE);
    // Harlequin outline
    pg.beginShape();
    pg.vertex(w * 0.32, h * 0.15);
    pg.vertex(w * 0.65, h * 0.15);
    pg.vertex(w * 0.68, h * 0.55);
    pg.vertex(w * 0.3, h * 0.55);
    pg.endShape(CLOSE);
    // Monk outline
    pg.beginShape();
    pg.vertex(w * 0.62, h * 0.15);
    pg.vertex(w * 0.92, h * 0.15);
    pg.vertex(w * 0.95, h * 0.55);
    pg.vertex(w * 0.6, h * 0.55);
    pg.endShape(CLOSE);

    // Table outline
    pg.line(w * 0.05, h * 0.55, w * 0.95, h * 0.55);
  },
});
