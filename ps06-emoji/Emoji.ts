// TODO: ADD HONOR PLEDGE HERE
/**
 * Author: Grant Sytniak 
 *
 * ONYEN: grantsyt
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */

// TODO: Import the classes you need to work with your Emoji
import { Group, Color, Text, Circle, Line, Rectangle, Path } from "introcs/graphics";

// Face Class
export class FaceShape {

    /**
     * The tone of the FaceShape class is a property so that you can
     * easily change the tone of an Emoji (i.e. red FaceShape tone is angry,
     * green sick, etc);
     */
    tone: Color;

    constructor(tone: Color) {
        this.tone = tone;
    }

    shapes(): Group {
        let shapes = new Group();

        // TODO #1: Remove the four lines of code below adding the text "Emoji"
        //          to the shapes group.
        // TODO #2: Import, construct, and add one or more Shape objects to the shapes
        //          group to design your FaceShape.
        // TODO #3: Ensure at least one shape is filled with the
        //          FaceShape's tone Color property. (Requirement A2!)
        let head = new Circle(70, 0, 0);
        head.fill = this.tone;
        shapes.add(head);

        return shapes;
    }

}

// TODO: Eye class
export class Eye {

    irisColor: Color;

    constructor(irisColor: Color) {
        this.irisColor = irisColor;
    }

    shapes(): Group {

        let shapes = new Group();
        let a = new Path(0, 0);
        a.lineTo(0, -10);
        a.lineTo(10, -20);
        a.lineTo(20, -10);
        a.lineTo(20, 0);
        a.lineTo(10, -10);
        a.lineTo(0, 0);
        a.fill = this.irisColor;
        a.fillOpacity = 1;
        shapes.add(a);
        // let a = new Circle(10, 10, -10);
        // shapes.add(a);
        // let b = new Circle(5, 10, -10);
        // b.fill = this.irisColor;
        // shapes.add(b);


        return shapes;
    }
}

// Mouth Class
export class Mouth {
    shapes(): Group {
        let shapes = new Group;

        let a = new Rectangle(80, 20, -40, 30);
        shapes.add(a);
        let b = new Path(-40, 40);
        b.lineTo(40, 40);
        b.moveTo(-20, 30);
        b.lineTo(-20, 50);
        b.moveTo(0, 30);
        b.lineTo(0, 50);
        b.moveTo(20, 30);
        b.lineTo(20, 50);
        shapes.add(b);

        return shapes;
    }
}

// TODO: Emoji class
export class Emoji {
    faceShape: FaceShape;
    mouth: Mouth;
    leftEye: Eye;
    rightEye: Eye;

    constructor() {
        this.faceShape = new FaceShape(new Color(1, 0.8, 0));
        this.mouth = new Mouth;
        this.leftEye = new Eye(new Color(0, 0, 0));
        this.rightEye = new Eye(new Color(0, 0, 0));
    }

    shapes(): Group {

        let shapes = new Group;
        let faceShapes = this.faceShape.shapes();
        shapes.add(faceShapes);
        let mouthShapes = this.mouth.shapes();
        mouthShapes.transform = mouthShapes.transform.translate(0, -10);
        shapes.add(mouthShapes);
        let leftEyeShapes = this.leftEye.shapes();
        let rightEyeShapes = this.rightEye.shapes();
        leftEyeShapes.transform = leftEyeShapes.transform.translate(-40, -10);
        rightEyeShapes.transform = rightEyeShapes.transform.translate(20, -10);
        shapes.add(leftEyeShapes);
        shapes.add(rightEyeShapes);
        
        return shapes;
    }
}



