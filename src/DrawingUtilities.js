export const drawRectangle = (resultObjs, canvas) => {
  resultObjs.forEach((result) => {
    // get predictions results
    const [x, y, width, height] = result.bbox; // here we are destructuring an array
    const { class: detectedClassText } = result; // here we are destructuring an object. class is a reserved word. So we assign another name to it

    const color = "red";
    // Math.random() generates a random decimal number between 0 and 1
    // Thus we get a random decimal number between 0 and 16777215 after multiplication
    // Math.floor() rounds down the resulting decimal number
    // const color = "#" + Math.floor(Math.random() * 16777215).toString();
    // strokeStyle represents stroke (border) color for the rectangle
    canvas.strokeStyle = color;
    canvas.font = "18px Arial";
    // represents the color for the text
    canvas.fillStyle = color;

    // starts a new path for drawing
    canvas.beginPath();
    // this draws the text on the canvas at the coordinates (x, y)
    canvas.fillText(detectedClassText, x, y);
    // this creates a rectangle on the canvas using the coordinates and dimensions
    canvas.rect(x, y, width, height);
    // this draws the rectangle border (stroke) on the canvas
    canvas.stroke();
  });
};
