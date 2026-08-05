import {
  drawShape,
  getShapePoints
} from "./shapes.js";
import { game } from "./game.js";
import { generateDotGrid } from "./dots.js";
import {
  playCorrect,
  playWrong
} from "./audio.js";

let gameCtx = null;

export function initializeCanvas() {
 

  const shapeCanvas = document.getElementById("shapeCanvas");
  const gameCanvas = document.getElementById("gameCanvas");


  shapeCanvas.width = 400;
  shapeCanvas.height = 400;


  gameCanvas.width = 1080;


  if (window.innerWidth <= 768) {

    gameCanvas.height = 1480;

  } else {

    gameCanvas.height = 1250;

  }

  const shapeCtx = shapeCanvas.getContext("2d");
  gameCtx = gameCanvas.getContext("2d");

  game.onShapeComplete = () => {
    game.selectedDots = [];
    game.lines = [];

    game.dots = generateDotGrid(
      gameCanvas.width,
      gameCanvas.height,
      game.level
    );

    updateTargetShape(
      shapeCtx,
      shapeCanvas
    );

    redraw(gameCtx);
  };

  // Generate dots first

  game.dots = generateDotGrid(
    gameCanvas.width,
    gameCanvas.height
  );

  // Then draw target

  updateTargetShape(
    shapeCtx,
    shapeCanvas
  );

  redraw(gameCtx);

  gameCanvas.addEventListener("mousemove", (event) => {

    const rect = gameCanvas.getBoundingClientRect();

    game.currentMouse = {
      x: (event.clientX - rect.left) * (gameCanvas.width / rect.width),
      y: (event.clientY - rect.top) * (gameCanvas.height / rect.height),
    };

    redraw(gameCtx);

  });
  
  function handleClick(event) {

    const rect = gameCanvas.getBoundingClientRect();

    const clientX = event.touches
      ? event.touches[0].clientX
      : event.clientX;
    const clientY = event.touches
      ? event.touches[0].clientY
      : event.clientY;
    const mouseX =
      (clientX - rect.left) *
      (gameCanvas.width / rect.width);
    const mouseY =
      (clientY - rect.top) *
      (gameCanvas.height / rect.height);
    game.dots.forEach((dot) => {

      if (!dot.isClicked(mouseX, mouseY)) {
        return;
      }
      // Close shape
      if (
        game.selectedDots.length >= 3 &&
        dot === game.selectedDots[0]
      ) {

        const last =
          game.selectedDots[
          game.selectedDots.length - 1
          ];

        game.lines.push({
          start: last,
          end: dot,
          correct: null
        });

        game.isClosed = true;
        redraw(gameCtx);

        const completed = game.checkShapeComplete();

        if (!completed) {

          game.lines = [];
          game.selectedDots = [];
          game.selectedPattern = [];
          game.isClosed = false;


          game.dots.forEach(dot => {
            dot.selected = false;
          });
          redraw(gameCtx);
        }

        return;
      }

      // Select new dot
      if (!game.selectedDots.includes(dot)) {

        dot.selected = true;
      
        game.selectedDots.push(dot);

        if (game.selectedDots.length >= 2) {

          const prev =
            game.selectedDots[
            game.selectedDots.length - 2
            ];
          const last =
            game.selectedDots[
            game.selectedDots.length - 1
            ];
          game.lines.push({
            start: prev,
            end: last,
            correct: null
          });
        }

        redraw(gameCtx);
      }
    });
    event.preventDefault();
  }

  // Desktop
  gameCanvas.addEventListener(
    "click",
    handleClick
  );


  // Mobile
  gameCanvas.addEventListener(
    "touchstart",
    (event) => {

      game.isDrawing = true;

      const rect = gameCanvas.getBoundingClientRect();
      const touch = event.touches[0];


      game.currentMouse = {
        x: (touch.clientX - rect.left) *
          (gameCanvas.width / rect.width),

        y: (touch.clientY - rect.top) *
          (gameCanvas.height / rect.height),
      };


      // শুধু dot select করো
      handleClick(event);


      // line show করার জন্য
      redraw(gameCtx);

      event.preventDefault();

    },
    { passive: false }
  );
  gameCanvas.addEventListener("touchend", () => {

    game.isDrawing = false;

    game.currentMouse = null;

    redraw(gameCtx);

  });
  gameCanvas.addEventListener("touchmove", (event) => {

    if (!game.isDrawing) return;


    const rect = gameCanvas.getBoundingClientRect();
    const touch = event.touches[0];


    const mouseX =
      (touch.clientX - rect.left) *
      (gameCanvas.width / rect.width);

    const mouseY =
      (touch.clientY - rect.top) *
      (gameCanvas.height / rect.height);


    game.currentMouse = {
      x: mouseX,
      y: mouseY
    };


    // Check dot while moving
    game.dots.forEach(dot => {

      if (dot.isClicked(mouseX, mouseY)) {


        if (!game.selectedDots.includes(dot)) {


          dot.selected = true;
        

          game.selectedDots.push(dot);


          if (game.selectedDots.length >= 2) {

            const prev =
              game.selectedDots[
              game.selectedDots.length - 2
              ];


            game.lines.push({
              start: prev,
              end: dot,
              correct: null
            });

          }

        }

      }

    });


    redraw(gameCtx);


    event.preventDefault();


  }, { passive: false });
}


function updateTargetShape(ctx, canvas) {

  console.log(game.currentShape.geometry);

  let points = getShapePoints(
    game.currentShape
  );

  // shape center calculate
  const minX = Math.min(...points.map(p => p.x));
  const maxX = Math.max(...points.map(p => p.x));

  const minY = Math.min(...points.map(p => p.y));
  const maxY = Math.max(...points.map(p => p.y));

  const shapeWidth = maxX - minX;
  const shapeHeight = maxY - minY;

  const offsetX =
    (canvas.width - shapeWidth) / 2 - minX;

  const offsetY =
    (canvas.height - shapeHeight) / 2 - minY;

  points = points.map(p => ({
    x: p.x + offsetX,
    y: p.y + offsetY
  }));

  game.targetPoints = points;

  drawShape(
    ctx,
    canvas.width,
    canvas.height,
    points,
    0.65
  );

}


export function redraw(ctx) {

  ctx.clearRect(
    0,
    0,
    ctx.canvas.width,
    ctx.canvas.height
  );

  // Lines

  ctx.lineWidth = 6;

  game.lines.forEach(line => {

    ctx.beginPath();

    ctx.moveTo(
      line.start.x,
      line.start.y
    );

    ctx.lineTo(
      line.end.x,
      line.end.y
    );

    if (line.correct === true) {

      ctx.strokeStyle = "#22C55E"; // Green

    } else if (line.correct === false) {

      ctx.strokeStyle = "#EF4444"; // Red

    } else {

      ctx.strokeStyle = "#2196F3"; // Blue

    }

    ctx.stroke();

  });


  

  // Temporary line
  if (
    game.selectedDots.length > 0 &&
    game.currentMouse
  ) {

    const last =
      game.selectedDots[
      game.selectedDots.length - 1
      ];

    console.log(
      "last dot:",
      last.x,
      last.y,
      "mouse:",
      game.currentMouse.x,
      game.currentMouse.y
    );


    ctx.beginPath();

    ctx.moveTo(last.x, last.y);

    ctx.lineTo(
      game.currentMouse.x,
      game.currentMouse.y
    );

    ctx.strokeStyle = "#2196F3";
    ctx.lineWidth = 6;

    ctx.stroke();
  }

  // Dots
  game.dots.forEach(dot => {
    dot.draw(ctx);
  });
  


}
export function redrawGame() {

  redraw(gameCtx);

}
