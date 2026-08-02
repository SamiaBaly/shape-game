import { drawShape, generatePoints } from "./shapes.js";
import { game } from "./game.js";
import { generateDotGrid } from "./dots.js";

let gameCtx = null;

export function initializeCanvas() {
 

  const shapeCanvas = document.getElementById("shapeCanvas");
  const gameCanvas = document.getElementById("gameCanvas");

  shapeCanvas.width = 300;
  shapeCanvas.height = 300;

  gameCanvas.width = 1080;
  gameCanvas.height = 1480;

  const shapeCtx = shapeCanvas.getContext("2d");
  gameCtx = gameCanvas.getContext("2d");

  game.onShapeComplete = () => {

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

  // First target shape draw

  updateTargetShape(
    shapeCtx,
    shapeCanvas
  );

  // Generate dots

  game.dots = generateDotGrid(
    gameCanvas.width,
    gameCanvas.height,
    game.level
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
          end: dot
        });
        game.isClosed = true;
        redraw(gameCtx);

        const completed = game.checkShapeComplete();

        if (!completed) {

          game.lines = [];
          game.selectedDots = [];
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
            end: last
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
              end: dot

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


  const points =
    generatePoints(
      game.currentShape.sides,
      canvas.width,
      canvas.height
    );
  game.targetPoints = points;

  drawShape(
    ctx,
    canvas.width,
    canvas.height,
    points
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

  ctx.strokeStyle = "#2196F3";
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
