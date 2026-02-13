/*
 * American Gothic by Grant Wood (1930)
 *
 * Description: A stern-faced farmer holding a three-tined pitchfork stands
 * beside a woman (often thought to be his wife, actually modeled after
 * Wood's sister). Behind them is a white clapboard house with a distinctive
 * Gothic-arched window. The man wears a black jacket over denim overalls
 * and round spectacles. The woman wears a colonial-print apron over a dark
 * dress with a cameo brooch. The sky is overcast. Trees and a red barn
 * are visible in the background.
 *
 * Approach: The iconic composition is symmetrical with the two figures
 * centered before the Gothic window house. Focus on the recognizable
 * elements: pitchfork, round glasses, stern expressions, Gothic window,
 * white house siding. Use simple geometric shapes for the house and
 * more detailed curves for the figures. Muted Midwestern palette.
 */

paintings.push({
  title: "American Gothic",
  artist: "Grant Wood",
  year: "1930",
  filename: "Grant Wood - American Gothic",
  aspectRatio: 0.837,
  draw: function (pg) {
    var w = pg.width;
    var h = pg.height;

    // Sky - overcast grey-blue
    for (var y = 0; y < h * 0.4; y++) {
      var t = y / (h * 0.4);
      var c = lerpColor(color(160, 175, 185), color(145, 165, 170), t);
      pg.stroke(c);
      pg.line(0, y, w, y);
    }

    // Trees in background
    pg.noStroke();
    pg.fill(60, 85, 50);
    pg.ellipse(w * 0.08, h * 0.32, w * 0.2, h * 0.15);
    pg.ellipse(w * 0.15, h * 0.3, w * 0.15, h * 0.12);
    pg.fill(55, 80, 45);
    pg.ellipse(w * 0.85, h * 0.3, w * 0.2, h * 0.14);
    pg.ellipse(w * 0.92, h * 0.32, w * 0.18, h * 0.13);

    // More trees
    pg.fill(65, 90, 55);
    pg.ellipse(w * 0.22, h * 0.34, w * 0.12, h * 0.1);
    pg.ellipse(w * 0.78, h * 0.33, w * 0.14, h * 0.11);

    // Red barn hint (left background)
    pg.fill(140, 45, 35);
    pg.rect(w * 0.0, h * 0.28, w * 0.08, h * 0.1);
    pg.fill(120, 35, 25);
    pg.triangle(w * 0.0, h * 0.28, w * 0.08, h * 0.28, w * 0.04, h * 0.23);

    // === WHITE HOUSE ===
    pg.fill(225, 225, 218);
    pg.rect(w * 0.25, h * 0.15, w * 0.5, h * 0.45);

    // Clapboard siding lines
    pg.stroke(210, 210, 200);
    pg.strokeWeight(w * 0.002);
    for (var sl = 0; sl < 30; sl++) {
      var sy = h * 0.15 + sl * h * 0.015;
      if (sy < h * 0.58) {
        pg.line(w * 0.25, sy, w * 0.75, sy);
      }
    }

    // Roof (steep gable)
    pg.noStroke();
    pg.fill(115, 100, 80);
    pg.triangle(w * 0.25, h * 0.15, w * 0.75, h * 0.15, w * 0.5, h * 0.02);

    // Roof edge trim
    pg.fill(200, 195, 185);
    pg.quad(
      w * 0.25,
      h * 0.15,
      w * 0.75,
      h * 0.15,
      w * 0.74,
      h * 0.16,
      w * 0.26,
      h * 0.16,
    );

    // === GOTHIC WINDOW (the key element) ===
    var gwx = w * 0.5;
    var gwy = h * 0.13;
    var gww = w * 0.1;
    var gwh = h * 0.12;

    // Window frame
    pg.fill(50, 40, 35);
    pg.rect(gwx - gww / 2, gwy, gww, gwh);
    // Gothic arch top
    pg.arc(gwx, gwy, gww, gww * 0.8, PI, TWO_PI);

    // Window panes - lighter inside
    pg.fill(80, 95, 100);
    var paneW = gww * 0.42;
    pg.rect(gwx - gww / 2 + gww * 0.06, gwy + gwh * 0.08, paneW, gwh * 0.85);
    pg.rect(gwx + gww * 0.02, gwy + gwh * 0.08, paneW, gwh * 0.85);

    // Gothic arch panes
    pg.fill(80, 95, 100);
    pg.arc(gwx, gwy, gww * 0.85, gww * 0.65, PI, TWO_PI);

    // Window dividing bar (vertical)
    pg.fill(50, 40, 35);
    pg.rect(gwx - w * 0.003, gwy - gww * 0.15, w * 0.006, gwh + gww * 0.15);

    // Gothic tracery (Y-shaped in the arch)
    pg.stroke(50, 40, 35);
    pg.strokeWeight(w * 0.004);
    pg.noFill();
    pg.line(gwx - gww * 0.2, gwy, gwx, gwy - gww * 0.25);
    pg.line(gwx + gww * 0.2, gwy, gwx, gwy - gww * 0.25);

    // Small regular windows on sides
    pg.noStroke();
    pg.fill(80, 95, 100);
    pg.rect(w * 0.3, h * 0.3, w * 0.06, h * 0.06);
    pg.rect(w * 0.64, h * 0.3, w * 0.06, h * 0.06);
    // Window frames
    pg.stroke(50, 40, 35);
    pg.strokeWeight(w * 0.003);
    pg.noFill();
    pg.rect(w * 0.3, h * 0.3, w * 0.06, h * 0.06);
    pg.rect(w * 0.64, h * 0.3, w * 0.06, h * 0.06);
    pg.line(w * 0.33, h * 0.3, w * 0.33, h * 0.36);
    pg.line(w * 0.67, h * 0.3, w * 0.67, h * 0.36);

    // === THE MAN (left figure) ===
    var manX = w * 0.43;

    // Black jacket
    pg.noStroke();
    pg.fill(30, 30, 28);
    pg.beginShape();
    pg.vertex(manX - w * 0.1, h * 0.44);
    pg.vertex(manX + w * 0.08, h * 0.44);
    pg.vertex(manX + w * 0.1, h * 0.85);
    pg.vertex(manX - w * 0.12, h * 0.85);
    pg.endShape(CLOSE);

    // Denim overalls showing
    pg.fill(80, 90, 105);
    pg.rect(manX - w * 0.05, h * 0.5, w * 0.1, h * 0.35);

    // Overall straps
    pg.fill(80, 90, 105);
    pg.rect(manX - w * 0.04, h * 0.44, w * 0.02, h * 0.08);
    pg.rect(manX + w * 0.02, h * 0.44, w * 0.02, h * 0.08);

    // White shirt at collar
    pg.fill(230, 228, 222);
    pg.beginShape();
    pg.vertex(manX - w * 0.04, h * 0.42);
    pg.vertex(manX + w * 0.04, h * 0.42);
    pg.vertex(manX + w * 0.035, h * 0.48);
    pg.vertex(manX - w * 0.035, h * 0.48);
    pg.endShape(CLOSE);

    // Neck
    pg.fill(210, 185, 155);
    pg.rect(manX - w * 0.02, h * 0.38, w * 0.04, h * 0.05);

    // Head
    pg.fill(215, 190, 160);
    pg.ellipse(manX, h * 0.34, w * 0.09, h * 0.1);

    // Thinning grey hair
    pg.fill(160, 155, 145);
    pg.ellipse(manX, h * 0.3, w * 0.08, h * 0.03);
    pg.ellipse(manX - w * 0.04, h * 0.32, w * 0.02, h * 0.04);
    pg.ellipse(manX + w * 0.04, h * 0.32, w * 0.02, h * 0.04);

    // Stern expression
    // Eyes
    pg.fill(40, 35, 30);
    pg.ellipse(manX - w * 0.018, h * 0.335, w * 0.012, h * 0.008);
    pg.ellipse(manX + w * 0.018, h * 0.335, w * 0.012, h * 0.008);

    // Round spectacles
    pg.noFill();
    pg.stroke(100, 90, 70);
    pg.strokeWeight(w * 0.003);
    pg.ellipse(manX - w * 0.018, h * 0.336, w * 0.028, h * 0.022);
    pg.ellipse(manX + w * 0.018, h * 0.336, w * 0.028, h * 0.022);
    // Bridge
    pg.line(manX - w * 0.004, h * 0.336, manX + w * 0.004, h * 0.336);

    // Nose
    pg.stroke(190, 168, 140);
    pg.strokeWeight(w * 0.002);
    pg.line(manX, h * 0.34, manX, h * 0.36);

    // Thin stern mouth
    pg.stroke(170, 130, 115);
    pg.strokeWeight(w * 0.003);
    pg.line(manX - w * 0.015, h * 0.375, manX + w * 0.015, h * 0.375);

    // Ears
    pg.noStroke();
    pg.fill(210, 182, 152);
    pg.ellipse(manX - w * 0.047, h * 0.34, w * 0.015, h * 0.02);
    pg.ellipse(manX + w * 0.047, h * 0.34, w * 0.015, h * 0.02);

    // === PITCHFORK ===
    pg.stroke(100, 85, 60);
    pg.strokeWeight(w * 0.006);
    // Handle
    pg.line(manX + w * 0.02, h * 0.46, manX + w * 0.02, h * 0.85);

    // Tines (3)
    pg.strokeWeight(w * 0.004);
    pg.stroke(110, 100, 75);
    pg.line(manX + w * 0.02, h * 0.46, manX + w * 0.02, h * 0.36);
    pg.line(manX + w * 0.0, h * 0.46, manX + w * 0.0, h * 0.36);
    pg.line(manX + w * 0.04, h * 0.46, manX + w * 0.04, h * 0.36);

    // Crossbar connecting tines
    pg.line(manX - w * 0.005, h * 0.46, manX + w * 0.045, h * 0.46);

    // Hand gripping pitchfork
    pg.noStroke();
    pg.fill(210, 185, 155);
    pg.ellipse(manX + w * 0.02, h * 0.5, w * 0.03, h * 0.02);

    // === THE WOMAN (right figure, slightly behind) ===
    var womanX = w * 0.58;

    // Dark dress
    pg.fill(40, 35, 32);
    pg.beginShape();
    pg.vertex(womanX - w * 0.08, h * 0.44);
    pg.vertex(womanX + w * 0.1, h * 0.44);
    pg.vertex(womanX + w * 0.12, h * 0.85);
    pg.vertex(womanX - w * 0.1, h * 0.85);
    pg.endShape(CLOSE);

    // Colonial print apron
    pg.fill(190, 180, 160);
    pg.beginShape();
    pg.vertex(womanX - w * 0.06, h * 0.48);
    pg.vertex(womanX + w * 0.06, h * 0.48);
    pg.vertex(womanX + w * 0.08, h * 0.85);
    pg.vertex(womanX - w * 0.08, h * 0.85);
    pg.endShape(CLOSE);

    // Apron rick-rack trim pattern
    pg.stroke(150, 100, 80, 100);
    pg.strokeWeight(w * 0.002);
    for (var ap = 0; ap < 15; ap++) {
      var apy = h * 0.52 + ap * h * 0.02;
      pg.line(womanX - w * 0.05, apy, womanX + w * 0.05, apy);
    }
    pg.noStroke();

    // White collar
    pg.fill(230, 228, 222);
    pg.beginShape();
    pg.vertex(womanX - w * 0.05, h * 0.42);
    pg.vertex(womanX + w * 0.05, h * 0.42);
    pg.vertex(womanX + w * 0.04, h * 0.47);
    pg.vertex(womanX, h * 0.48);
    pg.vertex(womanX - w * 0.04, h * 0.47);
    pg.endShape(CLOSE);

    // Cameo brooch
    pg.fill(160, 120, 80);
    pg.ellipse(womanX, h * 0.44, w * 0.015, w * 0.015);
    pg.fill(230, 210, 185);
    pg.ellipse(womanX, h * 0.44, w * 0.01, w * 0.01);

    // Neck
    pg.fill(215, 192, 162);
    pg.rect(womanX - w * 0.02, h * 0.38, w * 0.04, h * 0.05);

    // Head
    pg.fill(218, 195, 165);
    pg.ellipse(womanX, h * 0.34, w * 0.085, h * 0.095);

    // Hair (parted in middle, pulled back)
    pg.fill(130, 90, 55);
    pg.ellipse(womanX, h * 0.305, w * 0.08, h * 0.035);
    pg.ellipse(womanX - w * 0.035, h * 0.32, w * 0.025, h * 0.04);
    pg.ellipse(womanX + w * 0.035, h * 0.32, w * 0.025, h * 0.04);

    // Eyes (looking sideways)
    pg.fill(45, 38, 32);
    pg.ellipse(womanX - w * 0.015, h * 0.335, w * 0.01, h * 0.006);
    pg.ellipse(womanX + w * 0.015, h * 0.335, w * 0.01, h * 0.006);

    // Nose
    pg.stroke(195, 172, 145);
    pg.strokeWeight(w * 0.002);
    pg.line(womanX, h * 0.34, womanX, h * 0.36);

    // Tight, thin mouth
    pg.stroke(175, 135, 120);
    pg.strokeWeight(w * 0.002);
    pg.line(womanX - w * 0.012, h * 0.373, womanX + w * 0.012, h * 0.373);
    pg.noStroke();

    // Ears
    pg.fill(212, 188, 158);
    pg.ellipse(womanX - w * 0.044, h * 0.34, w * 0.012, h * 0.018);
    pg.ellipse(womanX + w * 0.044, h * 0.34, w * 0.012, h * 0.018);
  },
});
