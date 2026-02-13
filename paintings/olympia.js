/*
 * Olympia by Édouard Manet (1863)
 *
 * Description: A reclining nude woman (Olympia) lies on a bed, looking
 * directly and boldly at the viewer. She wears a flower in her hair, a
 * black choker, a bracelet, and a slipper. A dark-skinned servant stands
 * behind, offering a bouquet of flowers. A black cat stands at the foot
 * of the bed. The white sheets and light skin contrast starkly with the
 * dark background.
 *
 * Approach: Strong horizontal composition. Light-colored figure against
 * dark background creates bold contrast. The bed with white/cream sheets,
 * the servant with flower bouquet, and the black cat are key recognizable
 * elements. Use flat tonal areas echoing Manet's revolutionary approach
 * to modeling.
 */

paintings.push({
  title: "Olympia",
  artist: "\u00c9douard Manet",
  year: "1863",
  filename: "\u00c9douard Manet - Olympia",
  aspectRatio: 1.456,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Dark background
    pg.background(45, 40, 35);

    // Wall - dark brown/green
    pg.noStroke();
    pg.fill(55, 50, 40);
    pg.rect(0, 0, w, h * 0.5);

    // Bed/couch base
    pg.fill(120, 95, 65);
    pg.rect(0, h * 0.45, w * 0.75, h * 0.55);

    // White sheets
    pg.fill(235, 228, 215);
    pg.beginShape();
    pg.vertex(0, h * 0.42);
    pg.vertex(w * 0.72, h * 0.42);
    pg.vertex(w * 0.72, h * 0.85);
    pg.vertex(w * 0.1, h * 0.92);
    pg.vertex(0, h * 0.88);
    pg.endShape(CLOSE);

    // Sheet folds
    pg.stroke(210, 200, 188, 80);
    pg.strokeWeight(w * 0.002);
    pg.line(w * 0.1, h * 0.5, w * 0.05, h * 0.85);
    pg.line(w * 0.25, h * 0.55, w * 0.2, h * 0.88);
    pg.line(w * 0.4, h * 0.6, w * 0.38, h * 0.9);

    // Pillow
    pg.noStroke();
    pg.fill(240, 235, 222);
    pg.beginShape();
    pg.vertex(0, h * 0.3);
    pg.bezierVertex(w * 0.05, h * 0.25, w * 0.2, h * 0.28, w * 0.25, h * 0.32);
    pg.bezierVertex(w * 0.28, h * 0.35, w * 0.25, h * 0.45, w * 0.2, h * 0.48);
    pg.vertex(0, h * 0.48);
    pg.endShape(CLOSE);

    // Another pillow behind
    pg.fill(230, 225, 210);
    pg.beginShape();
    pg.vertex(0, h * 0.22);
    pg.bezierVertex(w * 0.08, h * 0.18, w * 0.18, h * 0.2, w * 0.22, h * 0.26);
    pg.vertex(w * 0.2, h * 0.35);
    pg.vertex(0, h * 0.35);
    pg.endShape(CLOSE);

    // Decorative throw/shawl with floral pattern
    pg.fill(160, 130, 85);
    pg.beginShape();
    pg.vertex(w * 0.35, h * 0.65);
    pg.bezierVertex(w * 0.5, h * 0.62, w * 0.6, h * 0.68, w * 0.7, h * 0.7);
    pg.vertex(w * 0.72, h * 0.85);
    pg.vertex(w * 0.5, h * 0.88);
    pg.vertex(w * 0.35, h * 0.82);
    pg.endShape(CLOSE);

    // Floral embroidery on shawl
    pg.fill(180, 80, 80, 120);
    for (var fi = 0; fi < 12; fi++) {
      pg.ellipse(
        w * 0.38 + (fi % 4) * w * 0.08,
        h * 0.7 + floor(fi / 4) * h * 0.05,
        w * 0.015,
        w * 0.015,
      );
    }

    // === OLYMPIA (reclining figure) ===
    pg.noStroke();

    // Body - pale skin (Manet used very flat tones)
    pg.fill(235, 210, 185);

    // Torso
    pg.beginShape();
    pg.vertex(w * 0.15, h * 0.33);
    pg.bezierVertex(w * 0.2, h * 0.35, w * 0.28, h * 0.38, w * 0.35, h * 0.4);
    pg.bezierVertex(w * 0.38, h * 0.42, w * 0.38, h * 0.52, w * 0.37, h * 0.55);
    pg.bezierVertex(w * 0.35, h * 0.58, w * 0.3, h * 0.6, w * 0.25, h * 0.58);
    pg.bezierVertex(w * 0.18, h * 0.56, w * 0.12, h * 0.5, w * 0.1, h * 0.42);
    pg.bezierVertex(w * 0.09, h * 0.38, w * 0.1, h * 0.35, w * 0.15, h * 0.33);
    pg.endShape(CLOSE);

    // Legs (extended to right)
    pg.fill(232, 207, 182);
    pg.beginShape();
    pg.vertex(w * 0.35, h * 0.5);
    pg.bezierVertex(w * 0.42, h * 0.52, w * 0.5, h * 0.53, w * 0.58, h * 0.52);
    pg.bezierVertex(w * 0.62, h * 0.515, w * 0.65, h * 0.51, w * 0.67, h * 0.5);
    pg.vertex(w * 0.67, h * 0.54);
    pg.bezierVertex(w * 0.65, h * 0.55, w * 0.6, h * 0.56, w * 0.55, h * 0.57);
    pg.bezierVertex(w * 0.48, h * 0.58, w * 0.42, h * 0.57, w * 0.35, h * 0.55);
    pg.endShape(CLOSE);

    // Other leg (bent slightly)
    pg.beginShape();
    pg.vertex(w * 0.35, h * 0.52);
    pg.bezierVertex(w * 0.4, h * 0.55, w * 0.48, h * 0.56, w * 0.55, h * 0.55);
    pg.bezierVertex(
      w * 0.6,
      h * 0.545,
      w * 0.63,
      h * 0.54,
      w * 0.65,
      h * 0.535,
    );
    pg.vertex(w * 0.65, h * 0.56);
    pg.bezierVertex(w * 0.6, h * 0.58, w * 0.52, h * 0.6, w * 0.42, h * 0.6);
    pg.bezierVertex(w * 0.38, h * 0.6, w * 0.35, h * 0.58, w * 0.33, h * 0.56);
    pg.endShape(CLOSE);

    // Foot with slipper
    pg.fill(232, 207, 182);
    pg.ellipse(w * 0.67, h * 0.52, w * 0.025, h * 0.02);
    // Slipper
    pg.fill(160, 140, 100);
    pg.ellipse(w * 0.68, h * 0.525, w * 0.025, h * 0.012);

    // Left arm (hand on thigh - covering)
    pg.fill(235, 210, 185);
    pg.beginShape();
    pg.vertex(w * 0.3, h * 0.42);
    pg.bezierVertex(w * 0.32, h * 0.46, w * 0.34, h * 0.5, w * 0.35, h * 0.52);
    pg.vertex(w * 0.37, h * 0.52);
    pg.bezierVertex(w * 0.36, h * 0.48, w * 0.34, h * 0.44, w * 0.32, h * 0.42);
    pg.endShape(CLOSE);

    // Hand on body
    pg.fill(235, 210, 185);
    pg.ellipse(w * 0.36, h * 0.52, w * 0.03, h * 0.025);

    // Head (propped on pillow)
    pg.fill(238, 215, 190);
    pg.ellipse(w * 0.1, h * 0.32, w * 0.07, h * 0.08);

    // Hair - dark, up with flower
    pg.fill(55, 35, 25);
    pg.beginShape();
    pg.vertex(w * 0.07, h * 0.27);
    pg.bezierVertex(w * 0.09, h * 0.24, w * 0.12, h * 0.24, w * 0.14, h * 0.27);
    pg.bezierVertex(w * 0.15, h * 0.3, w * 0.13, h * 0.32, w * 0.1, h * 0.32);
    pg.endShape();
    pg.ellipse(w * 0.1, h * 0.28, w * 0.07, h * 0.04);

    // Flower in hair
    pg.fill(220, 80, 80);
    pg.ellipse(w * 0.13, h * 0.27, w * 0.015, h * 0.015);
    pg.fill(255, 200, 150);
    pg.ellipse(w * 0.125, h * 0.265, w * 0.008, h * 0.008);

    // Face
    pg.fill(238, 215, 190);
    pg.ellipse(w * 0.1, h * 0.32, w * 0.055, h * 0.06);

    // Eyes (looking directly at viewer)
    pg.fill(40, 30, 25);
    pg.ellipse(w * 0.088, h * 0.315, w * 0.009, h * 0.006);
    pg.ellipse(w * 0.108, h * 0.315, w * 0.009, h * 0.006);

    // Nose
    pg.stroke(210, 185, 160);
    pg.strokeWeight(w * 0.002);
    pg.line(w * 0.098, h * 0.32, w * 0.098, h * 0.335);

    // Mouth
    pg.noStroke();
    pg.fill(200, 140, 130);
    pg.ellipse(w * 0.098, h * 0.345, w * 0.015, h * 0.008);

    // Black choker
    pg.fill(20, 18, 15);
    pg.rect(w * 0.075, h * 0.355, w * 0.05, h * 0.01);

    // Bracelet
    pg.fill(200, 170, 80);
    pg.rect(w * 0.35, h * 0.515, w * 0.015, h * 0.006);

    // === SERVANT (standing behind) ===
    var sx = w * 0.78;
    var sy = h * 0.3;

    // Dark dress
    pg.noStroke();
    pg.fill(80, 65, 55);
    pg.beginShape();
    pg.vertex(sx - w * 0.06, sy);
    pg.vertex(sx + w * 0.06, sy);
    pg.vertex(sx + w * 0.08, h * 0.7);
    pg.vertex(sx - w * 0.08, h * 0.7);
    pg.endShape(CLOSE);

    // White headdress/turban
    pg.fill(230, 225, 215);
    pg.ellipse(sx, sy - h * 0.02, w * 0.06, h * 0.06);

    // Face
    pg.fill(95, 65, 45);
    pg.ellipse(sx, sy + h * 0.02, w * 0.05, h * 0.05);

    // Eyes
    pg.fill(40, 30, 25);
    pg.ellipse(sx - w * 0.008, sy + h * 0.015, w * 0.006, h * 0.005);
    pg.ellipse(sx + w * 0.008, sy + h * 0.015, w * 0.006, h * 0.005);

    // Arms holding bouquet
    pg.fill(95, 65, 45);
    pg.beginShape();
    pg.vertex(sx - w * 0.05, sy + h * 0.05);
    pg.bezierVertex(
      sx - w * 0.08,
      sy + h * 0.1,
      sx - w * 0.1,
      sy + h * 0.15,
      sx - w * 0.08,
      sy + h * 0.2,
    );
    pg.vertex(sx - w * 0.06, sy + h * 0.2);
    pg.bezierVertex(
      sx - w * 0.08,
      sy + h * 0.15,
      sx - w * 0.06,
      sy + h * 0.1,
      sx - w * 0.04,
      sy + h * 0.06,
    );
    pg.endShape(CLOSE);

    // Bouquet of flowers
    pg.fill(255, 255, 240);
    pg.ellipse(sx - w * 0.07, sy + h * 0.2, w * 0.08, h * 0.08);
    pg.fill(220, 80, 70);
    pg.ellipse(sx - w * 0.08, sy + h * 0.18, w * 0.025, w * 0.025);
    pg.fill(255, 180, 200);
    pg.ellipse(sx - w * 0.06, sy + h * 0.17, w * 0.02, w * 0.02);
    pg.fill(255, 200, 50);
    pg.ellipse(sx - w * 0.065, sy + h * 0.21, w * 0.015, w * 0.015);
    pg.fill(220, 100, 120);
    pg.ellipse(sx - w * 0.08, sy + h * 0.22, w * 0.02, w * 0.02);
    pg.fill(180, 60, 100);
    pg.ellipse(sx - w * 0.055, sy + h * 0.23, w * 0.018, w * 0.018);
    // Green leaves
    pg.fill(60, 100, 40);
    pg.ellipse(sx - w * 0.045, sy + h * 0.19, w * 0.015, h * 0.01);
    pg.ellipse(sx - w * 0.09, sy + h * 0.2, w * 0.015, h * 0.01);

    // === BLACK CAT (foot of bed) ===
    var catX = w * 0.68;
    var catY = h * 0.62;

    pg.fill(15, 12, 10);
    // Body
    pg.ellipse(catX, catY, w * 0.04, h * 0.035);
    // Head
    pg.ellipse(catX - w * 0.015, catY - h * 0.015, w * 0.02, h * 0.02);
    // Ears
    pg.triangle(
      catX - w * 0.02,
      catY - h * 0.02,
      catX - w * 0.025,
      catY - h * 0.035,
      catX - w * 0.015,
      catY - h * 0.025,
    );
    pg.triangle(
      catX - w * 0.008,
      catY - h * 0.02,
      catX - w * 0.012,
      catY - h * 0.035,
      catX - w * 0.003,
      catY - h * 0.025,
    );
    // Eyes (glowing)
    pg.fill(180, 180, 40);
    pg.ellipse(catX - w * 0.018, catY - h * 0.016, w * 0.005, h * 0.004);
    pg.ellipse(catX - w * 0.011, catY - h * 0.016, w * 0.005, h * 0.004);
    // Tail
    pg.noFill();
    pg.stroke(15, 12, 10);
    pg.strokeWeight(w * 0.004);
    pg.bezier(
      catX + w * 0.02,
      catY,
      catX + w * 0.03,
      catY - h * 0.02,
      catX + w * 0.035,
      catY - h * 0.04,
      catX + w * 0.025,
      catY - h * 0.05,
    );
    pg.noStroke();
  },
});
