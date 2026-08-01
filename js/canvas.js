import { drawShape } from "./shapes.js";
import { game } from "./game.js";
import { generateDotGrid } from "./dots.js";


export function initializeCanvas() {

  const shapeCanvas = document.getElementById("shapeCanvas");
  const gameCanvas = document.getElementById("gameCanvas");


  shapeCanvas.width = 300;
  shapeCanvas.height = 300;


  gameCanvas.width = 1080;
  gameCanvas.height = 1480;


  const shapeCtx = shapeCanvas.getContext("2d");
  const gameCtx = gameCanvas.getContext("2d");

  game.onShapeComplete = () => {


    // New dots generate
    game.dots = generateDotGrid(
      gameCanvas.width,
      gameCanvas.height,
      game.level
    );


    // Update target shape
    updateTargetShape(
      shapeCtx,
      shapeCanvas
    );


    // Draw new dots
    redraw(gameCtx);


  };


  // Draw target shape
  drawShape(
    shapeCtx,
    shapeCanvas.width,
    shapeCanvas.height,
    game.currentShape.sides
  );


  // Generate dots
  game.dots = generateDotGrid(
    gameCanvas.width,
    gameCanvas.height,
    game.level
  );


  redraw(gameCtx);



  // Click Event

  gameCanvas.addEventListener("click", (event) => {


    const rect = gameCanvas.getBoundingClientRect();


    const mouseX =
      (event.clientX - rect.left) *
      (gameCanvas.width / rect.width);


    const mouseY =
      (event.clientY - rect.top) *
      (gameCanvas.height / rect.height);



    game.dots.forEach((dot) => {


      if (dot.isClicked(mouseX, mouseY)) {



        // Close Shape
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


          // আগে draw করো
          redraw(gameCtx);


          console.log("Shape Closed");


          const completed =
            game.checkShapeComplete();


          if (!completed) {
            redraw(gameCtx);
          }


          console.log(
            "Completed:",
            completed
          );


          console.log(
            "Selected Dots:",
            game.selectedDots.length,
            "Lines:",
            game.lines.length
          );



          // if (completed) {

          //   alert("Level Complete!");

          // }
          console.log(
            "Lines after close:",
            game.lines
          );


          return;

        }




        // Select New Dot

        if (!dot.selected) {


          dot.selected = true;


          game.selectedDots.push(dot);



          // Create line between dots

          if (game.selectedDots.length >= 2) {


            const last =
              game.selectedDots[
              game.selectedDots.length - 1
              ];


            const prev =
              game.selectedDots[
              game.selectedDots.length - 2
              ];



            game.lines.push({

              start: prev,

              end: last

            });

          }



          redraw(gameCtx);

        }


      }


    });


  });


}
function updateTargetShape(ctx, canvas) {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );


  drawShape(
    ctx,
    canvas.width,
    canvas.height,
    game.currentShape.sides
  );

}





function redraw(ctx) {


  ctx.clearRect(
    0,
    0,
    ctx.canvas.width,
    ctx.canvas.height
  );



  // Draw Lines

  ctx.strokeStyle = "#2196F3";

  ctx.lineWidth = 6;



  game.lines.forEach((line) => {


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




  // Draw Dots

  game.dots.forEach((dot) => {

    dot.draw(ctx);

  });


}