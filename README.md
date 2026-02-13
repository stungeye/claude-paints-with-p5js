# p5.js Studio — Famous Paintings Gallery

An interactive gallery of 18 famous paintings recreated entirely in code using [p5.js](https://p5js.org/). Navigate between paintings with arrow keys and export any piece as a PNG.

**[View Live Demo →](https://p5-studio.netlify.app)**

## Controls

| Key       | Action                       |
| --------- | ---------------------------- |
| `→` / `←` | Navigate between paintings   |
| `S`       | Save current painting as PNG |

## The Paintings

| #   | Painting                  | Artist            | Year         |
| --- | ------------------------- | ----------------- | ------------ |
| 1   | Mona Lisa                 | Leonardo da Vinci | c. 1503–1519 |
| 2   | The Birth of Venus        | Sandro Botticelli | c. 1485      |
| 3   | The Sleeping Gypsy        | Henri Rousseau    | 1897         |
| 4   | No. 5, 1948               | Jackson Pollock   | 1948         |
| 5   | The Kiss                  | Gustav Klimt      | 1907–1908    |
| 6   | Three Musicians           | Pablo Picasso     | 1921         |
| 7   | The Starry Night          | Vincent van Gogh  | 1889         |
| 8   | The Dance                 | Henri Matisse     | 1910         |
| 9   | The Arnolfini Marriage    | Jan van Eyck      | 1434         |
| 10  | Olympia                   | Édouard Manet     | 1863         |
| 11  | The Scream                | Edvard Munch      | 1893         |
| 12  | Composition VIII          | Wassily Kandinsky | 1923         |
| 13  | Royal Red and Blue        | Mark Rothko       | 1960         |
| 14  | The Son of Man            | René Magritte     | 1964         |
| 15  | American Gothic           | Grant Wood        | 1930         |
| 16  | The Flower Carrier        | Diego Rivera      | 1935         |
| 17  | Girl with a Pearl Earring | Johannes Vermeer  | c. 1665      |
| 18  | The Last Supper           | Leonardo da Vinci | c. 1495–1498 |

## The Original Prompt

> This project was generated through a conversation with an AI coding assistant (Claude, via GitHub Copilot in VS Code). The prompt that started it:
>
> I've got p5.js set up in this project. I want you to create a sketch where I can navigate between the following p5.js recreations of the famous paintings listed below.
>
> Each painting should be created in a separate .js file. At the top of the file in a comment you will describe the painting, along with your approach to recreating it using the constrained medium of p5.js 2d drawing techniques. Do you best to generate an accurate recreation of each painting. Prioritize recognizability and capturing the essence of each work (key colors, composition, distinctive elements) over pixel-perfect reproduction. Preserve canvas aspect ratio from the original work where known.
>
> I'd also like to be able to export each painting to a saved file. The filenames (without extension) should be:
>
> <list of paintings went here>

## Process: How the Paintings Were Built

The entire gallery — roughly 5,400 lines of drawing code across 18 files, plus the navigation framework — was generated in a single coding session. Here's a look at the decisions and strategies that went into translating oil, tempera, and fresco into `rect()`, `ellipse()`, and `bezierVertex()`.

### Architecture

The first decision was structural. Rather than one monolithic sketch, each painting lives in its own `.js` file and registers itself by pushing an object onto a global `paintings` array. Each object carries metadata (title, artist, year, filename, aspect ratio) and a `draw(pg)` function that receives a `p5.Graphics` buffer. This isolation means paintings can't accidentally interfere with each other, and adding or removing a painting is a one-line change in `index.html`.

The gallery framework in `sketch.js` uses `noLoop()` — paintings are static images, not animations, so there's no reason to burn CPU on a 60fps draw loop. A new buffer is created only when the user navigates or resizes the window. Each painting's aspect ratio is preserved from the original work, and the buffer is sized to fill the viewport while maintaining that ratio.

### The Translation Problem

Every painting presented a different kind of challenge. The collection deliberately spans a huge range of styles — from the diffuse sfumato of the Mona Lisa to the hard geometric flatness of Picasso's Three Musicians, from the all-over drip chaos of Pollock's No. 5 to the meditative color fields of Rothko's Royal Red and Blue. There is no single strategy for "painting with code."

Broadly, the approaches fell into these categories:

**Layered shapes and gradients** — For works built on smooth tonal transitions (Mona Lisa, Girl with a Pearl Earring, Olympia), the technique was to stack semi-transparent ellipses, arcs, and bezier shapes, building up form the way a painter builds up glazes. Vermeer's pearl earring, for instance, is five overlapping ellipses of decreasing size and increasing brightness — a crude but effective approximation of the way light collects on a spherical surface.

**Geometric construction** — Paintings with strong architectural or geometric compositions (The Last Supper, Arnolfini Marriage, Composition VIII) were built around measured coordinates. Da Vinci's Last Supper is organized entirely around its vanishing point — every ceiling beam, wall edge, and window converges on Christ's head at `(w * 0.5, h * 0.28)`. The one-point perspective that makes the original so powerful translates naturally to code.

**Randomized procedural generation** — For works defined by gestural, organic mark-making (Starry Night, No. 5 1948, Royal Red and Blue), seeded `randomSeed()` calls produce repeatable pseudo-random strokes. Pollock's drip painting uses five nested loops, each laying down hundreds of line segments in different colors — brown, yellow, black, white — to simulate the layered, all-over quality of the original. `randomSeed(1948)` ensures the same "drips" every time.

**Bold flat shapes** — Paintings in strongly graphic styles (Three Musicians, The Dance, The Scream, Son of Man) played to p5.js's strengths. Matisse's five dancing figures are each built from a head, torso, two legs, and two arms using `push()`/`pop()`/`translate()`/`rotate()`. Picasso's cubist musicians are stacked colored rectangles and triangles — which is essentially what cubism already is.

### Per-Painting Notes

A few specific challenges are worth calling out:

- **Mona Lisa** (666 lines — the longest): The most complex painting to approximate, because so much of its power comes from subtle tonal modeling and the famous sfumato technique. The code uses dozens of semi-transparent overlapping shapes to simulate soft transitions, and a dedicated vignette at the end to darken the edges. The enigmatic smile is two tiny bezier curves.

- **Royal Red and Blue** (164 lines — the shortest): Deceptively simple. The challenge with Rothko is that the paintings look like "just two colored rectangles," but their emotional impact comes from the feathered, breathing edges where colors bleed into each other. The code draws each color field as 30 overlapping semi-transparent rectangles with slightly varying dimensions, then adds a pixel-level noise texture pass across the entire canvas.

- **The Kiss** by Klimt: The ornamental gold patterns that define this painting were generated with seeded random loops placing small rectangles, circles, and triangles across the figures' robes — essentially a computational version of Klimt's own obsessive decorative process.

- **No. 5, 1948** by Pollock: Perhaps the most natural fit for procedural code. The painting _is_ a process — layers of poured paint — and the code recreates that process literally: five sequential passes of random line segments in different colors, followed by a splatter pass.

### What Doesn't Translate

Honesty requires noting what's lost. Oil paint has physical texture — impasto, visible brushstrokes, the way light scatters differently through thick and thin pigment. Code produces perfectly flat pixels. The Mona Lisa's sfumato, built up over years of transparent oil glazes, becomes a stack of semi-transparent ellipses — a gesture toward the effect, not the effect itself. Van Gogh's swirling, sculptural brushwork in Starry Night becomes smooth curves.

Color is another gap. Real paintings exist in a much wider and more nuanced color space than an RGB monitor can reproduce. Rothko's deep, vibrating reds and Vermeer's luminous skin tones are approximations at best.

## On p5.js as a Medium for Artistic Homage

Working with p5.js to recreate famous paintings is an exercise in creative constraint — and that constraint turns out to be genuinely interesting rather than merely limiting.

p5.js is, at its core, a drawing API. You have a canvas and a set of geometric primitives: points, lines, rectangles, ellipses, arcs, bezier curves. There are no brushes, no palette knives, no turpentine. You don't _paint_ — you _describe geometry_. This forces a fundamentally different relationship with the image. Where a painter might intuitively swipe a loaded brush to create a highlight on a cheekbone, the coder must decompose that highlight into a position, a size, an opacity, and a color, then express it as `pg.fill(235, 210, 180, 60); pg.ellipse(faceX, faceY, w * 0.04, h * 0.06)`. It is painting by analysis rather than painting by feel.

This analytical decomposition is, in a way, a form of very close looking. To recreate a painting in code, you must truly _see_ it — understand its structure, its palette, its spatial logic. You have to decide: what are the essential visual elements that make this painting _this painting_? What can be simplified, and what must be preserved? The pitchfork in American Gothic. The pearl in Vermeer. The green apple in Magritte. The swirling sky in Van Gogh. Stripping a masterwork down to its most recognizable geometric essence is its own form of art criticism.

There is also something poetic about the medium's limitations. Every painting in this gallery is built entirely from mathematics — coordinates, colors, and curves defined by equations. There is no image data, no photograph, no scan. The Mona Lisa is ~660 lines of function calls. This feels appropriate for an homage: not a copy, but a reconstruction from first principles, the way a musician might transcribe an orchestral work for solo piano. The transcription is not the original, and doesn't pretend to be. But the act of transcription reveals structure.

p5.js also brings its own aesthetic. The perfectly smooth gradients, the clean geometric edges, the slightly synthetic quality of computed color — these give the recreations a distinctive look that sits somewhere between the original paintings and vector illustration. It's an honest medium: it doesn't try to fake brushstrokes or simulate canvas texture. The code _is_ the technique, visible in every file for anyone to read.

Where p5.js truly excels in this context is with paintings that are already geometric or procedural in nature. Pollock's drip paintings, Kandinsky's compositions, Mondrian-like works, Matisse's bold flat shapes — these map almost natively to code. The further a painting is from photorealism and the closer it is to graphic design, the better p5.js can honor it. The Cubist flattening of Three Musicians, which breaks subjects into colored planes, is essentially what `rect()` and `triangle()` already do.

As a medium for homage, then, p5.js is imperfect but expressive. It cannot replicate the physical presence of paint on canvas. But it can capture composition, color logic, and the essential visual identity of a work — and it adds something the originals never had: the ability to read exactly how an image was constructed, line by line, like sheet music for a visual experience.

## Technical Details

- **Framework**: [p5.js](https://p5js.org/) v1.x (global mode)
- **No build step**: Pure HTML/JS/CSS — open `index.html` or deploy as-is
- **Rendering**: Each painting draws into a `p5.Graphics` off-screen buffer at the original aspect ratio
- **Performance**: `noLoop()` mode with explicit `redraw()` — no wasted frames
- **Export**: `saveCanvas()` produces PNGs at the buffer's native resolution with `pixelDensity(1)`

## Deployment

This is a static site — no build step, no server, no dependencies beyond the p5.js library files included in `libraries/`.

**Netlify**: Connect the GitHub repo. Build command and publish directory can be left at defaults (publish directory: `/`). The site works as-is from the repo root.

**Local**: Open `index.html` in a browser, or use any static file server:

```bash
npx serve .
```

## unlicense

This project is released under the [Unlicense](UNLICENSE) into the public domain for anyone to use, modify, distribute, or build upon for any purpose, without restriction or attribution.

The paintings recreated here were made by humans who are now dead. The code recreating them was generated by an AI that was never alive.

The p5.js library files in `libraries/` are licensed separately under the [LGPL-2.1](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html) by the p5.js project.
