/*
 * The Mona Lisa by Leonardo da Vinci (c. 1503-1519)
 *
 * Description: A half-length portrait of a woman seated before a vast,
 * misty landscape. She has dark hair parted in the center, covered by a
 * thin dark veil. Her hands are gently folded. The famous enigmatic smile
 * is the painting's most celebrated feature. The palette is dominated by
 * warm browns, olive greens, and misty blue-greens in the background.
 *
 * Approach: Build the misty landscape background with layered gradient
 * strips and silhouette shapes for mountains, river, and bridge. The
 * figure is constructed with overlapping ellipses and bezier curves for
 * the face, hair, dress, and hands. Sfumato effect is approximated with
 * semi-transparent overlapping layers. The overall warm brown-olive palette
 * is carefully maintained throughout.
 */

paintings.push({
  title: "The Mona Lisa",
  artist: "Leonardo da Vinci",
  year: "c. 1503-1519",
  filename: "Leonardo da Vinci - The Mona Lisa",
  aspectRatio: 0.6883,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Background gradient - misty atmosphere
    for (var y = 0; y < h; y++) {
      var t = y / h;
      var c;
      if (t < 0.3) {
        c = lerpColor(color(85, 100, 85), color(75, 85, 65), t / 0.3);
      } else if (t < 0.6) {
        c = lerpColor(color(75, 85, 65), color(65, 60, 45), (t - 0.3) / 0.3);
      } else {
        c = lerpColor(color(65, 60, 45), color(45, 38, 28), (t - 0.6) / 0.4);
      }
      pg.stroke(c);
      pg.line(0, y, w, y);
    }

    // Distant mountains - left
    pg.noStroke();
    pg.fill(90, 100, 85, 160);
    pg.beginShape();
    pg.vertex(0, h * 0.35);
    pg.vertex(w * 0.05, h * 0.2);
    pg.vertex(w * 0.12, h * 0.22);
    pg.vertex(w * 0.2, h * 0.15);
    pg.vertex(w * 0.28, h * 0.25);
    pg.vertex(w * 0.35, h * 0.3);
    pg.vertex(w * 0.35, h * 0.45);
    pg.vertex(0, h * 0.45);
    pg.endShape(CLOSE);

    // Distant mountains - right
    pg.fill(85, 95, 80, 160);
    pg.beginShape();
    pg.vertex(w * 0.65, h * 0.35);
    pg.vertex(w * 0.72, h * 0.18);
    pg.vertex(w * 0.8, h * 0.22);
    pg.vertex(w * 0.88, h * 0.16);
    pg.vertex(w * 0.95, h * 0.2);
    pg.vertex(w, h * 0.28);
    pg.vertex(w, h * 0.45);
    pg.vertex(w * 0.65, h * 0.45);
    pg.endShape(CLOSE);

    // Winding river/path
    pg.fill(100, 115, 100, 120);
    pg.beginShape();
    pg.vertex(w * 0.1, h * 0.45);
    pg.bezierVertex(w * 0.15, h * 0.38, w * 0.2, h * 0.35, w * 0.25, h * 0.32);
    pg.bezierVertex(w * 0.3, h * 0.29, w * 0.28, h * 0.25, w * 0.22, h * 0.24);
    pg.vertex(w * 0.24, h * 0.24);
    pg.bezierVertex(w * 0.3, h * 0.25, w * 0.32, h * 0.3, w * 0.27, h * 0.34);
    pg.bezierVertex(w * 0.22, h * 0.38, w * 0.17, h * 0.42, w * 0.12, h * 0.45);
    pg.endShape(CLOSE);

    // Right side winding path
    pg.fill(105, 115, 95, 100);
    pg.beginShape();
    pg.vertex(w * 0.85, h * 0.4);
    pg.bezierVertex(w * 0.8, h * 0.35, w * 0.78, h * 0.3, w * 0.82, h * 0.25);
    pg.vertex(w * 0.84, h * 0.25);
    pg.bezierVertex(w * 0.8, h * 0.3, w * 0.82, h * 0.36, w * 0.87, h * 0.4);
    pg.endShape(CLOSE);

    // Bridge hint on left
    pg.stroke(95, 90, 75, 100);
    pg.strokeWeight(w * 0.008);
    pg.noFill();
    pg.arc(w * 0.15, h * 0.36, w * 0.08, h * 0.04, PI, TWO_PI);

    // Parapet / balustrade on left
    pg.noStroke();
    pg.fill(75, 65, 50, 200);
    pg.rect(0, h * 0.38, w * 0.22, h * 0.62);

    // Parapet on right
    pg.fill(70, 60, 45, 200);
    pg.rect(w * 0.78, h * 0.38, w * 0.22, h * 0.62);

    // Column hints
    pg.fill(80, 70, 55, 150);
    pg.rect(w * 0.18, h * 0.3, w * 0.05, h * 0.35);
    pg.rect(w * 0.78, h * 0.3, w * 0.05, h * 0.35);

    // Column cap
    pg.fill(90, 80, 60, 150);
    pg.rect(w * 0.16, h * 0.28, w * 0.09, h * 0.03);
    pg.rect(w * 0.76, h * 0.28, w * 0.09, h * 0.03);

    // === FIGURE ===

    // Hair - dark mass
    pg.fill(35, 28, 20);
    pg.noStroke();
    pg.beginShape();
    pg.vertex(w * 0.38, h * 0.12);
    pg.bezierVertex(w * 0.34, h * 0.1, w * 0.32, h * 0.13, w * 0.3, h * 0.2);
    pg.bezierVertex(w * 0.28, h * 0.3, w * 0.27, h * 0.4, w * 0.28, h * 0.5);
    pg.bezierVertex(w * 0.29, h * 0.55, w * 0.31, h * 0.58, w * 0.33, h * 0.58);
    pg.vertex(w * 0.35, h * 0.55);
    pg.vertex(w * 0.35, h * 0.3);
    pg.bezierVertex(w * 0.35, h * 0.2, w * 0.36, h * 0.14, w * 0.38, h * 0.12);
    pg.endShape(CLOSE);

    // Hair - right side
    pg.beginShape();
    pg.vertex(w * 0.62, h * 0.12);
    pg.bezierVertex(w * 0.66, h * 0.1, w * 0.68, h * 0.13, w * 0.7, h * 0.2);
    pg.bezierVertex(w * 0.72, h * 0.3, w * 0.73, h * 0.4, w * 0.72, h * 0.5);
    pg.bezierVertex(w * 0.71, h * 0.55, w * 0.69, h * 0.58, w * 0.67, h * 0.58);
    pg.vertex(w * 0.65, h * 0.55);
    pg.vertex(w * 0.65, h * 0.3);
    pg.bezierVertex(w * 0.65, h * 0.2, w * 0.64, h * 0.14, w * 0.62, h * 0.12);
    pg.endShape(CLOSE);

    // Hair top
    pg.beginShape();
    pg.vertex(w * 0.38, h * 0.12);
    pg.bezierVertex(w * 0.42, h * 0.06, w * 0.48, h * 0.04, w * 0.5, h * 0.04);
    pg.bezierVertex(w * 0.52, h * 0.04, w * 0.58, h * 0.06, w * 0.62, h * 0.12);
    pg.bezierVertex(
      w * 0.58,
      h * 0.08,
      w * 0.53,
      h * 0.065,
      w * 0.5,
      h * 0.065,
    );
    pg.bezierVertex(
      w * 0.47,
      h * 0.065,
      w * 0.42,
      h * 0.08,
      w * 0.38,
      h * 0.12,
    );
    pg.endShape(CLOSE);

    // Veil - thin dark transparent layer over hair
    pg.fill(30, 25, 18, 80);
    pg.beginShape();
    pg.vertex(w * 0.35, h * 0.06);
    pg.bezierVertex(w * 0.42, h * 0.02, w * 0.58, h * 0.02, w * 0.65, h * 0.06);
    pg.bezierVertex(w * 0.7, h * 0.15, w * 0.73, h * 0.35, w * 0.72, h * 0.5);
    pg.vertex(w * 0.68, h * 0.5);
    pg.bezierVertex(w * 0.69, h * 0.35, w * 0.67, h * 0.15, w * 0.63, h * 0.08);
    pg.bezierVertex(w * 0.56, h * 0.04, w * 0.44, h * 0.04, w * 0.37, h * 0.08);
    pg.bezierVertex(w * 0.33, h * 0.15, w * 0.31, h * 0.35, w * 0.32, h * 0.5);
    pg.vertex(w * 0.28, h * 0.5);
    pg.bezierVertex(w * 0.27, h * 0.35, w * 0.3, h * 0.15, w * 0.35, h * 0.06);
    pg.endShape(CLOSE);

    // Face - oval
    var faceX = w * 0.5;
    var faceY = h * 0.19;
    var faceW = w * 0.22;
    var faceH = h * 0.2;

    // Neck
    pg.fill(195, 165, 130);
    pg.beginShape();
    pg.vertex(faceX - w * 0.04, faceY + faceH * 0.4);
    pg.vertex(faceX - w * 0.06, faceY + faceH * 0.9);
    pg.vertex(faceX + w * 0.06, faceY + faceH * 0.9);
    pg.vertex(faceX + w * 0.04, faceY + faceH * 0.4);
    pg.endShape(CLOSE);

    // Face shape
    pg.fill(200, 170, 135);
    pg.ellipse(faceX, faceY, faceW, faceH);

    // Forehead highlight
    pg.fill(210, 180, 145, 100);
    pg.ellipse(faceX, faceY - faceH * 0.15, faceW * 0.7, faceH * 0.4);

    // Cheek shadows
    pg.fill(180, 150, 115, 80);
    pg.ellipse(
      faceX - faceW * 0.25,
      faceY + faceH * 0.1,
      faceW * 0.3,
      faceH * 0.25,
    );
    pg.ellipse(
      faceX + faceW * 0.25,
      faceY + faceH * 0.1,
      faceW * 0.3,
      faceH * 0.25,
    );

    // Eyes
    pg.fill(35, 25, 18);
    // Left eye
    pg.ellipse(
      faceX - faceW * 0.15,
      faceY - faceH * 0.05,
      faceW * 0.12,
      faceH * 0.04,
    );
    // Right eye
    pg.ellipse(
      faceX + faceW * 0.15,
      faceY - faceH * 0.05,
      faceW * 0.12,
      faceH * 0.04,
    );

    // Eye whites hint
    pg.fill(220, 200, 175, 100);
    pg.ellipse(
      faceX - faceW * 0.15,
      faceY - faceH * 0.05,
      faceW * 0.1,
      faceH * 0.025,
    );
    pg.ellipse(
      faceX + faceW * 0.15,
      faceY - faceH * 0.05,
      faceW * 0.1,
      faceH * 0.025,
    );

    // Pupils
    pg.fill(25, 18, 12);
    pg.ellipse(
      faceX - faceW * 0.14,
      faceY - faceH * 0.05,
      faceW * 0.04,
      faceH * 0.03,
    );
    pg.ellipse(
      faceX + faceW * 0.14,
      faceY - faceH * 0.05,
      faceW * 0.04,
      faceH * 0.03,
    );

    // Eyebrows (very subtle - shaved in original)
    pg.stroke(160, 135, 105, 60);
    pg.strokeWeight(w * 0.003);
    pg.noFill();
    pg.arc(
      faceX - faceW * 0.15,
      faceY - faceH * 0.1,
      faceW * 0.18,
      faceH * 0.06,
      PI + 0.3,
      TWO_PI - 0.3,
    );
    pg.arc(
      faceX + faceW * 0.15,
      faceY - faceH * 0.1,
      faceW * 0.18,
      faceH * 0.06,
      PI + 0.3,
      TWO_PI - 0.3,
    );

    // Nose
    pg.stroke(170, 145, 115, 120);
    pg.strokeWeight(w * 0.003);
    pg.noFill();
    pg.line(faceX, faceY - faceH * 0.02, faceX, faceY + faceH * 0.12);
    pg.arc(faceX, faceY + faceH * 0.12, faceW * 0.08, faceH * 0.04, 0, PI);

    // Nose shadow
    pg.noStroke();
    pg.fill(175, 148, 118, 60);
    pg.ellipse(
      faceX + faceW * 0.04,
      faceY + faceH * 0.06,
      faceW * 0.06,
      faceH * 0.12,
    );

    // The famous smile
    pg.stroke(160, 130, 100, 180);
    pg.strokeWeight(w * 0.004);
    pg.noFill();
    pg.beginShape();
    pg.curveVertex(faceX - faceW * 0.14, faceY + faceH * 0.2);
    pg.curveVertex(faceX - faceW * 0.1, faceY + faceH * 0.2);
    pg.curveVertex(faceX - faceW * 0.04, faceY + faceH * 0.22);
    pg.curveVertex(faceX, faceY + faceH * 0.22);
    pg.curveVertex(faceX + faceW * 0.04, faceY + faceH * 0.22);
    pg.curveVertex(faceX + faceW * 0.1, faceY + faceH * 0.2);
    pg.curveVertex(faceX + faceW * 0.14, faceY + faceH * 0.2);
    pg.endShape();

    // Subtle upper lip
    pg.stroke(175, 145, 118, 80);
    pg.strokeWeight(w * 0.002);
    pg.beginShape();
    pg.curveVertex(faceX - faceW * 0.08, faceY + faceH * 0.19);
    pg.curveVertex(faceX - faceW * 0.06, faceY + faceH * 0.19);
    pg.curveVertex(faceX, faceY + faceH * 0.185);
    pg.curveVertex(faceX + faceW * 0.06, faceY + faceH * 0.19);
    pg.curveVertex(faceX + faceW * 0.08, faceY + faceH * 0.19);
    pg.endShape();

    // Chin
    pg.noStroke();
    pg.fill(190, 160, 128, 50);
    pg.ellipse(faceX, faceY + faceH * 0.38, faceW * 0.3, faceH * 0.15);

    // === DRESS / BODY ===
    pg.noStroke();

    // Dark dress
    pg.fill(48, 42, 32);
    pg.beginShape();
    pg.vertex(w * 0.3, h * 0.35);
    pg.bezierVertex(w * 0.28, h * 0.4, w * 0.22, h * 0.5, w * 0.2, h * 0.7);
    pg.vertex(w * 0.2, h);
    pg.vertex(w * 0.8, h);
    pg.vertex(w * 0.8, h * 0.7);
    pg.bezierVertex(w * 0.78, h * 0.5, w * 0.72, h * 0.4, w * 0.7, h * 0.35);
    pg.bezierVertex(w * 0.65, h * 0.32, w * 0.55, h * 0.3, w * 0.5, h * 0.3);
    pg.bezierVertex(w * 0.45, h * 0.3, w * 0.35, h * 0.32, w * 0.3, h * 0.35);
    pg.endShape(CLOSE);

    // Neckline
    pg.fill(195, 165, 130);
    pg.beginShape();
    pg.vertex(w * 0.38, h * 0.3);
    pg.bezierVertex(w * 0.42, h * 0.34, w * 0.48, h * 0.35, w * 0.5, h * 0.35);
    pg.bezierVertex(w * 0.52, h * 0.35, w * 0.58, h * 0.34, w * 0.62, h * 0.3);
    pg.vertex(w * 0.58, h * 0.28);
    pg.bezierVertex(
      w * 0.55,
      h * 0.29,
      w * 0.52,
      h * 0.295,
      w * 0.5,
      h * 0.295,
    );
    pg.bezierVertex(
      w * 0.48,
      h * 0.295,
      w * 0.45,
      h * 0.29,
      w * 0.42,
      h * 0.28,
    );
    pg.endShape(CLOSE);

    // Dress fabric folds - subtle lines
    pg.stroke(40, 35, 26, 80);
    pg.strokeWeight(w * 0.003);
    pg.noFill();
    pg.bezier(
      w * 0.35,
      h * 0.45,
      w * 0.38,
      h * 0.55,
      w * 0.32,
      h * 0.7,
      w * 0.3,
      h * 0.85,
    );
    pg.bezier(
      w * 0.65,
      h * 0.45,
      w * 0.62,
      h * 0.55,
      w * 0.68,
      h * 0.7,
      w * 0.7,
      h * 0.85,
    );
    pg.bezier(
      w * 0.45,
      h * 0.4,
      w * 0.43,
      h * 0.55,
      w * 0.4,
      h * 0.7,
      w * 0.38,
      h * 0.9,
    );

    // Dress golden trim at neckline
    pg.stroke(140, 120, 70, 100);
    pg.strokeWeight(w * 0.005);
    pg.noFill();
    pg.beginShape();
    pg.curveVertex(w * 0.36, h * 0.32);
    pg.curveVertex(w * 0.38, h * 0.33);
    pg.curveVertex(w * 0.44, h * 0.35);
    pg.curveVertex(w * 0.5, h * 0.36);
    pg.curveVertex(w * 0.56, h * 0.35);
    pg.curveVertex(w * 0.62, h * 0.33);
    pg.curveVertex(w * 0.64, h * 0.32);
    pg.endShape();

    // === HANDS ===
    pg.noStroke();
    // Right arm (viewer's right, her left)
    pg.fill(195, 165, 130);
    pg.beginShape();
    pg.vertex(w * 0.62, h * 0.52);
    pg.bezierVertex(w * 0.6, h * 0.55, w * 0.55, h * 0.62, w * 0.5, h * 0.63);
    pg.bezierVertex(w * 0.45, h * 0.64, w * 0.4, h * 0.63, w * 0.38, h * 0.62);
    pg.vertex(w * 0.38, h * 0.59);
    pg.bezierVertex(w * 0.42, h * 0.6, w * 0.48, h * 0.61, w * 0.5, h * 0.6);
    pg.bezierVertex(w * 0.55, h * 0.59, w * 0.58, h * 0.55, w * 0.6, h * 0.52);
    pg.endShape(CLOSE);

    // Left hand (resting on right arm)
    pg.fill(200, 170, 135);
    pg.beginShape();
    pg.vertex(w * 0.38, h * 0.57);
    pg.bezierVertex(w * 0.35, h * 0.58, w * 0.33, h * 0.62, w * 0.35, h * 0.65);
    pg.bezierVertex(w * 0.37, h * 0.67, w * 0.42, h * 0.68, w * 0.45, h * 0.67);
    pg.bezierVertex(w * 0.48, h * 0.66, w * 0.5, h * 0.64, w * 0.5, h * 0.62);
    pg.bezierVertex(w * 0.5, h * 0.6, w * 0.48, h * 0.58, w * 0.45, h * 0.57);
    pg.endShape(CLOSE);

    // Finger creases on left hand
    pg.stroke(175, 148, 118, 80);
    pg.strokeWeight(w * 0.002);
    pg.line(w * 0.39, h * 0.62, w * 0.42, h * 0.63);
    pg.line(w * 0.41, h * 0.63, w * 0.44, h * 0.645);
    pg.line(w * 0.43, h * 0.645, w * 0.46, h * 0.655);

    // Finger creases on right hand
    pg.line(w * 0.47, h * 0.6, w * 0.5, h * 0.605);
    pg.line(w * 0.49, h * 0.61, w * 0.52, h * 0.615);

    // Armrest hint
    pg.noStroke();
    pg.fill(70, 60, 45, 150);
    pg.beginShape();
    pg.vertex(w * 0.2, h * 0.55);
    pg.vertex(w * 0.25, h * 0.52);
    pg.vertex(w * 0.32, h * 0.55);
    pg.vertex(w * 0.32, h * 0.7);
    pg.vertex(w * 0.2, h * 0.7);
    pg.endShape(CLOSE);

    // Sfumato overlay - soft atmospheric haze
    for (var i = 0; i < 8; i++) {
      pg.fill(62, 55, 40, 8);
      pg.noStroke();
      pg.rect(0, 0, w, h);
    }

    // Darken edges (vignette effect)
    for (var e = 0; e < 40; e++) {
      var alpha = map(e, 0, 40, 25, 0);
      pg.noFill();
      pg.stroke(30, 25, 18, alpha);
      pg.strokeWeight(w * 0.01);
      pg.rect(e * w * 0.005, e * h * 0.005, w - e * w * 0.01, h - e * h * 0.01);
    }
  },
});
