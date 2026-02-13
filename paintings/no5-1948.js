/*
 * No. 5, 1948 by Jackson Pollock (1948)
 *
 * Description: A large-scale drip painting with dense, chaotic layers of
 * paint in brown, yellow, black, white, and gray. The entire canvas is
 * covered with interlacing drips, splatters, and poured lines creating
 * an all-over composition with no focal point. The painting exemplifies
 * Pollock's "action painting" technique.
 *
 * Approach: Use seeded randomness to generate reproducible layers of
 * drip lines and splatters. Build up from a tan/brown base with layers
 * of curved random paths in yellow, brown, black, and white. Add splatter
 * dots of varying sizes. Multiple passes create the dense, layered effect.
 */

paintings.push({
  title: "No. 5, 1948",
  artist: "Jackson Pollock",
  year: "1948",
  filename: "Jackson Pollock - No. 5, 1948",
  aspectRatio: 1.22,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    randomSeed(1948);

    // Base color - warm tan/brown
    pg.background(180, 155, 110);

    // Layer 1: Brown/tan drips (base layer)
    pg.strokeWeight(w * 0.004);
    for (var i = 0; i < 200; i++) {
      pg.stroke(
        120 + random(60),
        90 + random(50),
        50 + random(40),
        150 + random(100)
      );
      pg.noFill();
      var x1 = random(-w * 0.1, w * 1.1);
      var y1 = random(-h * 0.1, h * 1.1);
      pg.beginShape();
      pg.curveVertex(x1, y1);
      for (var j = 0; j < floor(random(3, 12)); j++) {
        x1 += random(-w * 0.15, w * 0.15);
        y1 += random(-h * 0.1, h * 0.1);
        pg.curveVertex(x1, y1);
      }
      pg.endShape();
    }

    // Layer 2: Yellow drips
    for (var i2 = 0; i2 < 150; i2++) {
      pg.stroke(
        200 + random(55),
        180 + random(60),
        50 + random(80),
        120 + random(80)
      );
      pg.strokeWeight(random(w * 0.001, w * 0.005));
      pg.noFill();
      var x2 = random(-w * 0.1, w * 1.1);
      var y2 = random(-h * 0.1, h * 1.1);
      pg.beginShape();
      pg.curveVertex(x2, y2);
      for (var j2 = 0; j2 < floor(random(3, 10)); j2++) {
        x2 += random(-w * 0.12, w * 0.12);
        y2 += random(-h * 0.08, h * 0.08);
        pg.curveVertex(x2, y2);
      }
      pg.endShape();
    }

    // Layer 3: Black drips (prominent)
    for (var i3 = 0; i3 < 300; i3++) {
      pg.stroke(0, 0, 0, 100 + random(155));
      pg.strokeWeight(random(w * 0.001, w * 0.006));
      pg.noFill();
      var x3 = random(-w * 0.1, w * 1.1);
      var y3 = random(-h * 0.1, h * 1.1);
      pg.beginShape();
      pg.curveVertex(x3, y3);
      for (var j3 = 0; j3 < floor(random(2, 15)); j3++) {
        x3 += random(-w * 0.1, w * 0.1);
        y3 += random(-h * 0.08, h * 0.08);
        pg.curveVertex(x3, y3);
      }
      pg.endShape();
    }

    // Layer 4: White drips
    for (var i4 = 0; i4 < 120; i4++) {
      pg.stroke(230 + random(25), 230 + random(25), 225 + random(30), 100 + random(100));
      pg.strokeWeight(random(w * 0.001, w * 0.004));
      pg.noFill();
      var x4 = random(-w * 0.1, w * 1.1);
      var y4 = random(-h * 0.1, h * 1.1);
      pg.beginShape();
      pg.curveVertex(x4, y4);
      for (var j4 = 0; j4 < floor(random(3, 8)); j4++) {
        x4 += random(-w * 0.1, w * 0.1);
        y4 += random(-h * 0.08, h * 0.08);
        pg.curveVertex(x4, y4);
      }
      pg.endShape();
    }

    // Layer 5: More dark brown dense drips
    for (var i5 = 0; i5 < 100; i5++) {
      pg.stroke(60 + random(40), 40 + random(30), 20 + random(20), 120 + random(80));
      pg.strokeWeight(random(w * 0.002, w * 0.008));
      pg.noFill();
      var x5 = random(-w * 0.1, w * 1.1);
      var y5 = random(-h * 0.1, h * 1.1);
      pg.beginShape();
      pg.curveVertex(x5, y5);
      for (var j5 = 0; j5 < floor(random(2, 8)); j5++) {
        x5 += random(-w * 0.15, w * 0.15);
        y5 += random(-h * 0.1, h * 0.1);
        pg.curveVertex(x5, y5);
      }
      pg.endShape();
    }

    // Splatters - various colors
    pg.noStroke();
    // Black splatters
    for (var s1 = 0; s1 < 500; s1++) {
      pg.fill(0, 0, 0, random(80, 255));
      pg.ellipse(
        random(w),
        random(h),
        random(w * 0.002, w * 0.012),
        random(h * 0.002, h * 0.012)
      );
    }

    // Yellow splatters
    for (var s2 = 0; s2 < 200; s2++) {
      pg.fill(200 + random(55), 180 + random(60), 40 + random(60), random(80, 200));
      pg.ellipse(
        random(w),
        random(h),
        random(w * 0.002, w * 0.008),
        random(h * 0.002, h * 0.008)
      );
    }

    // White splatters
    for (var s3 = 0; s3 < 150; s3++) {
      pg.fill(240 + random(15), 240 + random(15), 235 + random(20), random(80, 200));
      pg.ellipse(
        random(w),
        random(h),
        random(w * 0.001, w * 0.006),
        random(h * 0.001, h * 0.006)
      );
    }

    // Brown splatters
    for (var s4 = 0; s4 < 200; s4++) {
      pg.fill(100 + random(80), 70 + random(50), 30 + random(30), random(80, 200));
      pg.ellipse(
        random(w),
        random(h),
        random(w * 0.002, w * 0.01),
        random(h * 0.002, h * 0.01)
      );
    }

    // Final thin black whip lines
    for (var f1 = 0; f1 < 50; f1++) {
      pg.stroke(0, 0, 0, 200);
      pg.strokeWeight(random(w * 0.0005, w * 0.002));
      pg.noFill();
      var fx = random(w);
      var fy = random(h);
      pg.beginShape();
      pg.curveVertex(fx, fy);
      for (var fj = 0; fj < floor(random(5, 20)); fj++) {
        fx += random(-w * 0.08, w * 0.08);
        fy += random(-h * 0.06, h * 0.06);
        pg.curveVertex(fx, fy);
      }
      pg.endShape();
    }
  },
});
