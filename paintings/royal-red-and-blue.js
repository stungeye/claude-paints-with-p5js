/*
 * Royal Red and Blue by Mark Rothko (1954)
 *
 * Description: A large-scale color field painting consisting of two
 * dominant rectangular color areas stacked vertically: a luminous red
 * on top and a deep blue below, on a dark background. The edges of the
 * color fields are soft and feathered, creating an atmospheric, meditative
 * quality. The colors seem to glow from within.
 *
 * Approach: Simple but atmospheric. Dark background with two large soft-
 * edged rectangular color fields. The red field transitions subtly in hue
 * and the blue field has depth variation. Multiple overlapping semi-
 * transparent rectangles create the soft, glowing edges characteristic
 * of Rothko's work. Slight variations in color within each band.
 */

paintings.push({
  title: "Royal Red and Blue",
  artist: "Mark Rothko",
  year: "1954",
  filename: "Mark Rothko - Royal Red and Blue",
  aspectRatio: 0.633,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Dark maroon background
    pg.background(65, 20, 18);

    // Subtle background variation
    for (var y = 0; y < h; y++) {
      var t = y / h;
      var c = lerpColor(color(70, 22, 20), color(55, 18, 16), t);
      pg.stroke(c);
      pg.line(0, y, w, y);
    }

    // === RED FIELD (upper) ===
    var redTop = h * 0.06;
    var redBottom = h * 0.52;
    var margin = w * 0.06;

    // Build up red field with overlapping semi-transparent layers
    for (var rl = 0; rl < 30; rl++) {
      var rAlpha = 20 + rl * 2;
      var rInset = (30 - rl) * w * 0.002;
      var rInsetY = (30 - rl) * h * 0.002;

      var rRed = 190 + sin(rl * 0.3) * 20;
      var rGreen = 30 + sin(rl * 0.5 + 1) * 15;
      var rBlue = 25 + sin(rl * 0.4 + 2) * 10;

      pg.noStroke();
      pg.fill(rRed, rGreen, rBlue, rAlpha);
      pg.rect(
        margin + rInset,
        redTop + rInsetY,
        w - 2 * margin - 2 * rInset,
        redBottom - redTop - 2 * rInsetY,
      );
    }

    // Red field core - slightly brighter
    for (var rc = 0; rc < 15; rc++) {
      pg.fill(210 + rc, 35 + rc, 30, 15);
      var rcInset = rc * w * 0.005;
      var rcInsetY = rc * h * 0.005;
      pg.rect(
        margin + w * 0.03 + rcInset,
        redTop + h * 0.03 + rcInsetY,
        w - 2 * margin - w * 0.06 - 2 * rcInset,
        redBottom - redTop - h * 0.06 - 2 * rcInsetY,
      );
    }

    // Subtle warm variation stripes within red
    for (var rv = 0; rv < 20; rv++) {
      var rvy = redTop + h * 0.05 + (rv * (redBottom - redTop - h * 0.1)) / 20;
      pg.fill(200 + rv * 2, 30 + rv, 25, 8);
      pg.rect(margin + w * 0.02, rvy, w - 2 * margin - w * 0.04, h * 0.02);
    }

    // === DIVIDING SPACE (thin dark band) ===
    pg.fill(65, 20, 18, 200);
    pg.rect(margin - w * 0.01, h * 0.5, w - 2 * margin + w * 0.02, h * 0.05);

    // === BLUE FIELD (lower) ===
    var blueTop = h * 0.53;
    var blueBottom = h * 0.93;

    // Build up blue field
    for (var bl = 0; bl < 30; bl++) {
      var bAlpha = 18 + bl * 2;
      var bInset = (30 - bl) * w * 0.002;
      var bInsetY = (30 - bl) * h * 0.002;

      var bRed = 20 + sin(bl * 0.3) * 10;
      var bGreen = 30 + sin(bl * 0.4 + 1) * 10;
      var bBlue = 130 + sin(bl * 0.5) * 30;

      pg.noStroke();
      pg.fill(bRed, bGreen, bBlue, bAlpha);
      pg.rect(
        margin + bInset,
        blueTop + bInsetY,
        w - 2 * margin - 2 * bInset,
        blueBottom - blueTop - 2 * bInsetY,
      );
    }

    // Blue field core
    for (var bc = 0; bc < 15; bc++) {
      pg.fill(15, 25 + bc, 145 + bc * 2, 15);
      var bcInset = bc * w * 0.005;
      var bcInsetY = bc * h * 0.005;
      pg.rect(
        margin + w * 0.03 + bcInset,
        blueTop + h * 0.03 + bcInsetY,
        w - 2 * margin - w * 0.06 - 2 * bcInset,
        blueBottom - blueTop - h * 0.06 - 2 * bcInsetY,
      );
    }

    // Blue variation stripes
    for (var bv = 0; bv < 15; bv++) {
      var bvy =
        blueTop + h * 0.04 + (bv * (blueBottom - blueTop - h * 0.08)) / 15;
      pg.fill(15 + bv, 25 + bv * 2, 140 + bv * 3, 8);
      pg.rect(margin + w * 0.02, bvy, w - 2 * margin - w * 0.04, h * 0.025);
    }

    // === SOFT EDGE VEILING ===
    // Top edge feathering
    for (var te = 0; te < 10; te++) {
      pg.fill(65, 20, 18, 20 - te * 2);
      pg.rect(margin, redTop + te * h * 0.003, w - 2 * margin, h * 0.01);
    }

    // Bottom edge feathering
    for (var be = 0; be < 10; be++) {
      pg.fill(55, 18, 16, 20 - be * 2);
      pg.rect(margin, blueBottom - be * h * 0.003, w - 2 * margin, h * 0.01);
    }

    // Left and right edge feathering
    for (var se = 0; se < 8; se++) {
      pg.fill(60, 19, 17, 25 - se * 3);
      pg.rect(margin + se * w * 0.003, redTop, w * 0.008, blueBottom - redTop);
      pg.rect(
        w - margin - se * w * 0.003 - w * 0.008,
        redTop,
        w * 0.008,
        blueBottom - redTop,
      );
    }

    // Overall subtle texture (canvas grain effect)
    pg.loadPixels();
    for (var py = 0; py < pg.height; py += 2) {
      for (var px = 0; px < pg.width; px += 2) {
        var idx = (py * pg.width + px) * 4;
        var noise_val = (Math.random() - 0.5) * 6;
        pg.pixels[idx] = constrain(pg.pixels[idx] + noise_val, 0, 255);
        pg.pixels[idx + 1] = constrain(pg.pixels[idx + 1] + noise_val, 0, 255);
        pg.pixels[idx + 2] = constrain(pg.pixels[idx + 2] + noise_val, 0, 255);
      }
    }
    pg.updatePixels();
  },
});
