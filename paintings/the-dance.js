/*
 * The Dance by Henri Matisse (1910)
 *
 * Description: Five nude red-orange figures dance in a circle, their hands
 * joined, against a vivid two-tone background of deep blue sky and bright
 * green ground. The painting is characterized by its radical simplicity,
 * bold colors, and sense of joyous movement. The figures are simplified
 * to essential curves with minimal detail.
 *
 * Approach: Three flat color areas - blue sky, green ground. Five simplified
 * human figures in red-orange, drawn with thick flowing curves. The figures
 * are arranged in a ring, leaning and stepping dynamically. Minimal detail -
 * just the essential body outlines conveying movement and joy.
 */

paintings.push({
  title: "The Dance",
  artist: "Henri Matisse",
  year: "1910",
  filename: "Henri Matisse - The Dance",
  aspectRatio: 1.504,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Blue sky - deep vivid blue
    pg.background(20, 55, 130);

    // Green ground
    pg.noStroke();
    pg.fill(35, 120, 55);
    pg.beginShape();
    pg.vertex(0, h * 0.6);
    pg.bezierVertex(w * 0.25, h * 0.55, w * 0.5, h * 0.62, w * 0.75, h * 0.58);
    pg.bezierVertex(w * 0.9, h * 0.56, w * 0.95, h * 0.6, w, h * 0.58);
    pg.vertex(w, h);
    pg.vertex(0, h);
    pg.endShape(CLOSE);

    // The five dancing figures
    var bodyColor = color(205, 75, 50);
    var outlineColor = color(120, 35, 25);

    pg.stroke(outlineColor);
    pg.strokeWeight(w * 0.005);
    pg.fill(bodyColor);

    // Figure 1 - top left, leaning right, arms up
    pg.push();
    pg.translate(w * 0.18, h * 0.35);
    pg.rotate(-0.2);
    // Head
    pg.ellipse(0, -h * 0.18, w * 0.045, h * 0.055);
    // Torso
    pg.beginShape();
    pg.vertex(-w * 0.02, -h * 0.155);
    pg.bezierVertex(
      -w * 0.025,
      -h * 0.1,
      -w * 0.03,
      -h * 0.02,
      -w * 0.025,
      h * 0.02,
    );
    pg.bezierVertex(
      -w * 0.018,
      h * 0.05,
      w * 0.018,
      h * 0.05,
      w * 0.025,
      h * 0.02,
    );
    pg.bezierVertex(
      w * 0.03,
      -h * 0.02,
      w * 0.025,
      -h * 0.1,
      w * 0.02,
      -h * 0.155,
    );
    pg.endShape(CLOSE);
    // Left leg (stepping)
    pg.beginShape();
    pg.vertex(-w * 0.02, h * 0.02);
    pg.bezierVertex(
      -w * 0.04,
      h * 0.08,
      -w * 0.06,
      h * 0.14,
      -w * 0.05,
      h * 0.22,
    );
    pg.vertex(-w * 0.04, h * 0.22);
    pg.bezierVertex(
      -w * 0.05,
      h * 0.14,
      -w * 0.03,
      h * 0.08,
      -w * 0.01,
      h * 0.03,
    );
    pg.endShape(CLOSE);
    // Right leg
    pg.beginShape();
    pg.vertex(w * 0.02, h * 0.02);
    pg.bezierVertex(w * 0.03, h * 0.08, w * 0.02, h * 0.14, w * 0.03, h * 0.22);
    pg.vertex(w * 0.04, h * 0.22);
    pg.bezierVertex(w * 0.04, h * 0.14, w * 0.04, h * 0.08, w * 0.03, h * 0.03);
    pg.endShape(CLOSE);
    // Left arm (reaching up-left)
    pg.beginShape();
    pg.vertex(-w * 0.025, -h * 0.13);
    pg.bezierVertex(
      -w * 0.06,
      -h * 0.15,
      -w * 0.09,
      -h * 0.18,
      -w * 0.11,
      -h * 0.15,
    );
    pg.vertex(-w * 0.1, -h * 0.14);
    pg.bezierVertex(
      -w * 0.08,
      -h * 0.16,
      -w * 0.05,
      -h * 0.13,
      -w * 0.025,
      -h * 0.12,
    );
    pg.endShape(CLOSE);
    // Right arm (reaching right to next figure)
    pg.beginShape();
    pg.vertex(w * 0.025, -h * 0.13);
    pg.bezierVertex(w * 0.06, -h * 0.1, w * 0.1, -h * 0.1, w * 0.15, -h * 0.12);
    pg.vertex(w * 0.15, -h * 0.11);
    pg.bezierVertex(
      w * 0.1,
      -h * 0.08,
      w * 0.06,
      -h * 0.09,
      w * 0.025,
      -h * 0.12,
    );
    pg.endShape(CLOSE);
    pg.pop();

    // Figure 2 - top center, arching back
    pg.push();
    pg.translate(w * 0.42, h * 0.25);
    pg.rotate(0.1);
    pg.ellipse(0, -h * 0.18, w * 0.045, h * 0.055);
    // Torso
    pg.beginShape();
    pg.vertex(-w * 0.02, -h * 0.155);
    pg.bezierVertex(
      -w * 0.028,
      -h * 0.08,
      -w * 0.025,
      h * 0.0,
      -w * 0.02,
      h * 0.04,
    );
    pg.bezierVertex(
      -w * 0.01,
      h * 0.06,
      w * 0.01,
      h * 0.06,
      w * 0.02,
      h * 0.04,
    );
    pg.bezierVertex(
      w * 0.025,
      h * 0.0,
      w * 0.028,
      -h * 0.08,
      w * 0.02,
      -h * 0.155,
    );
    pg.endShape(CLOSE);
    // Legs
    pg.beginShape();
    pg.vertex(-w * 0.015, h * 0.04);
    pg.bezierVertex(
      -w * 0.03,
      h * 0.12,
      -w * 0.05,
      h * 0.2,
      -w * 0.06,
      h * 0.28,
    );
    pg.vertex(-w * 0.05, h * 0.28);
    pg.bezierVertex(
      -w * 0.04,
      h * 0.2,
      -w * 0.02,
      h * 0.12,
      -w * 0.005,
      h * 0.05,
    );
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(w * 0.015, h * 0.04);
    pg.bezierVertex(
      w * 0.025,
      h * 0.12,
      w * 0.015,
      h * 0.2,
      w * 0.02,
      h * 0.28,
    );
    pg.vertex(w * 0.03, h * 0.28);
    pg.bezierVertex(
      w * 0.03,
      h * 0.2,
      w * 0.035,
      h * 0.12,
      w * 0.025,
      h * 0.05,
    );
    pg.endShape(CLOSE);
    // Arms
    pg.beginShape();
    pg.vertex(-w * 0.025, -h * 0.12);
    pg.bezierVertex(
      -w * 0.08,
      -h * 0.12,
      -w * 0.13,
      -h * 0.08,
      -w * 0.16,
      -h * 0.06,
    );
    pg.vertex(-w * 0.155, -h * 0.05);
    pg.bezierVertex(
      -w * 0.12,
      -h * 0.07,
      -w * 0.07,
      -h * 0.1,
      -w * 0.025,
      -h * 0.11,
    );
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(w * 0.025, -h * 0.12);
    pg.bezierVertex(
      w * 0.08,
      -h * 0.14,
      w * 0.12,
      -h * 0.13,
      w * 0.17,
      -h * 0.1,
    );
    pg.vertex(w * 0.17, -h * 0.09);
    pg.bezierVertex(
      w * 0.12,
      -h * 0.11,
      w * 0.07,
      -h * 0.12,
      w * 0.025,
      -h * 0.11,
    );
    pg.endShape(CLOSE);
    pg.pop();

    // Figure 3 - top right, leaning left
    pg.push();
    pg.translate(w * 0.68, h * 0.3);
    pg.rotate(-0.15);
    pg.ellipse(0, -h * 0.17, w * 0.045, h * 0.055);
    pg.beginShape();
    pg.vertex(-w * 0.02, -h * 0.145);
    pg.bezierVertex(
      -w * 0.025,
      -h * 0.07,
      -w * 0.028,
      h * 0.0,
      -w * 0.02,
      h * 0.05,
    );
    pg.bezierVertex(
      -w * 0.01,
      h * 0.07,
      w * 0.01,
      h * 0.07,
      w * 0.02,
      h * 0.05,
    );
    pg.bezierVertex(
      w * 0.028,
      h * 0.0,
      w * 0.025,
      -h * 0.07,
      w * 0.02,
      -h * 0.145,
    );
    pg.endShape(CLOSE);
    // Legs - wide stance
    pg.beginShape();
    pg.vertex(-w * 0.015, h * 0.05);
    pg.bezierVertex(
      -w * 0.04,
      h * 0.12,
      -w * 0.06,
      h * 0.18,
      -w * 0.07,
      h * 0.25,
    );
    pg.vertex(-w * 0.06, h * 0.25);
    pg.bezierVertex(
      -w * 0.05,
      h * 0.18,
      -w * 0.03,
      h * 0.12,
      -w * 0.005,
      h * 0.06,
    );
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(w * 0.015, h * 0.05);
    pg.bezierVertex(w * 0.04, h * 0.12, w * 0.06, h * 0.18, w * 0.05, h * 0.25);
    pg.vertex(w * 0.04, h * 0.25);
    pg.bezierVertex(
      w * 0.05,
      h * 0.18,
      w * 0.035,
      h * 0.12,
      w * 0.01,
      h * 0.06,
    );
    pg.endShape(CLOSE);
    // Arms
    pg.beginShape();
    pg.vertex(-w * 0.025, -h * 0.1);
    pg.bezierVertex(
      -w * 0.06,
      -h * 0.06,
      -w * 0.1,
      -h * 0.04,
      -w * 0.14,
      -h * 0.04,
    );
    pg.vertex(-w * 0.14, -h * 0.03);
    pg.bezierVertex(
      -w * 0.1,
      -h * 0.03,
      -w * 0.06,
      -h * 0.05,
      -w * 0.025,
      -h * 0.09,
    );
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(w * 0.025, -h * 0.1);
    pg.bezierVertex(
      w * 0.07,
      -h * 0.12,
      w * 0.1,
      -h * 0.15,
      w * 0.14,
      -h * 0.16,
    );
    pg.vertex(w * 0.14, -h * 0.15);
    pg.bezierVertex(
      w * 0.1,
      -h * 0.13,
      w * 0.07,
      -h * 0.1,
      w * 0.025,
      -h * 0.09,
    );
    pg.endShape(CLOSE);
    pg.pop();

    // Figure 4 - bottom right, bending forward
    pg.push();
    pg.translate(w * 0.8, h * 0.5);
    pg.rotate(0.3);
    pg.ellipse(0, -h * 0.14, w * 0.043, h * 0.05);
    pg.beginShape();
    pg.vertex(-w * 0.018, -h * 0.115);
    pg.bezierVertex(
      -w * 0.022,
      -h * 0.06,
      -w * 0.025,
      h * 0.0,
      -w * 0.02,
      h * 0.04,
    );
    pg.bezierVertex(
      -w * 0.01,
      h * 0.06,
      w * 0.01,
      h * 0.06,
      w * 0.02,
      h * 0.04,
    );
    pg.bezierVertex(
      w * 0.025,
      h * 0.0,
      w * 0.022,
      -h * 0.06,
      w * 0.018,
      -h * 0.115,
    );
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(-w * 0.015, h * 0.04);
    pg.bezierVertex(
      -w * 0.03,
      h * 0.1,
      -w * 0.02,
      h * 0.16,
      -w * 0.015,
      h * 0.22,
    );
    pg.vertex(-w * 0.005, h * 0.22);
    pg.bezierVertex(
      -w * 0.01,
      h * 0.16,
      -w * 0.02,
      h * 0.1,
      -w * 0.005,
      h * 0.05,
    );
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(w * 0.015, h * 0.04);
    pg.bezierVertex(w * 0.03, h * 0.1, w * 0.04, h * 0.16, w * 0.035, h * 0.22);
    pg.vertex(w * 0.025, h * 0.22);
    pg.bezierVertex(w * 0.03, h * 0.16, w * 0.02, h * 0.1, w * 0.01, h * 0.05);
    pg.endShape(CLOSE);
    // Arms
    pg.beginShape();
    pg.vertex(-w * 0.022, -h * 0.08);
    pg.bezierVertex(
      -w * 0.06,
      -h * 0.1,
      -w * 0.1,
      -h * 0.13,
      -w * 0.13,
      -h * 0.12,
    );
    pg.vertex(-w * 0.13, -h * 0.11);
    pg.bezierVertex(
      -w * 0.1,
      -h * 0.11,
      -w * 0.06,
      -h * 0.08,
      -w * 0.022,
      -h * 0.07,
    );
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(w * 0.022, -h * 0.08);
    pg.bezierVertex(
      w * 0.05,
      -h * 0.14,
      w * 0.06,
      -h * 0.2,
      w * 0.05,
      -h * 0.25,
    );
    pg.vertex(w * 0.04, -h * 0.25);
    pg.bezierVertex(
      w * 0.05,
      -h * 0.19,
      w * 0.04,
      -h * 0.13,
      w * 0.022,
      -h * 0.07,
    );
    pg.endShape(CLOSE);
    pg.pop();

    // Figure 5 - bottom left, leaning back
    pg.push();
    pg.translate(w * 0.08, h * 0.55);
    pg.rotate(-0.4);
    pg.ellipse(0, -h * 0.14, w * 0.043, h * 0.05);
    pg.beginShape();
    pg.vertex(-w * 0.018, -h * 0.115);
    pg.bezierVertex(
      -w * 0.023,
      -h * 0.06,
      -w * 0.025,
      h * 0.0,
      -w * 0.02,
      h * 0.04,
    );
    pg.bezierVertex(
      -w * 0.01,
      h * 0.06,
      w * 0.01,
      h * 0.06,
      w * 0.02,
      h * 0.04,
    );
    pg.bezierVertex(
      w * 0.025,
      h * 0.0,
      w * 0.023,
      -h * 0.06,
      w * 0.018,
      -h * 0.115,
    );
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(-w * 0.015, h * 0.04);
    pg.bezierVertex(
      -w * 0.025,
      h * 0.1,
      -w * 0.02,
      h * 0.16,
      -w * 0.015,
      h * 0.22,
    );
    pg.vertex(-w * 0.005, h * 0.22);
    pg.bezierVertex(
      -w * 0.01,
      h * 0.16,
      -w * 0.015,
      h * 0.1,
      -w * 0.005,
      h * 0.05,
    );
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(w * 0.015, h * 0.04);
    pg.bezierVertex(
      w * 0.025,
      h * 0.1,
      w * 0.035,
      h * 0.16,
      w * 0.04,
      h * 0.22,
    );
    pg.vertex(w * 0.05, h * 0.22);
    pg.bezierVertex(w * 0.04, h * 0.16, w * 0.03, h * 0.1, w * 0.02, h * 0.05);
    pg.endShape(CLOSE);
    // Arms
    pg.beginShape();
    pg.vertex(-w * 0.022, -h * 0.08);
    pg.bezierVertex(
      -w * 0.05,
      -h * 0.1,
      -w * 0.08,
      -h * 0.08,
      -w * 0.1,
      -h * 0.05,
    );
    pg.vertex(-w * 0.095, -h * 0.04);
    pg.bezierVertex(
      -w * 0.08,
      -h * 0.07,
      -w * 0.05,
      -h * 0.08,
      -w * 0.022,
      -h * 0.07,
    );
    pg.endShape(CLOSE);
    pg.beginShape();
    pg.vertex(w * 0.022, -h * 0.08);
    pg.bezierVertex(
      w * 0.06,
      -h * 0.1,
      w * 0.1,
      -h * 0.14,
      w * 0.15,
      -h * 0.18,
    );
    pg.vertex(w * 0.15, -h * 0.17);
    pg.bezierVertex(
      w * 0.1,
      -h * 0.12,
      w * 0.06,
      -h * 0.08,
      w * 0.022,
      -h * 0.07,
    );
    pg.endShape(CLOSE);
    pg.pop();
  },
});
