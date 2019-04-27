var targetText2;
var textareaVal;


// Colors Instance

var p5ColorsSketch = function(s) {
    var colorAlpha;
    var colorSeed;
    var initialCircleX;
    var initialCircleY;
    var spaceWidth;
    var characterWidth;


    s.setup = function() {
        s.createCanvas(s.windowWidth, 500);
        s.background(200, 200, 200);

        initialCircleX = 100;
        initialCircleY = 100;
        spaceWidth = 75;
        characterWidth = 25;
        colorAlpha = 100;

        targetText2 = s.select('#e');
        textarea = s.select("#targetText");

        targetText2.input(s.updateResults);
        textarea.input(s.updateResults);

        s.noStroke();
        s.noLoop();
    }

    s.updateResults = function() {
        // reset canvas background
        s.background(200, 200, 200);

        textareaVal = textarea.value();
        s.select('#targetText2').html(targetText2.html() + " [ this line was updated in sketch ]");

        colorTransform();

    }

    function colorTransform() {
        // converts each char to ascii, then to color
        let cursorXPos = 0;
        for (let i=0; i<textareaVal.length; i++) {
            let charCode = textareaVal.charCodeAt(i);
            if (charCode == 32) {
                cursorXPos += spaceWidth;
                continue;
            }

            s.fill(colorCharTransform(charCode));
            s.circle(initialCircleX + cursorXPos, initialCircleY, 100);
            cursorXPos += characterWidth;            
        }
    }

    function colorCharTransform(charCode) {
        return s.color(
            getTransformedRed(charCode),
            getTransformedGreen(charCode),
            getTransformedBlue(charCode),
            colorAlpha
        );
    }

    function getTransformedRed(charCode) {
        let mappedCode = s.map(charCode, 33, 127, 0, 255);
        return s.int(mappedCode) + s.random(0, 50);
    }

    function getTransformedGreen(charCode) {
        let mappedCode = s.map(charCode, 33, 127, 0, 255);
        return s.int(mappedCode) + s.random(-50, 100);
    }

    function getTransformedBlue(charCode) {
        let mappedCode = s.map(charCode, 33, 127, 0, 255);
        return s.int(mappedCode) + s.random(50, 100);
    }

    s.draw = function() {
    };
};

var p5ColorsSketchInstance = new p5(p5ColorsSketch, "p5_colors_sketch");


// Template Instance #1

var p5TemplateSketch1 = function(s) {
    s.setup = function() {
        s.createCanvas(s.windowWidth, 500);
        s.background(200, 200, 200);

        // reference HTML file for mappings
        targetText2 = s.select('#e');
        targetText2.input(s.updateResults);
        textarea = s.select("#targetText");
        textarea.input(s.updateResults);

        // s.noStroke();
        s.noLoop();
    }

    s.updateResults = function() {
        // reset canvas background
        s.background(200, 200, 200);

        textareaVal = textarea.value();
        targetText2Val = targetText2.html();

        // TODO: add new transformation methods here; sample below
        s.text(targetText2Val, 100, 100);
        s.text(textareaVal, 100, 200);
    }

    s.draw = function() {
    };
};

var p5TemplateSketchInstance1 = new p5(p5TemplateSketch1, "p5_template_sketch_1");


// Template Instance # 2

var p5TemplateSketch2 = function(s) {
    s.setup = function() {
        s.createCanvas(s.windowWidth, 500);
        s.background(200, 200, 200);

        // reference HTML file for mappings
        targetText2 = s.select('#e');
        targetText2.input(s.updateResults);
        textarea = s.select("#targetText");
        textarea.input(s.updateResults);

        // s.noStroke();
        s.noLoop();
    }

    s.updateResults = function() {
        // reset canvas background
        s.background(200, 200, 200);

        textareaVal = textarea.value();
        targetText2Val = targetText2.html();

        // TODO: add new transformation methods here; sample below
        s.text(targetText2Val, 100, 100);
        s.text(textareaVal, 100, 200);
    }

    s.draw = function() {
    };
};

var p5TemplateSketchInstance2 = new p5(p5TemplateSketch2, "p5_template_sketch_2");

