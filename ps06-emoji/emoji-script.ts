import "introcs";
import { SVG, Group, Color } from "introcs/graphics";

import { Grid } from "./Grid";

// TODO: Import additional classes
import { FaceShape, Eye, Mouth, Emoji } from "./Emoji";

function main(): void {
    let shapes = initScene();

    // The following line sets up a coordinate grid to help you orient your designs.
    let grid = new Grid(-100, -100, 100, 100, 10);
    shapes.add(grid.shapes());

    // TODO: Change the following code when you work on other pieces (Eye, Mouth, Emoji)
    
    // let piece = new FaceShape(new Color(1, 0.8, 0));
    // shapes.add(piece.shapes());

    // let piece: Eye = new Eye(new Color(0, .5, 1));
    // shapes.add(piece.shapes());

    // let piece: Mouth = new Mouth;
    // shapes.add(piece.shapes());
    
    let emoji = new Emoji;
    shapes.add(emoji.shapes());

}

/**
 * initScene establishes the connection to the HTML's
 * SVG tag with an id of artboard and returns a Group
 * that is rendered to the SVG tag.
 */
function initScene(): Group {
    let svgTag = new SVG("artboard");
    svgTag.autoScale = true;
    let scene = new Group();
    svgTag.render(scene);
    return scene;
}

main();