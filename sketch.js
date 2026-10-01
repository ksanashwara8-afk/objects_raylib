const r = require("raylib");

const spaceship = {
    x: 100,
    y: 120,
    width: 200,
    height: 100,
};

const button = {
    x: 350,
    y: 120,
    width: 250,
    height: 100,
};

const purple = {
    r: 160,
    g: 0,
    b: 250,
    a: 100,
};

const leftPoint = {
    x: 250,
    y: 300,
};

const rightPoint = {
    x: 550,
    y: 300,
};

const target = {
    x: 150,
    y: 500,
};

const car = {
    x: 450,
    y: 520,
    width: 260,
    height: 80,
};

const WIDTH = 800;
const HEIGHT = 700;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Raylib");
    r.SetTargetFPS(60);
}

function update() {
    // change the state
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawRectangleRec(spaceship, purple);
    r.DrawRectangleLinesEx(spaceship, 3, r.BLACK);
    r.DrawRectangleRounded(button, 1, 8, r.SKYBLUE);
    r.DrawRectangleRoundedLines(button, 1, 8, 5, r.BLACK);
    r.DrawCircleV(leftPoint, 40, r.RED);
    r.DrawCircleV(rightPoint, 40, r.RED);
    r.DrawLineV(leftPoint, rightPoint, r.RED);
    r.DrawCircleV(target, 80, r.BLUE);
    r.DrawCircleV(target, 60, r.RED);
    r.DrawCircleLines(target.x, target.y, 60, r.BLACK);
    r.DrawCircleV(target, 40, r.YELLOW);
    r.DrawCircleLines(target.x, target.y, 20, r.BLACK);
    r.DrawRectangleRounded(car, 0.5, 8, r.BROWN);
    const center = {
        x: car.x + car.width / 2,
        y: car.y,
    };
    const y = car.y + car.height;
    const x = car.x + 70;
    r.DrawCircleSector(center, 75, 90, 270, 20, r.BROWN);
    r.DrawCircle(x, y, 40, r.BLACK);
    r.DrawCircle(x + 120, y, 40, r.BLACK);
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
