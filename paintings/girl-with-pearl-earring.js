/*
 * Girl with a Pearl Earring by Johannes Vermeer (c. 1665)
 *
 * Description: A head-and-shoulders portrait of a young girl turning to
 * look over her left shoulder at the viewer. She wears an exotic blue and
 * gold turban/headwrap and a large teardrop pearl earring that catches
 * the light brilliantly. Her lips are slightly parted. The background is
 * very dark, almost black, creating striking contrast with her luminous
 * skin and the gleaming pearl. Often called "the Dutch Mona Lisa."
 *
 * Approach: Dark background to make the figure glow. Careful attention
 * to the iconic blue/gold turban, the luminous pearl earring, and the
 * soft, glowing quality of the skin. Use layered semi-transparent shapes
 * for the soft modeling of the face. The composition is simple - just
 * head and shoulders against darkness.
 */

paintings.push({
  title: "Girl with a Pearl Earring",
  artist: "Johannes Vermeer",
  year: "c. 1665",
  filename: "Johannes Vermeer - Girl with a Pearl Earring",
  aspectRatio: 0.856,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Very dark background
    pg.background(18, 18, 15);

    // Subtle gradient - slightly warmer in center
    pg.noStroke();
    pg.fill(25, 22, 18, 30);
    pg.ellipse(w * 0.45, h * 0.4, w * 0.9, h * 0.9);

    // === SHOULDERS / CLOTHING ===
    // Dark ochre/brown garment
    pg.fill(85, 70, 40);
    pg.beginShape();
    pg.vertex(w * 0.2, h * 0.72);
    pg.bezierVertex(w * 0.25, h * 0.65, w * 0.35, h * 0.6, w * 0.45, h * 0.58);
    pg.bezierVertex(w * 0.55, h * 0.57, w * 0.65, h * 0.6, w * 0.72, h * 0.66);
    pg.bezierVertex(w * 0.78, h * 0.72, w * 0.8, h * 0.8, w * 0.78, h);
    pg.vertex(w * 0.15, h);
    pg.bezierVertex(w * 0.15, h * 0.85, w * 0.18, h * 0.78, w * 0.2, h * 0.72);
    pg.endShape(CLOSE);

    // Collar/edge highlight
    pg.fill(100, 85, 50, 120);
    pg.beginShape();
    pg.vertex(w * 0.28, h * 0.67);
    pg.bezierVertex(w * 0.35, h * 0.62, w * 0.45, h * 0.6, w * 0.52, h * 0.59);
    pg.vertex(w * 0.52, h * 0.62);
    pg.bezierVertex(w * 0.45, h * 0.63, w * 0.35, h * 0.65, w * 0.3, h * 0.69);
    pg.endShape(CLOSE);

    // White collar edge
    pg.fill(210, 205, 195, 200);
    pg.beginShape();
    pg.vertex(w * 0.3, h * 0.67);
    pg.bezierVertex(w * 0.38, h * 0.62, w * 0.48, h * 0.6, w * 0.55, h * 0.59);
    pg.vertex(w * 0.55, h * 0.605);
    pg.bezierVertex(
      w * 0.48,
      h * 0.615,
      w * 0.38,
      h * 0.635,
      w * 0.32,
      h * 0.68,
    );
    pg.endShape(CLOSE);

    // === NECK ===
    pg.fill(220, 190, 158);
    pg.beginShape();
    pg.vertex(w * 0.4, h * 0.52);
    pg.bezierVertex(w * 0.38, h * 0.56, w * 0.36, h * 0.6, w * 0.35, h * 0.65);
    pg.vertex(w * 0.45, h * 0.63);
    pg.bezierVertex(w * 0.46, h * 0.58, w * 0.47, h * 0.55, w * 0.47, h * 0.52);
    pg.endShape(CLOSE);

    // Neck shadow
    pg.fill(190, 160, 130, 80);
    pg.beginShape();
    pg.vertex(w * 0.43, h * 0.54);
    pg.bezierVertex(w * 0.42, h * 0.58, w * 0.4, h * 0.62, w * 0.38, h * 0.65);
    pg.vertex(w * 0.4, h * 0.65);
    pg.bezierVertex(w * 0.42, h * 0.6, w * 0.44, h * 0.56, w * 0.45, h * 0.54);
    pg.endShape(CLOSE);

    // === FACE ===
    var faceX = w * 0.45;
    var faceY = h * 0.38;
    var faceW = w * 0.2;
    var faceH = h * 0.22;

    // Base face shape (turned 3/4 toward viewer)
    pg.fill(225, 195, 165);
    pg.ellipse(faceX, faceY, faceW, faceH);

    // Cheek warmth
    pg.fill(230, 190, 155, 60);
    pg.ellipse(
      faceX - faceW * 0.15,
      faceY + faceH * 0.1,
      faceW * 0.35,
      faceH * 0.25,
    );

    // Forehead highlight
    pg.fill(235, 205, 175, 80);
    pg.ellipse(
      faceX + faceW * 0.05,
      faceY - faceH * 0.15,
      faceW * 0.5,
      faceH * 0.3,
    );

    // Shadow side (left side of face as we see it)
    pg.fill(195, 165, 135, 60);
    pg.ellipse(
      faceX + faceW * 0.2,
      faceY + faceH * 0.05,
      faceW * 0.3,
      faceH * 0.5,
    );

    // Chin
    pg.fill(222, 192, 162, 80);
    pg.ellipse(
      faceX - faceW * 0.05,
      faceY + faceH * 0.4,
      faceW * 0.35,
      faceH * 0.2,
    );

    // === EYES (large, doe-like, looking at viewer) ===
    // Left eye (her right, our left)
    var eyeY = faceY - faceH * 0.05;
    var leftEyeX = faceX - faceW * 0.15;
    var rightEyeX = faceX + faceW * 0.12;

    // Eye whites
    pg.fill(235, 230, 225);
    pg.ellipse(leftEyeX, eyeY, faceW * 0.12, faceH * 0.05);
    pg.ellipse(rightEyeX, eyeY, faceW * 0.1, faceH * 0.045);

    // Irises
    pg.fill(65, 55, 40);
    pg.ellipse(leftEyeX, eyeY, faceW * 0.07, faceH * 0.045);
    pg.ellipse(rightEyeX, eyeY, faceW * 0.06, faceH * 0.04);

    // Pupils
    pg.fill(15, 12, 10);
    pg.ellipse(leftEyeX, eyeY, faceW * 0.035, faceH * 0.03);
    pg.ellipse(rightEyeX, eyeY, faceW * 0.03, faceH * 0.025);

    // Eye highlights
    pg.fill(255, 255, 245, 200);
    pg.ellipse(
      leftEyeX + faceW * 0.01,
      eyeY - faceH * 0.008,
      faceW * 0.015,
      faceH * 0.01,
    );
    pg.ellipse(
      rightEyeX + faceW * 0.01,
      eyeY - faceH * 0.008,
      faceW * 0.012,
      faceH * 0.008,
    );

    // Upper eyelids
    pg.noFill();
    pg.stroke(140, 115, 90);
    pg.strokeWeight(w * 0.003);
    pg.arc(leftEyeX, eyeY, faceW * 0.13, faceH * 0.06, PI + 0.2, TWO_PI - 0.2);
    pg.arc(
      rightEyeX,
      eyeY,
      faceW * 0.11,
      faceH * 0.055,
      PI + 0.2,
      TWO_PI - 0.2,
    );

    // Lower eyelid hint
    pg.stroke(180, 155, 130, 80);
    pg.strokeWeight(w * 0.002);
    pg.arc(leftEyeX, eyeY, faceW * 0.12, faceH * 0.04, 0.3, PI - 0.3);

    // Eyebrows (very subtle)
    pg.stroke(150, 125, 100, 80);
    pg.strokeWeight(w * 0.003);
    pg.noFill();
    pg.arc(
      leftEyeX,
      eyeY - faceH * 0.06,
      faceW * 0.15,
      faceH * 0.04,
      PI + 0.4,
      TWO_PI - 0.4,
    );
    pg.arc(
      rightEyeX,
      eyeY - faceH * 0.06,
      faceW * 0.13,
      faceH * 0.04,
      PI + 0.4,
      TWO_PI - 0.4,
    );

    // === NOSE ===
    pg.noStroke();
    pg.fill(210, 178, 148, 60);
    pg.ellipse(
      faceX - faceW * 0.02,
      faceY + faceH * 0.08,
      faceW * 0.08,
      faceH * 0.12,
    );

    pg.stroke(190, 162, 135, 100);
    pg.strokeWeight(w * 0.002);
    pg.noFill();
    pg.arc(
      faceX - faceW * 0.04,
      faceY + faceH * 0.12,
      faceW * 0.06,
      faceH * 0.04,
      -0.3,
      PI * 0.8,
    );

    // Nose highlight
    pg.noStroke();
    pg.fill(235, 210, 180, 60);
    pg.ellipse(
      faceX - faceW * 0.02,
      faceY + faceH * 0.04,
      faceW * 0.04,
      faceH * 0.06,
    );

    // === MOUTH (slightly parted, moist) ===
    var mouthY = faceY + faceH * 0.25;

    // Upper lip
    pg.fill(195, 120, 110);
    pg.beginShape();
    pg.vertex(faceX - faceW * 0.1, mouthY);
    pg.bezierVertex(
      faceX - faceW * 0.05,
      mouthY - faceH * 0.02,
      faceX,
      mouthY - faceH * 0.025,
      faceX + faceW * 0.02,
      mouthY,
    );
    pg.bezierVertex(
      faceX - faceW * 0.02,
      mouthY + faceH * 0.005,
      faceX - faceW * 0.06,
      mouthY + faceH * 0.005,
      faceX - faceW * 0.1,
      mouthY,
    );
    pg.endShape(CLOSE);

    // Lower lip (fuller)
    pg.fill(205, 135, 120);
    pg.beginShape();
    pg.vertex(faceX - faceW * 0.09, mouthY + faceH * 0.005);
    pg.bezierVertex(
      faceX - faceW * 0.04,
      mouthY + faceH * 0.04,
      faceX,
      mouthY + faceH * 0.04,
      faceX + faceW * 0.02,
      mouthY + faceH * 0.005,
    );
    pg.bezierVertex(
      faceX - faceW * 0.02,
      mouthY + faceH * 0.005,
      faceX - faceW * 0.06,
      mouthY + faceH * 0.003,
      faceX - faceW * 0.09,
      mouthY + faceH * 0.005,
    );
    pg.endShape(CLOSE);

    // Lip highlight
    pg.fill(230, 180, 165, 100);
    pg.ellipse(
      faceX - faceW * 0.04,
      mouthY + faceH * 0.02,
      faceW * 0.06,
      faceH * 0.015,
    );

    // Mouth parting line
    pg.stroke(150, 90, 80, 100);
    pg.strokeWeight(w * 0.002);
    pg.line(
      faceX - faceW * 0.09,
      mouthY + faceH * 0.003,
      faceX + faceW * 0.02,
      mouthY + faceH * 0.003,
    );

    // === BLUE AND GOLD TURBAN ===
    pg.noStroke();

    // Main blue cloth
    pg.fill(50, 85, 140);
    pg.beginShape();
    pg.vertex(faceX + faceW * 0.1, faceY - faceH * 0.35);
    pg.bezierVertex(
      faceX - faceW * 0.1,
      faceY - faceH * 0.55,
      faceX - faceW * 0.5,
      faceY - faceH * 0.45,
      faceX - faceW * 0.55,
      faceY - faceH * 0.2,
    );
    pg.bezierVertex(
      faceX - faceW * 0.58,
      faceY,
      faceX - faceW * 0.55,
      faceY + faceH * 0.15,
      faceX - faceW * 0.4,
      faceY + faceH * 0.25,
    );
    pg.bezierVertex(
      faceX - faceW * 0.3,
      faceY + faceH * 0.3,
      faceX - faceW * 0.1,
      faceY + faceH * 0.3,
      faceX + faceW * 0.1,
      faceY + faceH * 0.2,
    );
    pg.bezierVertex(
      faceX + faceW * 0.25,
      faceY + faceH * 0.12,
      faceX + faceW * 0.35,
      faceY,
      faceX + faceW * 0.35,
      faceY - faceH * 0.15,
    );
    pg.bezierVertex(
      faceX + faceW * 0.35,
      faceY - faceH * 0.3,
      faceX + faceW * 0.25,
      faceY - faceH * 0.4,
      faceX + faceW * 0.1,
      faceY - faceH * 0.35,
    );
    pg.endShape(CLOSE);

    // Turban highlight (ultramarine blue)
    pg.fill(60, 100, 165, 150);
    pg.ellipse(
      faceX - faceW * 0.15,
      faceY - faceH * 0.35,
      faceW * 0.5,
      faceH * 0.25,
    );

    // Turban shadow
    pg.fill(30, 55, 100, 100);
    pg.ellipse(
      faceX + faceW * 0.15,
      faceY - faceH * 0.1,
      faceW * 0.3,
      faceH * 0.25,
    );

    // Gold/yellow cloth draped down
    pg.fill(190, 165, 70);
    pg.beginShape();
    pg.vertex(faceX + faceW * 0.2, faceY - faceH * 0.15);
    pg.bezierVertex(
      faceX + faceW * 0.35,
      faceY - faceH * 0.08,
      faceX + faceW * 0.3,
      faceY + faceH * 0.15,
      faceX + faceW * 0.15,
      faceY + faceH * 0.3,
    );
    pg.bezierVertex(
      faceX + faceW * 0.1,
      faceY + faceH * 0.4,
      faceX,
      faceY + faceH * 0.5,
      faceX - faceW * 0.05,
      faceY + faceH * 0.55,
    );
    pg.vertex(faceX + faceW * 0.02, faceY + faceH * 0.55);
    pg.bezierVertex(
      faceX + w * 0.03,
      faceY + faceH * 0.45,
      faceX + faceW * 0.15,
      faceY + faceH * 0.35,
      faceX + faceW * 0.22,
      faceY + faceH * 0.2,
    );
    pg.bezierVertex(
      faceX + faceW * 0.3,
      faceY + faceH * 0.08,
      faceX + faceW * 0.28,
      faceY - faceH * 0.05,
      faceX + faceW * 0.2,
      faceY - faceH * 0.15,
    );
    pg.endShape(CLOSE);

    // Gold cloth highlight
    pg.fill(210, 190, 90, 100);
    pg.ellipse(
      faceX + faceW * 0.22,
      faceY + faceH * 0.05,
      faceW * 0.12,
      faceH * 0.2,
    );

    // Turban fold lines
    pg.stroke(35, 65, 110, 60);
    pg.strokeWeight(w * 0.002);
    pg.noFill();
    pg.bezier(
      faceX - faceW * 0.3,
      faceY - faceH * 0.1,
      faceX - faceW * 0.1,
      faceY - faceH * 0.25,
      faceX + faceW * 0.1,
      faceY - faceH * 0.3,
      faceX + faceW * 0.2,
      faceY - faceH * 0.2,
    );
    pg.bezier(
      faceX - faceW * 0.35,
      faceY + faceH * 0.05,
      faceX - faceW * 0.2,
      faceY - faceH * 0.15,
      faceX + faceW * 0.05,
      faceY - faceH * 0.2,
      faceX + faceW * 0.25,
      faceY - faceH * 0.1,
    );

    // === PEARL EARRING (the key element) ===
    var pearlX = faceX - faceW * 0.22;
    var pearlY = faceY + faceH * 0.35;
    var pearlSize = w * 0.035;

    // Pearl shadow
    pg.noStroke();
    pg.fill(120, 100, 80, 60);
    pg.ellipse(
      pearlX + w * 0.003,
      pearlY + h * 0.005,
      pearlSize * 1.2,
      pearlSize * 1.3,
    );

    // Pearl base - warm gray
    pg.fill(215, 215, 210);
    pg.ellipse(pearlX, pearlY, pearlSize, pearlSize * 1.15);

    // Pearl luminosity layers
    pg.fill(230, 230, 225, 150);
    pg.ellipse(
      pearlX - pearlSize * 0.1,
      pearlY - pearlSize * 0.1,
      pearlSize * 0.7,
      pearlSize * 0.8,
    );

    // Pearl bright highlight
    pg.fill(255, 255, 250, 220);
    pg.ellipse(
      pearlX - pearlSize * 0.15,
      pearlY - pearlSize * 0.2,
      pearlSize * 0.3,
      pearlSize * 0.35,
    );

    // Pearl secondary highlight (bottom)
    pg.fill(240, 240, 235, 100);
    pg.ellipse(
      pearlX + pearlSize * 0.05,
      pearlY + pearlSize * 0.25,
      pearlSize * 0.25,
      pearlSize * 0.2,
    );

    // Ear visible
    pg.fill(218, 188, 158);
    pg.ellipse(
      faceX - faceW * 0.3,
      faceY + faceH * 0.15,
      faceW * 0.06,
      faceH * 0.08,
    );

    // Earring wire
    pg.stroke(200, 190, 160, 120);
    pg.strokeWeight(w * 0.002);
    pg.line(
      faceX - faceW * 0.28,
      faceY + faceH * 0.2,
      pearlX,
      pearlY - pearlSize * 0.5,
    );

    // Overall warm glow on skin
    pg.noStroke();
    pg.fill(240, 220, 190, 15);
    pg.ellipse(faceX, faceY, faceW * 1.2, faceH * 1.2);
  },
});
