/*
 * The Last Supper by Leonardo da Vinci (c. 1495-1498)
 *
 * Description: A wide, horizontal mural showing Jesus Christ at the center
 * of a long table, with his twelve apostles seated in four groups of three
 * on either side. Jesus has just announced that one of them will betray him,
 * and each group reacts with different emotions. The room has strong one-
 * point perspective leading to Jesus's head, with a coffered ceiling, three
 * windows behind (framing Christ), and tapestries on the side walls.
 *
 * Approach: Use the wide aspect ratio. Strong one-point perspective with
 * converging lines meeting at Christ's head. The long table runs across
 * the bottom third. Jesus centered with arms spread. Apostles in four
 * groups of three, with varied poses and gestures. Three windows behind
 * with blue sky. Architectural elements: coffered ceiling, tapestries.
 * Muted earth tones with blue and red for Christ's garments.
 */

paintings.push({
  title: "The Last Supper",
  artist: "Leonardo da Vinci",
  year: "c. 1495-1498",
  filename: "Leonardo da Vinci - The Last Supper",
  aspectRatio: 1.913,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Room walls - warm tan/stone
    pg.background(175, 155, 125);

    // === CEILING with perspective lines ===
    // Vanishing point = Christ's head
    var vpx = w * 0.5;
    var vpy = h * 0.28;

    // Ceiling - slightly darker
    pg.fill(160, 145, 115);
    pg.noStroke();
    pg.beginShape();
    pg.vertex(0, 0);
    pg.vertex(w, 0);
    pg.vertex(w * 0.85, h * 0.18);
    pg.vertex(w * 0.15, h * 0.18);
    pg.endShape(CLOSE);

    // Ceiling coffers/beams
    pg.stroke(140, 125, 100);
    pg.strokeWeight(w * 0.003);
    for (var cb = 0; cb < 8; cb++) {
      var cx1 = cb * w / 7;
      pg.line(cx1, 0, lerp(cx1, vpx, 0.4), h * 0.18);
    }
    // Horizontal beams
    for (var hb = 0; hb < 4; hb++) {
      var hy = hb * h * 0.05;
      var leftX = lerp(0, w * 0.15, hb / 4);
      var rightX = lerp(w, w * 0.85, hb / 4);
      pg.line(leftX, hy, rightX, hy);
    }

    // === SIDE WALLS ===
    // Left wall
    pg.noStroke();
    pg.fill(170, 150, 120);
    pg.beginShape();
    pg.vertex(0, 0);
    pg.vertex(w * 0.15, h * 0.18);
    pg.vertex(w * 0.15, h * 0.75);
    pg.vertex(0, h * 0.9);
    pg.endShape(CLOSE);

    // Right wall
    pg.beginShape();
    pg.vertex(w, 0);
    pg.vertex(w * 0.85, h * 0.18);
    pg.vertex(w * 0.85, h * 0.75);
    pg.vertex(w, h * 0.9);
    pg.endShape(CLOSE);

    // Side wall tapestries
    pg.fill(120, 90, 65, 100);
    pg.rect(w * 0.01, h * 0.08, w * 0.1, h * 0.45);
    pg.rect(w * 0.88, h * 0.08, w * 0.1, h * 0.45);

    pg.fill(110, 85, 60, 80);
    pg.rect(w * 0.03, h * 0.1, w * 0.06, h * 0.4);
    pg.rect(w * 0.9, h * 0.1, w * 0.06, h * 0.4);

    // === BACK WALL with three windows ===
    pg.fill(180, 160, 128);
    pg.rect(w * 0.15, h * 0.18, w * 0.7, h * 0.57);

    // Three windows
    var winW = w * 0.1;
    var winH = h * 0.3;
    var winY = h * 0.2;

    // Left window
    pg.fill(140, 175, 200);
    pg.rect(w * 0.24, winY, winW, winH);
    pg.arc(w * 0.24 + winW / 2, winY, winW, winW * 0.5, PI, TWO_PI);

    // Center window (larger, behind Christ)
    pg.fill(150, 185, 210);
    pg.rect(w * 0.43, winY - h * 0.02, winW * 1.4, winH * 1.1);
    pg.arc(w * 0.43 + winW * 0.7, winY - h * 0.02, winW * 1.4, winW * 0.7, PI, TWO_PI);

    // Right window
    pg.fill(140, 175, 200);
    pg.rect(w * 0.66, winY, winW, winH);
    pg.arc(w * 0.66 + winW / 2, winY, winW, winW * 0.5, PI, TWO_PI);

    // Window frames
    pg.noFill();
    pg.stroke(120, 100, 75);
    pg.strokeWeight(w * 0.003);
    pg.rect(w * 0.24, winY, winW, winH);
    pg.rect(w * 0.43, winY - h * 0.02, winW * 1.4, winH * 1.1);
    pg.rect(w * 0.66, winY, winW, winH);

    // Landscape through windows
    pg.noStroke();
    pg.fill(100, 140, 90, 100);
    pg.rect(w * 0.24, winY + winH * 0.5, winW, winH * 0.5);
    pg.rect(w * 0.43, winY + winH * 0.4, winW * 1.4, winH * 0.6);
    pg.rect(w * 0.66, winY + winH * 0.5, winW, winH * 0.5);

    // === FLOOR ===
    pg.fill(145, 125, 95);
    pg.beginShape();
    pg.vertex(0, h * 0.9);
    pg.vertex(w * 0.15, h * 0.75);
    pg.vertex(w * 0.85, h * 0.75);
    pg.vertex(w, h * 0.9);
    pg.vertex(w, h);
    pg.vertex(0, h);
    pg.endShape(CLOSE);

    // === TABLE ===
    // Table top
    pg.fill(180, 160, 130);
    pg.stroke(150, 130, 100);
    pg.strokeWeight(w * 0.002);
    pg.beginShape();
    pg.vertex(w * 0.08, h * 0.62);
    pg.vertex(w * 0.92, h * 0.62);
    pg.vertex(w * 0.92, h * 0.67);
    pg.vertex(w * 0.08, h * 0.67);
    pg.endShape(CLOSE);

    // White tablecloth
    pg.noStroke();
    pg.fill(225, 220, 210);
    pg.beginShape();
    pg.vertex(w * 0.08, h * 0.62);
    pg.vertex(w * 0.92, h * 0.62);
    pg.vertex(w * 0.92, h * 0.66);
    pg.vertex(w * 0.08, h * 0.66);
    pg.endShape(CLOSE);

    // Tablecloth front drape
    pg.fill(220, 215, 205);
    pg.beginShape();
    pg.vertex(w * 0.08, h * 0.66);
    pg.vertex(w * 0.92, h * 0.66);
    pg.vertex(w * 0.92, h * 0.76);
    pg.vertex(w * 0.08, h * 0.76);
    pg.endShape(CLOSE);

    // Tablecloth folds
    pg.stroke(200, 195, 185, 80);
    pg.strokeWeight(w * 0.002);
    for (var tf = 0; tf < 12; tf++) {
      var tfx = w * 0.12 + tf * w * 0.065;
      pg.line(tfx, h * 0.66, tfx + w * 0.005, h * 0.76);
    }

    // Plates, bread, cups on table
    pg.noStroke();
    for (var plate = 0; plate < 14; plate++) {
      var px = w * 0.1 + plate * w * 0.058;
      pg.fill(210, 205, 195);
      pg.ellipse(px, h * 0.635, w * 0.025, h * 0.01);
      // Bread
      if (plate % 3 === 0) {
        pg.fill(190, 160, 110);
        pg.ellipse(px + w * 0.015, h * 0.63, w * 0.015, h * 0.008);
      }
      // Cups
      if (plate % 2 === 1) {
        pg.fill(140, 130, 120);
        pg.rect(px - w * 0.005, h * 0.618, w * 0.01, h * 0.015);
      }
    }

    // === APOSTLES AND CHRIST ===
    // Helper function for a simplified figure
    function drawFigure(x, y, robeColor, headColor, gesture) {
      // Robe/body
      pg.noStroke();
      pg.fill(robeColor);
      pg.beginShape();
      pg.vertex(x - w * 0.022, y - h * 0.05);
      pg.vertex(x + w * 0.022, y - h * 0.05);
      pg.vertex(x + w * 0.025, y + h * 0.12);
      pg.vertex(x - w * 0.025, y + h * 0.12);
      pg.endShape(CLOSE);

      // Head
      pg.fill(headColor);
      pg.ellipse(x, y - h * 0.08, w * 0.028, h * 0.05);

      // Hair
      pg.fill(red(headColor) * 0.5, green(headColor) * 0.5, blue(headColor) * 0.5);
      pg.arc(x, y - h * 0.09, w * 0.028, h * 0.03, PI, TWO_PI);

      // Gesture arms
      pg.fill(headColor);
      if (gesture === "spread") {
        pg.ellipse(x - w * 0.03, y, w * 0.015, h * 0.012);
        pg.ellipse(x + w * 0.03, y, w * 0.015, h * 0.012);
      } else if (gesture === "pointing") {
        pg.ellipse(x + w * 0.035, y - h * 0.02, w * 0.012, h * 0.01);
      } else if (gesture === "praying") {
        pg.ellipse(x, y - h * 0.02, w * 0.02, h * 0.012);
      } else if (gesture === "reaching") {
        pg.ellipse(x - w * 0.02, y + h * 0.02, w * 0.015, h * 0.01);
      } else if (gesture === "recoiling") {
        pg.ellipse(x + w * 0.035, y - h * 0.04, w * 0.014, h * 0.01);
      }
    }

    // Group 1 (far left): Bartholomew, James Minor, Andrew
    drawFigure(w * 0.13, h * 0.52, color(80, 70, 55), color(200, 175, 150), "reaching");
    drawFigure(w * 0.17, h * 0.5, color(60, 80, 55), color(210, 185, 155), "praying");
    drawFigure(w * 0.21, h * 0.51, color(110, 75, 50), color(205, 180, 150), "spread");

    // Group 2 (center-left): Judas, Peter, John
    drawFigure(w * 0.3, h * 0.53, color(70, 60, 45), color(180, 155, 125), "reaching"); // Judas (darker, leaning back)
    drawFigure(w * 0.34, h * 0.5, color(90, 80, 100), color(210, 185, 155), "pointing"); // Peter
    drawFigure(w * 0.38, h * 0.52, color(140, 55, 50), color(215, 190, 160), "praying"); // John

    // === CHRIST (center) ===
    // Blue robe
    pg.noStroke();
    pg.fill(60, 80, 140);
    pg.beginShape();
    pg.vertex(vpx - w * 0.03, h * 0.35);
    pg.vertex(vpx + w * 0.03, h * 0.35);
    pg.vertex(vpx + w * 0.035, h * 0.66);
    pg.vertex(vpx - w * 0.035, h * 0.66);
    pg.endShape(CLOSE);

    // Red over-garment
    pg.fill(155, 45, 40);
    pg.beginShape();
    pg.vertex(vpx - w * 0.025, h * 0.35);
    pg.vertex(vpx - w * 0.005, h * 0.35);
    pg.vertex(vpx - w * 0.005, h * 0.62);
    pg.vertex(vpx - w * 0.03, h * 0.62);
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(vpx + w * 0.005, h * 0.35);
    pg.vertex(vpx + w * 0.025, h * 0.35);
    pg.vertex(vpx + w * 0.03, h * 0.62);
    pg.vertex(vpx + w * 0.005, h * 0.62);
    pg.endShape(CLOSE);

    // Christ's head
    pg.fill(215, 190, 160);
    pg.ellipse(vpx, h * 0.3, w * 0.035, h * 0.06);

    // Long hair
    pg.fill(110, 75, 45);
    pg.beginShape();
    pg.vertex(vpx - w * 0.02, h * 0.28);
    pg.bezierVertex(vpx - w * 0.025, h * 0.32, vpx - w * 0.025, h * 0.36, vpx - w * 0.02, h * 0.38);
    pg.vertex(vpx - w * 0.015, h * 0.36);
    pg.bezierVertex(vpx - w * 0.02, h * 0.33, vpx - w * 0.018, h * 0.3, vpx - w * 0.015, h * 0.28);
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(vpx + w * 0.02, h * 0.28);
    pg.bezierVertex(vpx + w * 0.025, h * 0.32, vpx + w * 0.025, h * 0.36, vpx + w * 0.02, h * 0.38);
    pg.vertex(vpx + w * 0.015, h * 0.36);
    pg.bezierVertex(vpx + w * 0.018, h * 0.33, vpx + w * 0.018, h * 0.3, vpx + w * 0.015, h * 0.28);
    pg.endShape(CLOSE);

    // Face
    pg.fill(30, 25, 20);
    pg.ellipse(vpx - w * 0.006, h * 0.295, w * 0.005, h * 0.004);
    pg.ellipse(vpx + w * 0.006, h * 0.295, w * 0.005, h * 0.004);
    // Beard
    pg.fill(100, 70, 45, 120);
    pg.ellipse(vpx, h * 0.32, w * 0.02, h * 0.025);

    // Christ's hands (arms spread open on table)
    pg.fill(215, 190, 160);
    pg.ellipse(vpx - w * 0.05, h * 0.58, w * 0.02, h * 0.015);
    pg.ellipse(vpx + w * 0.05, h * 0.58, w * 0.02, h * 0.015);

    // Arms
    pg.fill(60, 80, 140);
    pg.beginShape();
    pg.vertex(vpx - w * 0.03, h * 0.4);
    pg.vertex(vpx - w * 0.035, h * 0.42);
    pg.vertex(vpx - w * 0.05, h * 0.57);
    pg.vertex(vpx - w * 0.04, h * 0.57);
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(vpx + w * 0.03, h * 0.4);
    pg.vertex(vpx + w * 0.035, h * 0.42);
    pg.vertex(vpx + w * 0.05, h * 0.57);
    pg.vertex(vpx + w * 0.04, h * 0.57);
    pg.endShape(CLOSE);

    // Halo/light effect behind Christ
    pg.fill(200, 190, 160, 25);
    pg.ellipse(vpx, h * 0.35, w * 0.12, h * 0.2);
    pg.fill(210, 200, 170, 15);
    pg.ellipse(vpx, h * 0.35, w * 0.18, h * 0.3);

    // Group 3 (center-right): Thomas, James Major, Philip
    drawFigure(w * 0.62, h * 0.5, color(85, 90, 65), color(210, 185, 155), "recoiling"); // Thomas pointing up
    drawFigure(w * 0.66, h * 0.51, color(100, 60, 55), color(205, 180, 150), "spread"); // James
    drawFigure(w * 0.7, h * 0.5, color(70, 90, 70), color(215, 190, 160), "praying"); // Philip

    // Group 4 (far right): Matthew, Thaddaeus, Simon
    drawFigure(w * 0.79, h * 0.51, color(75, 65, 90), color(205, 180, 150), "spread");
    drawFigure(w * 0.83, h * 0.5, color(95, 75, 55), color(210, 185, 155), "reaching");
    drawFigure(w * 0.87, h * 0.52, color(70, 80, 60), color(200, 175, 145), "recoiling");

    // === PERSPECTIVE LINES (subtle) ===
    pg.stroke(155, 138, 110, 40);
    pg.strokeWeight(w * 0.001);
    // Ceiling to VP
    pg.line(0, 0, vpx, vpy);
    pg.line(w, 0, vpx, vpy);
    // Wall/ceiling edge to VP
    pg.line(0, h * 0.5, vpx, vpy);
    pg.line(w, h * 0.5, vpx, vpy);

    // Age/damage texture overlay
    pg.noStroke();
    randomSeed(1495);
    for (var ag = 0; ag < 100; ag++) {
      pg.fill(
        155 + random(30),
        138 + random(25),
        110 + random(20),
        random(5, 20)
      );
      pg.ellipse(random(w), random(h), random(w * 0.01, w * 0.05), random(h * 0.01, h * 0.03));
    }

    // Darken bottom (table shadow area)
    pg.fill(0, 0, 0, 15);
    pg.rect(0, h * 0.7, w, h * 0.3);
  },
});
