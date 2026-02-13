/*
 * Composition 8 by Wassily Kandinsky (1923)
 *
 * Description: An abstract geometric composition on a light/cream 
 * background. Features a large dark circle in the upper left, intersecting
 * lines and geometric shapes including triangles, circles, semi-circles,
 * checkerboard patterns, and various colored forms. Diagonal lines cross
 * the canvas. Primary colors (red, blue, yellow) alongside black, with
 * a dynamic, musical quality to the arrangement.
 *
 * Approach: Start with a light cream background. Place geometric elements
 * systematically: large circle upper-left, grid of smaller elements,
 * intersecting diagonal lines, triangles, arcs, and small circles. Use
 * Kandinsky's characteristic color combinations. Achieve the sense of
 * dynamic tension and balance through careful placement.
 */

paintings.push({
  title: "Composition 8",
  artist: "Wassily Kandinsky",
  year: "1923",
  filename: "Wassily Kandinsky - Composition 8",
  aspectRatio: 1.436,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Light cream/yellow background
    pg.background(240, 235, 215);

    // Subtle gradient
    for (var y = 0; y < h; y++) {
      var t = y / h;
      var c = lerpColor(color(242, 238, 220), color(235, 230, 210), t);
      pg.stroke(c);
      pg.line(0, y, w, y);
    }

    // === LARGE DARK CIRCLE (upper left) ===
    pg.noStroke();
    pg.fill(25, 25, 35);
    pg.ellipse(w * 0.18, h * 0.22, w * 0.2, w * 0.2);

    // Concentric circle inside
    pg.fill(80, 60, 100);
    pg.ellipse(w * 0.18, h * 0.22, w * 0.12, w * 0.12);

    // === MAJOR DIAGONAL LINES ===
    pg.stroke(20, 20, 25);
    pg.strokeWeight(w * 0.003);
    pg.line(w * 0.1, h * 0.15, w * 0.75, h * 0.55);
    pg.line(w * 0.05, h * 0.35, w * 0.85, h * 0.25);

    pg.stroke(20, 20, 25, 180);
    pg.strokeWeight(w * 0.002);
    pg.line(w * 0.3, h * 0.05, w * 0.65, h * 0.95);
    pg.line(w * 0.15, h * 0.6, w * 0.9, h * 0.3);

    // Thinner crossing lines
    pg.strokeWeight(w * 0.001);
    pg.line(w * 0.25, h * 0.1, w * 0.55, h * 0.9);
    pg.line(w * 0.6, h * 0.05, w * 0.9, h * 0.7);
    pg.line(w * 0.4, h * 0.1, w * 0.2, h * 0.8);

    // === GRID / CHECKERBOARD area ===
    var gx = w * 0.55;
    var gy = h * 0.12;
    var gs = w * 0.015;
    for (var gr = 0; gr < 5; gr++) {
      for (var gc = 0; gc < 5; gc++) {
        if ((gr + gc) % 2 === 0) {
          pg.fill(20, 20, 25);
        } else {
          pg.fill(240, 235, 215);
        }
        pg.noStroke();
        pg.rect(gx + gc * gs, gy + gr * gs, gs, gs);
      }
    }

    // === TRIANGLES ===
    pg.noFill();
    // Large triangle
    pg.stroke(200, 60, 50);
    pg.strokeWeight(w * 0.003);
    pg.triangle(w * 0.35, h * 0.15, w * 0.55, h * 0.45, w * 0.22, h * 0.42);

    // Smaller blue triangle
    pg.stroke(40, 60, 160);
    pg.strokeWeight(w * 0.002);
    pg.triangle(w * 0.6, h * 0.35, w * 0.72, h * 0.55, w * 0.5, h * 0.5);

    // Filled yellow triangle
    pg.fill(230, 200, 50, 150);
    pg.noStroke();
    pg.triangle(w * 0.4, h * 0.55, w * 0.52, h * 0.75, w * 0.32, h * 0.72);

    // Small black triangles
    pg.fill(20, 20, 25);
    pg.triangle(w * 0.7, h * 0.15, w * 0.74, h * 0.22, w * 0.67, h * 0.2);
    pg.triangle(w * 0.8, h * 0.4, w * 0.85, h * 0.48, w * 0.77, h * 0.46);

    // === CIRCLES (various sizes and colors) ===
    pg.noStroke();

    // Medium violet circle
    pg.fill(130, 80, 160, 180);
    pg.ellipse(w * 0.4, h * 0.3, w * 0.06, w * 0.06);

    // Small red circle
    pg.fill(200, 50, 40);
    pg.ellipse(w * 0.55, h * 0.6, w * 0.04, w * 0.04);

    // Small blue circle
    pg.fill(40, 70, 170);
    pg.ellipse(w * 0.72, h * 0.65, w * 0.035, w * 0.035);

    // Tiny circles scattered
    pg.fill(20, 20, 25);
    pg.ellipse(w * 0.3, h * 0.55, w * 0.012, w * 0.012);
    pg.ellipse(w * 0.65, h * 0.28, w * 0.01, w * 0.01);
    pg.ellipse(w * 0.82, h * 0.55, w * 0.008, w * 0.008);
    pg.ellipse(w * 0.48, h * 0.82, w * 0.01, w * 0.01);

    // Yellow circle
    pg.fill(230, 200, 50);
    pg.ellipse(w * 0.25, h * 0.7, w * 0.05, w * 0.05);

    // Orange circle
    pg.fill(220, 130, 40, 180);
    pg.ellipse(w * 0.6, h * 0.78, w * 0.045, w * 0.045);

    // White circle with black outline
    pg.fill(250, 248, 240);
    pg.stroke(20, 20, 25);
    pg.strokeWeight(w * 0.002);
    pg.ellipse(w * 0.15, h * 0.55, w * 0.04, w * 0.04);

    // === SEMI-CIRCLES / ARCS ===
    pg.noFill();
    pg.stroke(200, 60, 50);
    pg.strokeWeight(w * 0.003);
    pg.arc(w * 0.5, h * 0.45, w * 0.15, h * 0.15, PI, TWO_PI);

    pg.stroke(40, 60, 160);
    pg.strokeWeight(w * 0.002);
    pg.arc(w * 0.35, h * 0.65, w * 0.1, h * 0.1, 0, PI);

    pg.stroke(20, 20, 25);
    pg.strokeWeight(w * 0.002);
    pg.arc(w * 0.75, h * 0.35, w * 0.08, h * 0.08, HALF_PI, PI + HALF_PI);

    // === WAVY LINES ===
    pg.stroke(20, 20, 25, 120);
    pg.strokeWeight(w * 0.0015);
    pg.noFill();
    pg.beginShape();
    for (var wl = 0; wl < 30; wl++) {
      pg.curveVertex(w * 0.1 + wl * w * 0.028, h * 0.85 + sin(wl * 0.8) * h * 0.03);
    }
    pg.endShape();

    // Another wavy line
    pg.beginShape();
    for (var wl2 = 0; wl2 < 20; wl2++) {
      pg.curveVertex(w * 0.05 + wl2 * w * 0.04, h * 0.45 + sin(wl2 * 0.6 + 1) * h * 0.025);
    }
    pg.endShape();

    // === ANGULAR LINE BURSTS (like arrows/rays) ===
    pg.stroke(20, 20, 25);
    pg.strokeWeight(w * 0.002);
    // From a point, radiating lines
    var bx = w * 0.78;
    var by = h * 0.18;
    for (var bl = 0; bl < 8; bl++) {
      var ba = bl * PI / 8 + PI * 0.6;
      pg.line(bx, by, bx + cos(ba) * w * 0.06, by + sin(ba) * h * 0.08);
    }

    // === POINTED FORMS ===
    // Arrow-like shape
    pg.fill(20, 20, 25);
    pg.noStroke();
    pg.triangle(w * 0.85, h * 0.7, w * 0.92, h * 0.73, w * 0.88, h * 0.68);
    pg.rect(w * 0.82, h * 0.705, w * 0.03, h * 0.005);

    // === COLORED RECTANGLES ===
    pg.fill(200, 60, 50, 100);
    pg.rect(w * 0.12, h * 0.4, w * 0.04, h * 0.06);

    pg.fill(40, 60, 160, 100);
    pg.rect(w * 0.62, h * 0.5, w * 0.05, h * 0.03);

    pg.fill(230, 200, 50, 100);
    pg.rect(w * 0.45, h * 0.08, w * 0.03, h * 0.05);

    // === DOTTED ELEMENTS ===
    pg.fill(20, 20, 25);
    pg.noStroke();
    for (var di = 0; di < 6; di++) {
      pg.ellipse(w * 0.22 + di * w * 0.02, h * 0.88, w * 0.005, w * 0.005);
    }
    for (var di2 = 0; di2 < 4; di2++) {
      pg.ellipse(w * 0.88, h * 0.55 + di2 * h * 0.03, w * 0.004, w * 0.004);
    }

    // Subtle pink/red area
    pg.fill(220, 150, 140, 40);
    pg.noStroke();
    pg.ellipse(w * 0.5, h * 0.5, w * 0.3, h * 0.25);
  },
});
