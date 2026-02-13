/*
 * The Arnolfini Marriage by Jan van Eyck (1434)
 *
 * Description: A full-length double portrait depicting Giovanni di Nicolao
 * Arnolfini and his wife in a richly furnished room. The man wears a dark
 * fur-trimmed robe and large black hat. The woman wears a green dress with
 * white headpiece. A small dog stands between them. A brass chandelier
 * hangs above. A convex mirror on the back wall reflects the scene.
 * A window on the left admits light.
 *
 * Approach: Interior scene with careful attention to the iconic elements:
 * the man in black, woman in green, chandelier, mirror, dog, window, and
 * rich red bed. Use flat shapes for the figures and geometric forms for
 * the furnishings. The warm interior palette of browns, reds, and greens
 * with the distinctive symmetry of the composition.
 */

paintings.push({
  title: "The Arnolfini Marriage",
  artist: "Jan van Eyck",
  year: "1434",
  filename: "Jan van Eyck - The Arnolfini Marriage",
  aspectRatio: 0.73,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Room - warm brown walls
    pg.background(85, 65, 45);

    // Back wall
    pg.noStroke();
    pg.fill(95, 75, 52);
    pg.rect(0, 0, w, h * 0.82);

    // Floor - wooden
    pg.fill(110, 80, 50);
    pg.rect(0, h * 0.75, w, h * 0.25);

    // Floor planks
    pg.stroke(95, 70, 42);
    pg.strokeWeight(w * 0.002);
    for (var fp = 0; fp < 8; fp++) {
      var fy = h * 0.76 + fp * h * 0.03;
      pg.line(0, fy, w, fy);
    }

    // Floor perspective lines
    for (var fpl = 0; fpl < 6; fpl++) {
      var fx = w * 0.1 + fpl * w * 0.16;
      pg.line(fx, h * 0.75, fx + (w * 0.5 - fx) * 0.3, h);
    }

    // Window on left
    pg.noStroke();
    pg.fill(140, 170, 185);
    pg.rect(w * 0.02, h * 0.12, w * 0.2, h * 0.35);
    // Window frame
    pg.stroke(80, 60, 40);
    pg.strokeWeight(w * 0.005);
    pg.noFill();
    pg.rect(w * 0.02, h * 0.12, w * 0.2, h * 0.35);
    pg.line(w * 0.12, h * 0.12, w * 0.12, h * 0.47);
    pg.line(w * 0.02, h * 0.3, w * 0.22, h * 0.3);

    // Window panes - blue sky and green
    pg.noStroke();
    pg.fill(130, 175, 200);
    pg.rect(w * 0.025, h * 0.125, w * 0.09, h * 0.17);
    pg.rect(w * 0.125, h * 0.125, w * 0.09, h * 0.17);
    pg.fill(100, 150, 80);
    pg.rect(w * 0.025, h * 0.305, w * 0.09, h * 0.16);
    pg.rect(w * 0.125, h * 0.305, w * 0.09, h * 0.16);

    // Oranges on windowsill
    pg.fill(220, 140, 40);
    pg.ellipse(w * 0.06, h * 0.47, w * 0.02, w * 0.02);
    pg.ellipse(w * 0.1, h * 0.465, w * 0.02, w * 0.02);
    pg.ellipse(w * 0.16, h * 0.47, w * 0.02, w * 0.02);

    // Red bed/canopy on right
    pg.fill(140, 25, 20);
    pg.rect(w * 0.65, h * 0.05, w * 0.35, h * 0.5);
    // Bed drapes
    pg.fill(155, 35, 25);
    pg.beginShape();
    pg.vertex(w * 0.65, h * 0.05);
    pg.vertex(w * 0.65, h * 0.55);
    pg.vertex(w * 0.72, h * 0.55);
    pg.vertex(w * 0.72, h * 0.1);
    pg.endShape(CLOSE);
    // Bed curtain folds
    pg.stroke(120, 20, 15, 80);
    pg.strokeWeight(w * 0.003);
    pg.line(w * 0.68, h * 0.1, w * 0.68, h * 0.55);
    pg.line(w * 0.7, h * 0.08, w * 0.7, h * 0.55);
    pg.noStroke();

    // Bed post
    pg.fill(100, 75, 50);
    pg.rect(w * 0.64, h * 0.03, w * 0.02, h * 0.6);
    // Bed post finial
    pg.fill(110, 85, 55);
    pg.ellipse(w * 0.65, h * 0.03, w * 0.03, h * 0.02);

    // === CHANDELIER ===
    var chandX = w * 0.5;
    var chandY = h * 0.08;

    // Chain
    pg.stroke(180, 150, 60);
    pg.strokeWeight(w * 0.003);
    pg.line(chandX, 0, chandX, chandY);

    // Main ring
    pg.noFill();
    pg.stroke(190, 160, 70);
    pg.strokeWeight(w * 0.005);
    pg.ellipse(chandX, chandY + h * 0.02, w * 0.15, h * 0.03);

    // Arms of chandelier
    pg.strokeWeight(w * 0.003);
    for (var ci = 0; ci < 6; ci++) {
      var ca = (ci * PI) / 3;
      var cx1 = chandX + cos(ca) * w * 0.075;
      var cy1 = chandY + h * 0.02 + sin(ca) * h * 0.015;
      pg.line(
        chandX + cos(ca) * w * 0.04,
        chandY + h * 0.02 + sin(ca) * h * 0.008,
        cx1,
        cy1,
      );
      // Candle
      pg.noStroke();
      pg.fill(230, 220, 180);
      pg.rect(cx1 - w * 0.004, cy1 - h * 0.02, w * 0.008, h * 0.02);
      // Flame
      pg.fill(255, 220, 80, 200);
      pg.ellipse(cx1, cy1 - h * 0.025, w * 0.006, h * 0.012);
      pg.stroke(190, 160, 70);
      pg.strokeWeight(w * 0.003);
    }

    // === MAN (left) ===
    var manX = w * 0.33;
    var manY = h * 0.35;

    // Large black hat
    pg.noStroke();
    pg.fill(25, 22, 18);
    pg.ellipse(manX, h * 0.17, w * 0.16, h * 0.04);
    pg.rect(manX - w * 0.06, h * 0.1, w * 0.12, h * 0.07);
    pg.ellipse(manX, h * 0.1, w * 0.12, h * 0.03);

    // Face
    pg.fill(210, 185, 155);
    pg.ellipse(manX, h * 0.22, w * 0.08, h * 0.08);

    // Eyes
    pg.fill(40, 30, 25);
    pg.ellipse(manX - w * 0.015, h * 0.215, w * 0.01, h * 0.006);
    pg.ellipse(manX + w * 0.015, h * 0.215, w * 0.01, h * 0.006);

    // Nose
    pg.stroke(180, 160, 130);
    pg.strokeWeight(w * 0.002);
    pg.line(manX, h * 0.22, manX, h * 0.24);

    // Dark fur-trimmed robe
    pg.noStroke();
    pg.fill(35, 28, 22);
    pg.beginShape();
    pg.vertex(manX - w * 0.1, h * 0.27);
    pg.vertex(manX + w * 0.1, h * 0.27);
    pg.vertex(manX + w * 0.13, h * 0.75);
    pg.vertex(manX - w * 0.13, h * 0.75);
    pg.endShape(CLOSE);

    // Fur trim - brown edges
    pg.fill(80, 55, 35);
    pg.rect(manX - w * 0.04, h * 0.27, w * 0.08, h * 0.45);

    // Robe over fur
    pg.fill(30, 25, 18);
    pg.beginShape();
    pg.vertex(manX - w * 0.12, h * 0.3);
    pg.vertex(manX - w * 0.04, h * 0.28);
    pg.vertex(manX - w * 0.04, h * 0.75);
    pg.vertex(manX - w * 0.12, h * 0.75);
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(manX + w * 0.04, h * 0.28);
    pg.vertex(manX + w * 0.12, h * 0.3);
    pg.vertex(manX + w * 0.12, h * 0.75);
    pg.vertex(manX + w * 0.04, h * 0.75);
    pg.endShape(CLOSE);

    // Man's hand (raised, blessing gesture)
    pg.fill(210, 185, 155);
    pg.ellipse(manX + w * 0.12, h * 0.42, w * 0.04, h * 0.035);
    // Fingers
    pg.stroke(210, 185, 155);
    pg.strokeWeight(w * 0.006);
    pg.line(manX + w * 0.12, h * 0.405, manX + w * 0.13, h * 0.385);
    pg.line(manX + w * 0.125, h * 0.405, manX + w * 0.14, h * 0.39);

    // Man's other hand (holding woman's)
    pg.noStroke();
    pg.fill(210, 185, 155);
    pg.ellipse(manX + w * 0.03, h * 0.52, w * 0.03, h * 0.025);

    // Shoes (pointed wooden pattens on floor)
    pg.fill(60, 40, 25);
    pg.ellipse(manX - w * 0.08, h * 0.82, w * 0.06, h * 0.015);

    // === WOMAN (right) ===
    var womanX = w * 0.62;
    var womanY = h * 0.35;

    // White headpiece/wimple
    pg.noStroke();
    pg.fill(230, 225, 215);
    pg.beginShape();
    pg.vertex(womanX - w * 0.04, h * 0.14);
    pg.bezierVertex(
      womanX - w * 0.06,
      h * 0.16,
      womanX - w * 0.06,
      h * 0.2,
      womanX - w * 0.05,
      h * 0.25,
    );
    pg.vertex(womanX + w * 0.05, h * 0.25);
    pg.bezierVertex(
      womanX + w * 0.06,
      h * 0.2,
      womanX + w * 0.06,
      h * 0.16,
      womanX + w * 0.04,
      h * 0.14,
    );
    pg.endShape(CLOSE);

    // Face
    pg.fill(215, 192, 162);
    pg.ellipse(womanX, h * 0.21, w * 0.065, h * 0.065);

    // Eyes
    pg.fill(40, 30, 25);
    pg.ellipse(womanX - w * 0.012, h * 0.205, w * 0.008, h * 0.005);
    pg.ellipse(womanX + w * 0.012, h * 0.205, w * 0.008, h * 0.005);

    // Green dress
    pg.fill(55, 100, 50);
    pg.beginShape();
    pg.vertex(womanX - w * 0.08, h * 0.26);
    pg.vertex(womanX + w * 0.08, h * 0.26);
    pg.vertex(womanX + w * 0.18, h * 0.78);
    pg.vertex(womanX - w * 0.15, h * 0.78);
    pg.endShape(CLOSE);

    // Dress gathered in front (pregnancy look)
    pg.fill(60, 110, 55);
    pg.beginShape();
    pg.vertex(womanX - w * 0.02, h * 0.35);
    pg.bezierVertex(
      womanX + w * 0.04,
      h * 0.45,
      womanX + w * 0.05,
      h * 0.55,
      womanX + w * 0.03,
      h * 0.65,
    );
    pg.vertex(womanX - w * 0.01, h * 0.65);
    pg.bezierVertex(
      womanX + w * 0.01,
      h * 0.55,
      womanX + w * 0.02,
      h * 0.45,
      womanX - w * 0.02,
      h * 0.35,
    );
    pg.endShape(CLOSE);

    // White cuffs
    pg.fill(230, 225, 215);
    pg.ellipse(womanX - w * 0.06, h * 0.42, w * 0.04, h * 0.03);

    // Woman's hand
    pg.fill(215, 192, 162);
    pg.ellipse(womanX - w * 0.04, h * 0.46, w * 0.03, h * 0.025);

    // Blue underdress visible at hem
    pg.fill(70, 90, 140);
    pg.beginShape();
    pg.vertex(womanX - w * 0.12, h * 0.72);
    pg.vertex(womanX + w * 0.15, h * 0.72);
    pg.vertex(womanX + w * 0.18, h * 0.78);
    pg.vertex(womanX - w * 0.15, h * 0.78);
    pg.endShape(CLOSE);

    // Shoes (red)
    pg.fill(160, 40, 30);
    pg.ellipse(womanX + w * 0.05, h * 0.83, w * 0.04, h * 0.013);

    // === DOG (center bottom) ===
    var dogX = w * 0.48;
    var dogY = h * 0.73;

    pg.fill(150, 110, 60);
    // Dog body
    pg.ellipse(dogX, dogY, w * 0.07, h * 0.035);
    // Dog head
    pg.ellipse(dogX - w * 0.03, dogY - h * 0.015, w * 0.025, h * 0.02);
    // Dog legs
    pg.fill(140, 100, 55);
    pg.rect(dogX - w * 0.02, dogY + h * 0.01, w * 0.006, h * 0.03);
    pg.rect(dogX - w * 0.005, dogY + h * 0.01, w * 0.006, h * 0.03);
    pg.rect(dogX + w * 0.01, dogY + h * 0.01, w * 0.006, h * 0.03);
    pg.rect(dogX + w * 0.025, dogY + h * 0.01, w * 0.006, h * 0.03);
    // Tail
    pg.stroke(150, 110, 60);
    pg.strokeWeight(w * 0.004);
    pg.noFill();
    pg.bezier(
      dogX + w * 0.035,
      dogY,
      dogX + w * 0.04,
      dogY - h * 0.02,
      dogX + w * 0.045,
      dogY - h * 0.025,
      dogX + w * 0.04,
      dogY - h * 0.03,
    );
    // Dog eyes
    pg.noStroke();
    pg.fill(30, 25, 18);
    pg.ellipse(dogX - w * 0.035, dogY - h * 0.018, w * 0.004, h * 0.004);

    // === CONVEX MIRROR on back wall ===
    var mirX = w * 0.5;
    var mirY = h * 0.34;

    // Mirror frame (ornate, circular)
    pg.fill(100, 75, 45);
    pg.stroke(120, 90, 55);
    pg.strokeWeight(w * 0.003);
    pg.ellipse(mirX, mirY, w * 0.07, w * 0.07);

    // Mirror surface (convex - shows reflection)
    pg.fill(140, 150, 130);
    pg.noStroke();
    pg.ellipse(mirX, mirY, w * 0.055, w * 0.055);

    // Tiny reflected figures in mirror
    pg.fill(80, 70, 55);
    pg.ellipse(mirX - w * 0.008, mirY, w * 0.008, h * 0.015);
    pg.fill(60, 85, 55);
    pg.ellipse(mirX + w * 0.008, mirY, w * 0.008, h * 0.015);

    // Mirror frame medallions
    pg.fill(90, 65, 40);
    for (var mi = 0; mi < 10; mi++) {
      var ma = (mi * TWO_PI) / 10;
      pg.ellipse(
        mirX + cos(ma) * w * 0.035,
        mirY + sin(ma) * w * 0.035,
        w * 0.008,
        w * 0.008,
      );
    }

    // === Carpet/rug on floor ===
    pg.fill(120, 30, 25, 100);
    pg.noStroke();
    pg.beginShape();
    pg.vertex(w * 0.25, h * 0.78);
    pg.vertex(w * 0.75, h * 0.78);
    pg.vertex(w * 0.7, h * 0.95);
    pg.vertex(w * 0.3, h * 0.95);
    pg.endShape(CLOSE);

    // Warm light effect
    pg.fill(255, 240, 200, 15);
    pg.ellipse(w * 0.25, h * 0.3, w * 0.4, h * 0.5);
  },
});
