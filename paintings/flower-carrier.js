/*
 * The Flower Carrier (Cargador de Flores) by Diego Rivera (1935)
 *
 * Description: A figure bends under the enormous weight of a huge basket
 * overflowing with vibrant flowers on their back. They are on hands and
 * knees. Behind them, another figure (a woman) kneels and helps support
 * the heavy load. The flowers are brilliantly colored - large yellow,
 * pink, red, and purple blooms. The figures wear simple peasant clothing.
 * The background is a plain verdant green. Rivera's characteristic bold,
 * rounded forms and vivid palette.
 *
 * Approach: Bold, simple composition. Large figure bent forward carrying
 * oversized flower basket. Helper figure behind. Use bright, saturated
 * colors for the flowers. Strong outlines and rounded, voluminous forms
 * characteristic of Rivera's muralist style. Simple green background.
 */

paintings.push({
  title: "The Flower Carrier",
  artist: "Diego Rivera",
  year: "1935",
  filename: "Diego Rivera - The Flower Carrier",
  aspectRatio: 1.0,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Green background
    for (var y = 0; y < h; y++) {
      var t = y / h;
      var c = lerpColor(color(55, 100, 50), color(45, 85, 40), t);
      pg.stroke(c);
      pg.line(0, y, w, y);
    }

    // Ground - earthy
    pg.noStroke();
    pg.fill(100, 85, 55);
    pg.rect(0, h * 0.8, w, h * 0.2);
    pg.fill(90, 78, 50);
    pg.beginShape();
    pg.vertex(0, h * 0.78);
    pg.bezierVertex(w * 0.3, h * 0.82, w * 0.6, h * 0.79, w, h * 0.81);
    pg.vertex(w, h * 0.85);
    pg.vertex(0, h * 0.85);
    pg.endShape(CLOSE);

    // === HELPER FIGURE (woman, behind, kneeling) ===
    var hx = w * 0.6;
    var hy = h * 0.55;

    // Dark dress
    pg.fill(80, 50, 40);
    pg.stroke(50, 30, 25);
    pg.strokeWeight(w * 0.004);
    pg.beginShape();
    pg.vertex(hx - w * 0.06, hy - h * 0.05);
    pg.vertex(hx + w * 0.06, hy - h * 0.05);
    pg.vertex(hx + w * 0.08, hy + h * 0.2);
    pg.vertex(hx - w * 0.08, hy + h * 0.2);
    pg.endShape(CLOSE);

    // Head
    pg.noStroke();
    pg.fill(150, 110, 70);
    pg.ellipse(hx, hy - h * 0.08, w * 0.06, h * 0.07);

    // Dark hair
    pg.fill(30, 25, 20);
    pg.ellipse(hx, hy - h * 0.1, w * 0.06, h * 0.04);
    pg.ellipse(hx - w * 0.02, hy - h * 0.08, w * 0.03, h * 0.05);

    // Arms reaching up to support basket
    pg.fill(150, 110, 70);
    pg.stroke(50, 30, 25);
    pg.strokeWeight(w * 0.003);
    pg.beginShape();
    pg.vertex(hx - w * 0.04, hy - h * 0.04);
    pg.bezierVertex(
      hx - w * 0.08,
      hy - h * 0.1,
      hx - w * 0.12,
      hy - h * 0.15,
      hx - w * 0.1,
      hy - h * 0.2,
    );
    pg.vertex(hx - w * 0.08, hy - h * 0.2);
    pg.bezierVertex(
      hx - w * 0.1,
      hy - h * 0.14,
      hx - w * 0.06,
      hy - h * 0.08,
      hx - w * 0.03,
      hy - h * 0.02,
    );
    pg.endShape(CLOSE);

    pg.beginShape();
    pg.vertex(hx + w * 0.04, hy - h * 0.04);
    pg.bezierVertex(
      hx + w * 0.02,
      hy - h * 0.1,
      hx - w * 0.02,
      hy - h * 0.15,
      hx - w * 0.04,
      hy - h * 0.2,
    );
    pg.vertex(hx - w * 0.02, hy - h * 0.2);
    pg.bezierVertex(
      hx,
      hy - h * 0.14,
      hx + w * 0.03,
      hy - h * 0.08,
      hx + w * 0.05,
      hy - h * 0.02,
    );
    pg.endShape(CLOSE);

    // Hands
    pg.noStroke();
    pg.fill(150, 110, 70);
    pg.ellipse(hx - w * 0.09, hy - h * 0.2, w * 0.03, h * 0.025);

    // === MAIN CARRIER FIGURE (bent forward, on knees) ===
    var cx = w * 0.4;
    var cy = h * 0.65;

    // White pants/trousers
    pg.fill(225, 220, 210);
    pg.stroke(50, 30, 25);
    pg.strokeWeight(w * 0.004);
    // Left leg (kneeling)
    pg.beginShape();
    pg.vertex(cx - w * 0.08, cy + h * 0.02);
    pg.vertex(cx - w * 0.02, cy + h * 0.02);
    pg.vertex(cx - w * 0.04, cy + h * 0.18);
    pg.vertex(cx - w * 0.1, cy + h * 0.18);
    pg.endShape(CLOSE);
    // Right leg
    pg.beginShape();
    pg.vertex(cx + w * 0.02, cy + h * 0.02);
    pg.vertex(cx + w * 0.1, cy);
    pg.vertex(cx + w * 0.12, cy + h * 0.15);
    pg.vertex(cx + w * 0.04, cy + h * 0.18);
    pg.endShape(CLOSE);

    // Dark shirt/body
    pg.fill(55, 45, 35);
    pg.beginShape();
    pg.vertex(cx - w * 0.1, cy - h * 0.02);
    pg.bezierVertex(
      cx - w * 0.12,
      cy - h * 0.08,
      cx - w * 0.1,
      cy - h * 0.15,
      cx - w * 0.05,
      cy - h * 0.2,
    );
    pg.bezierVertex(
      cx,
      cy - h * 0.22,
      cx + w * 0.05,
      cy - h * 0.2,
      cx + w * 0.1,
      cy - h * 0.15,
    );
    pg.bezierVertex(
      cx + w * 0.12,
      cy - h * 0.1,
      cx + w * 0.12,
      cy - h * 0.05,
      cx + w * 0.1,
      cy,
    );
    pg.vertex(cx + w * 0.1, cy + h * 0.05);
    pg.vertex(cx - w * 0.1, cy + h * 0.05);
    pg.endShape(CLOSE);
    pg.noStroke();

    // Head bent down
    pg.fill(150, 110, 70);
    pg.ellipse(cx - w * 0.1, cy - h * 0.15, w * 0.07, h * 0.07);

    // Straw hat
    pg.fill(180, 160, 100);
    pg.stroke(140, 120, 70);
    pg.strokeWeight(w * 0.003);
    pg.ellipse(cx - w * 0.1, cy - h * 0.18, w * 0.12, h * 0.03);
    pg.arc(cx - w * 0.1, cy - h * 0.18, w * 0.09, h * 0.05, PI, TWO_PI);
    pg.noStroke();

    // Arms reaching down to ground
    pg.fill(150, 110, 70);
    // Left arm
    pg.beginShape();
    pg.vertex(cx - w * 0.12, cy - h * 0.1);
    pg.bezierVertex(
      cx - w * 0.16,
      cy - h * 0.05,
      cx - w * 0.18,
      cy + h * 0.02,
      cx - w * 0.15,
      cy + h * 0.08,
    );
    pg.vertex(cx - w * 0.13, cy + h * 0.08);
    pg.bezierVertex(
      cx - w * 0.15,
      cy + h * 0.02,
      cx - w * 0.14,
      cy - h * 0.04,
      cx - w * 0.1,
      cy - h * 0.08,
    );
    pg.endShape(CLOSE);
    // Right arm
    pg.beginShape();
    pg.vertex(cx + w * 0.08, cy - h * 0.08);
    pg.bezierVertex(
      cx + w * 0.1,
      cy - h * 0.02,
      cx + w * 0.08,
      cy + h * 0.05,
      cx + w * 0.06,
      cy + h * 0.1,
    );
    pg.vertex(cx + w * 0.04, cy + h * 0.09);
    pg.bezierVertex(
      cx + w * 0.06,
      cy + h * 0.04,
      cx + w * 0.08,
      cy - h * 0.01,
      cx + w * 0.06,
      cy - h * 0.06,
    );
    pg.endShape(CLOSE);

    // Hands on ground
    pg.fill(150, 110, 70);
    pg.ellipse(cx - w * 0.14, cy + h * 0.09, w * 0.035, h * 0.02);
    pg.ellipse(cx + w * 0.05, cy + h * 0.1, w * 0.035, h * 0.02);

    // Feet
    pg.fill(90, 60, 35);
    pg.ellipse(cx - w * 0.08, cy + h * 0.19, w * 0.04, h * 0.015);
    pg.ellipse(cx + w * 0.1, cy + h * 0.16, w * 0.04, h * 0.015);

    // === BASKET ===
    pg.fill(140, 110, 60);
    pg.stroke(100, 75, 40);
    pg.strokeWeight(w * 0.003);
    pg.beginShape();
    pg.vertex(cx - w * 0.15, cy - h * 0.2);
    pg.vertex(cx + w * 0.15, cy - h * 0.22);
    pg.vertex(cx + w * 0.12, cy - h * 0.08);
    pg.vertex(cx - w * 0.12, cy - h * 0.06);
    pg.endShape(CLOSE);

    // Basket weave pattern
    pg.stroke(120, 90, 50, 80);
    pg.strokeWeight(w * 0.002);
    for (var bw = 0; bw < 6; bw++) {
      var bwy = cy - h * 0.19 + bw * h * 0.02;
      pg.line(
        cx - w * 0.14 + bw * w * 0.005,
        bwy,
        cx + w * 0.14 - bw * w * 0.005,
        bwy + h * 0.002,
      );
    }

    // Basket strap over carrier's back
    pg.stroke(120, 95, 55);
    pg.strokeWeight(w * 0.01);
    pg.noFill();
    pg.bezier(
      cx - w * 0.13,
      cy - h * 0.14,
      cx - w * 0.05,
      cy - h * 0.05,
      cx + w * 0.05,
      cy - h * 0.02,
      cx + w * 0.12,
      cy - h * 0.12,
    );

    // === FLOWERS (overflowing from basket - the star of the painting) ===
    pg.noStroke();

    // Large yellow flowers
    var yellowFlowers = [
      [cx - w * 0.08, cy - h * 0.32, w * 0.08],
      [cx + w * 0.05, cy - h * 0.3, w * 0.07],
      [cx - w * 0.02, cy - h * 0.35, w * 0.06],
    ];
    for (var yf = 0; yf < yellowFlowers.length; yf++) {
      var fl = yellowFlowers[yf];
      pg.fill(240, 200, 50);
      for (var p = 0; p < 8; p++) {
        var pa = (p * TWO_PI) / 8;
        pg.ellipse(
          fl[0] + cos(pa) * fl[2] * 0.3,
          fl[1] + sin(pa) * fl[2] * 0.3,
          fl[2] * 0.4,
          fl[2] * 0.4,
        );
      }
      pg.fill(200, 150, 30);
      pg.ellipse(fl[0], fl[1], fl[2] * 0.3, fl[2] * 0.3);
    }

    // Large pink/red flowers
    var pinkFlowers = [
      [cx + w * 0.1, cy - h * 0.35, w * 0.07],
      [cx - w * 0.12, cy - h * 0.28, w * 0.065],
      [cx + w * 0.12, cy - h * 0.25, w * 0.06],
    ];
    for (var pf = 0; pf < pinkFlowers.length; pf++) {
      var pfl = pinkFlowers[pf];
      pg.fill(220, 70, 80);
      for (var pp = 0; pp < 6; pp++) {
        var ppa = (pp * TWO_PI) / 6;
        pg.ellipse(
          pfl[0] + cos(ppa) * pfl[2] * 0.25,
          pfl[1] + sin(ppa) * pfl[2] * 0.25,
          pfl[2] * 0.45,
          pfl[2] * 0.45,
        );
      }
      pg.fill(180, 40, 50);
      pg.ellipse(pfl[0], pfl[1], pfl[2] * 0.2, pfl[2] * 0.2);
    }

    // Purple flowers
    pg.fill(140, 60, 140);
    var purples = [
      [cx, cy - h * 0.28],
      [cx - w * 0.05, cy - h * 0.22],
      [cx + w * 0.08, cy - h * 0.22],
    ];
    for (var pui = 0; pui < purples.length; pui++) {
      for (var pup = 0; pup < 5; pup++) {
        var pupa = (pup * TWO_PI) / 5;
        pg.ellipse(
          purples[pui][0] + cos(pupa) * w * 0.015,
          purples[pui][1] + sin(pupa) * w * 0.015,
          w * 0.025,
          w * 0.025,
        );
      }
      pg.fill(100, 40, 100);
      pg.ellipse(purples[pui][0], purples[pui][1], w * 0.015, w * 0.015);
      pg.fill(140, 60, 140);
    }

    // Orange/marigold flowers
    pg.fill(230, 140, 30);
    var oranges = [
      [cx - w * 0.15, cy - h * 0.35],
      [cx + w * 0.15, cy - h * 0.32],
      [cx + w * 0.02, cy - h * 0.25],
    ];
    for (var oi = 0; oi < oranges.length; oi++) {
      for (var op = 0; op < 10; op++) {
        var opa = (op * TWO_PI) / 10;
        pg.ellipse(
          oranges[oi][0] + cos(opa) * w * 0.018,
          oranges[oi][1] + sin(opa) * w * 0.018,
          w * 0.018,
          w * 0.018,
        );
      }
    }

    // Green leaves among flowers
    pg.fill(50, 100, 40);
    var leaves = [
      [cx - w * 0.1, cy - h * 0.3],
      [cx + w * 0.02, cy - h * 0.32],
      [cx + w * 0.13, cy - h * 0.28],
      [cx - w * 0.04, cy - h * 0.24],
      [cx + w * 0.08, cy - h * 0.2],
      [cx - w * 0.14, cy - h * 0.22],
    ];
    for (var li = 0; li < leaves.length; li++) {
      pg.push();
      pg.translate(leaves[li][0], leaves[li][1]);
      pg.rotate(li * 0.8);
      pg.ellipse(0, 0, w * 0.04, w * 0.015);
      pg.pop();
    }

    // Small white accent flowers
    pg.fill(255, 250, 240);
    for (var wf = 0; wf < 8; wf++) {
      pg.ellipse(
        cx - w * 0.12 + wf * w * 0.035,
        cy - h * 0.23 - (wf % 3) * h * 0.05,
        w * 0.012,
        w * 0.012,
      );
    }

    // Bold outlines on main figure (Rivera's style)
    pg.noFill();
    pg.stroke(30, 20, 15);
    pg.strokeWeight(w * 0.005);
    pg.beginShape();
    pg.vertex(cx - w * 0.1, cy + h * 0.05);
    pg.bezierVertex(
      cx - w * 0.12,
      cy,
      cx - w * 0.12,
      cy - h * 0.1,
      cx - w * 0.05,
      cy - h * 0.2,
    );
    pg.bezierVertex(
      cx,
      cy - h * 0.22,
      cx + w * 0.05,
      cy - h * 0.2,
      cx + w * 0.1,
      cy - h * 0.15,
    );
    pg.bezierVertex(
      cx + w * 0.12,
      cy - h * 0.1,
      cx + w * 0.12,
      cy,
      cx + w * 0.1,
      cy + h * 0.05,
    );
    pg.endShape();
  },
});
