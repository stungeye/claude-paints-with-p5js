/*
 * Starry Night by Vincent van Gogh (1889)
 *
 * Description: A night sky dominated by swirling, turbulent clouds and
 * brilliant stars with luminous halos. A crescent moon blazes in the upper
 * right. A dark flame-like cypress tree rises on the left. Below, a small
 * village nestles in rolling hills, with a prominent church spire. The
 * palette is dominated by deep blues, with vivid yellows for stars and moon.
 *
 * Approach: Build the swirling sky with concentric curved strokes radiating
 * outward in spirals. Stars are rendered as bright yellow circles with
 * radiating halos. The cypress is a dark, flame-shaped form. The village
 * is a collection of small geometric shapes. Rolling hills separate sky
 * from village. Heavy use of short curved strokes to evoke Van Gogh's
 * impasto brushwork.
 */

paintings.push({
  title: "Starry Night",
  artist: "Vincent van Gogh",
  year: "1889",
  filename: "Vincent van Gogh - Starry Night",
  aspectRatio: 1.25,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    randomSeed(1889);

    // Base sky - deep blue
    pg.background(25, 35, 80);

    // Sky gradient - slightly lighter toward horizon
    for (var y = 0; y < h * 0.7; y++) {
      var t = y / (h * 0.7);
      var c = lerpColor(color(20, 30, 85), color(35, 55, 105), t);
      pg.stroke(c);
      pg.line(0, y, w, y);
    }

    // === SWIRLING SKY STROKES ===
    // Main swirl centers
    var swirls = [
      { x: w * 0.45, y: h * 0.25, r: w * 0.15 },
      { x: w * 0.7, y: h * 0.2, r: w * 0.1 },
      { x: w * 0.3, y: h * 0.15, r: w * 0.08 },
      { x: w * 0.55, y: h * 0.35, r: w * 0.12 },
    ];

    // Draw swirling brush strokes
    for (var si = 0; si < swirls.length; si++) {
      var sw = swirls[si];
      for (var ring = 0; ring < 20; ring++) {
        var radius = sw.r * 0.2 + ring * sw.r * 0.06;
        pg.noFill();

        var blueVal = 100 + sin(ring * 0.5) * 60;
        var greenVal = 60 + sin(ring * 0.3 + 1) * 40;
        pg.stroke(30 + ring * 3, greenVal, blueVal, 180);
        pg.strokeWeight(w * 0.006 + random(w * 0.003));

        pg.beginShape();
        for (var a = 0; a < TWO_PI; a += 0.15) {
          var rr =
            radius +
            sin(a * 3 + ring) * w * 0.008 +
            random(-w * 0.003, w * 0.003);
          pg.curveVertex(sw.x + cos(a) * rr, sw.y + sin(a) * rr);
        }
        pg.endShape();
      }
    }

    // Additional flowing strokes across the sky
    for (var fs = 0; fs < 80; fs++) {
      var fy = random(h * 0.05, h * 0.55);
      var fx = random(-w * 0.1, w * 0.5);
      pg.noFill();
      var blueC = color(
        30 + random(30),
        50 + random(50),
        120 + random(80),
        100 + random(80),
      );
      pg.stroke(blueC);
      pg.strokeWeight(w * 0.004 + random(w * 0.004));
      pg.beginShape();
      for (var fp = 0; fp < floor(random(5, 15)); fp++) {
        pg.curveVertex(fx, fy + sin(fx * 0.02) * h * 0.02);
        fx += random(w * 0.03, w * 0.08);
        fy += random(-h * 0.02, h * 0.02);
      }
      pg.endShape();
    }

    // === STARS ===
    var starPositions = [
      { x: w * 0.2, y: h * 0.12, s: w * 0.04 },
      { x: w * 0.35, y: h * 0.08, s: w * 0.035 },
      { x: w * 0.5, y: h * 0.05, s: w * 0.04 },
      { x: w * 0.62, y: h * 0.1, s: w * 0.035 },
      { x: w * 0.75, y: h * 0.15, s: w * 0.03 },
      { x: w * 0.48, y: h * 0.18, s: w * 0.035 },
      { x: w * 0.15, y: h * 0.25, s: w * 0.03 },
      { x: w * 0.82, y: h * 0.08, s: w * 0.03 },
      { x: w * 0.58, y: h * 0.28, s: w * 0.025 },
    ];

    for (var sti = 0; sti < starPositions.length; sti++) {
      var star = starPositions[sti];
      // Outer glow
      pg.noStroke();
      pg.fill(255, 255, 200, 30);
      pg.ellipse(star.x, star.y, star.s * 3, star.s * 3);
      pg.fill(255, 255, 180, 50);
      pg.ellipse(star.x, star.y, star.s * 2, star.s * 2);
      // Star body
      pg.fill(255, 240, 120);
      pg.ellipse(star.x, star.y, star.s, star.s);
      pg.fill(255, 255, 200);
      pg.ellipse(star.x, star.y, star.s * 0.5, star.s * 0.5);

      // Radiating strokes around star
      pg.stroke(255, 240, 120, 120);
      pg.strokeWeight(w * 0.003);
      for (var sr = 0; sr < 8; sr++) {
        var sa = (sr * PI) / 4 + random(-0.2, 0.2);
        var sl = star.s * 0.8 + random(star.s * 0.3);
        pg.line(
          star.x + cos(sa) * star.s * 0.4,
          star.y + sin(sa) * star.s * 0.4,
          star.x + cos(sa) * sl,
          star.y + sin(sa) * sl,
        );
      }
    }

    // === CRESCENT MOON (upper right) ===
    var mx = w * 0.88;
    var my = h * 0.1;
    var ms = w * 0.06;

    pg.noStroke();
    // Moon glow
    pg.fill(255, 255, 180, 25);
    pg.ellipse(mx, my, ms * 4, ms * 4);
    pg.fill(255, 255, 180, 40);
    pg.ellipse(mx, my, ms * 2.5, ms * 2.5);

    // Moon body - bright yellow
    pg.fill(255, 240, 100);
    pg.ellipse(mx, my, ms, ms);

    // Crescent cutout
    pg.fill(30, 45, 100);
    pg.ellipse(mx + ms * 0.2, my - ms * 0.05, ms * 0.7, ms * 0.8);

    // === CYPRESS TREE (left foreground) ===
    pg.noStroke();
    // Dark flame-like shape
    pg.fill(15, 30, 25);
    pg.beginShape();
    pg.vertex(w * 0.1, h * 0.95);
    pg.bezierVertex(w * 0.06, h * 0.7, w * 0.04, h * 0.5, w * 0.08, h * 0.15);
    pg.bezierVertex(w * 0.09, h * 0.08, w * 0.11, h * 0.05, w * 0.12, h * 0.08);
    pg.bezierVertex(w * 0.14, h * 0.12, w * 0.15, h * 0.2, w * 0.16, h * 0.15);
    pg.bezierVertex(w * 0.17, h * 0.2, w * 0.18, h * 0.5, w * 0.16, h * 0.7);
    pg.vertex(w * 0.15, h * 0.95);
    pg.endShape(CLOSE);

    // Cypress internal swirls
    pg.stroke(30, 55, 40, 150);
    pg.strokeWeight(w * 0.004);
    pg.noFill();
    for (var cy = 0; cy < 8; cy++) {
      var cyy = h * 0.2 + cy * h * 0.09;
      pg.beginShape();
      for (var ca = 0; ca < PI * 1.5; ca += 0.3) {
        var cr = w * 0.015 + ca * w * 0.005;
        pg.curveVertex(
          w * 0.12 + cos(ca + cy) * cr,
          cyy + sin(ca + cy) * cr * 0.5,
        );
      }
      pg.endShape();
    }

    // Dark green highlights on cypress
    pg.stroke(20, 50, 35, 120);
    pg.strokeWeight(w * 0.006);
    pg.noFill();
    pg.bezier(
      w * 0.1,
      h * 0.8,
      w * 0.09,
      h * 0.6,
      w * 0.11,
      h * 0.4,
      w * 0.12,
      h * 0.15,
    );
    pg.bezier(
      w * 0.14,
      h * 0.85,
      w * 0.15,
      h * 0.6,
      w * 0.13,
      h * 0.35,
      w * 0.14,
      h * 0.12,
    );

    // === ROLLING HILLS ===
    pg.noStroke();
    // Dark blue/green hills
    pg.fill(25, 50, 65);
    pg.beginShape();
    pg.vertex(0, h * 0.68);
    pg.bezierVertex(w * 0.15, h * 0.6, w * 0.3, h * 0.65, w * 0.5, h * 0.58);
    pg.bezierVertex(w * 0.65, h * 0.52, w * 0.8, h * 0.55, w, h * 0.5);
    pg.vertex(w, h);
    pg.vertex(0, h);
    pg.endShape(CLOSE);

    // Lighter hill layer
    pg.fill(35, 65, 60);
    pg.beginShape();
    pg.vertex(0, h * 0.72);
    pg.bezierVertex(w * 0.2, h * 0.68, w * 0.4, h * 0.72, w * 0.6, h * 0.65);
    pg.bezierVertex(w * 0.75, h * 0.6, w * 0.9, h * 0.62, w, h * 0.58);
    pg.vertex(w, h);
    pg.vertex(0, h);
    pg.endShape(CLOSE);

    // Brush stroke textures on hills
    pg.strokeWeight(w * 0.004);
    for (var hs = 0; hs < 60; hs++) {
      var hx = random(w);
      var hy = random(h * 0.6, h * 0.75);
      pg.stroke(30 + random(30), 55 + random(30), 50 + random(30), 120);
      pg.line(
        hx,
        hy,
        hx + random(-w * 0.02, w * 0.02),
        hy + random(-h * 0.005, h * 0.005),
      );
    }

    // === VILLAGE ===
    pg.noStroke();

    // Houses - small rectangles with orange-lit windows
    var houses = [
      { x: w * 0.28, y: h * 0.72 },
      { x: w * 0.33, y: h * 0.73 },
      { x: w * 0.38, y: h * 0.71 },
      { x: w * 0.42, y: h * 0.72 },
      { x: w * 0.47, y: h * 0.7 },
      { x: w * 0.52, y: h * 0.71 },
      { x: w * 0.56, y: h * 0.72 },
      { x: w * 0.6, y: h * 0.7 },
      { x: w * 0.65, y: h * 0.71 },
      { x: w * 0.7, y: h * 0.72 },
    ];

    for (var hi = 0; hi < houses.length; hi++) {
      var hh = houses[hi];
      var houseH = h * 0.03 + random(h * 0.02);
      var houseW = w * 0.025 + random(w * 0.01);

      // House body
      pg.fill(50 + random(30), 50 + random(20), 45 + random(15));
      pg.rect(hh.x - houseW / 2, hh.y - houseH, houseW, houseH);

      // Roof
      pg.fill(60 + random(20), 40 + random(20), 30 + random(15));
      pg.triangle(
        hh.x - houseW / 2 - w * 0.003,
        hh.y - houseH,
        hh.x + houseW / 2 + w * 0.003,
        hh.y - houseH,
        hh.x,
        hh.y - houseH - h * 0.018,
      );

      // Lit window
      pg.fill(255, 220, 100, 200);
      pg.rect(hh.x - w * 0.004, hh.y - houseH * 0.7, w * 0.008, h * 0.01);
    }

    // Church spire (prominent)
    var chX = w * 0.48;
    var chY = h * 0.7;
    pg.fill(55, 55, 50);
    pg.rect(chX - w * 0.012, chY - h * 0.08, w * 0.024, h * 0.08);
    // Spire
    pg.fill(50, 45, 40);
    pg.triangle(
      chX - w * 0.015,
      chY - h * 0.08,
      chX + w * 0.015,
      chY - h * 0.08,
      chX,
      chY - h * 0.15,
    );

    // === FOREGROUND (bottom) ===
    pg.fill(20, 35, 30);
    pg.beginShape();
    pg.vertex(0, h * 0.82);
    pg.bezierVertex(w * 0.1, h * 0.78, w * 0.2, h * 0.82, w * 0.3, h * 0.8);
    pg.vertex(w * 0.3, h);
    pg.vertex(0, h);
    pg.endShape(CLOSE);

    // Texture strokes across whole sky for Van Gogh brush effect
    for (var bs = 0; bs < 300; bs++) {
      var bx = random(w);
      var by = random(h * 0.55);
      var bAngle = noise(bx * 0.005, by * 0.005) * TWO_PI;
      var bLen = random(w * 0.01, w * 0.025);

      var bBlue = 80 + random(100);
      var bGreen = 40 + random(60);
      pg.stroke(20 + random(20), bGreen, bBlue, 60 + random(60));
      pg.strokeWeight(w * 0.003 + random(w * 0.003));
      pg.line(bx, by, bx + cos(bAngle) * bLen, by + sin(bAngle) * bLen);
    }
  },
});
