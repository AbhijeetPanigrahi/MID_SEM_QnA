/* Q--  What are global Composite Operation Property called? 
        Explain 2 destination-atop, source-in, destination-out, and darker
*/

//  The globalCompositeOperation property in the Canvas API defines how shapes and images are combined when drawn onto the canvas. It affects how pixels from the source (new shape/image) and destination (existing canvas content) are blended together. Here's an explanation of four global composite operations:

// destination-atop:
// This operation keeps only the parts of the new shape that overlap with the existing content, discarding the rest of the new shape.
// It uses the existing content as a mask and draws the new shape on top of it.
// The resulting image will have the new shape visible only where it overlaps with the existing content.

ctx.globalCompositeOperation = "destination-atop";
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100); // Draws a red rectangle
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2); // Draws a blue circle
ctx.fill();

// source-in:
// This operation keeps only the parts of the existing content that overlap with the new shape, discarding the rest of the existing content.
// It uses the new shape as a mask and keeps only the pixels of the existing content that are inside this mask.
// The resulting image will have the existing content visible only where it overlaps with the new shape.

ctx.globalCompositeOperation = "source-in";
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100); // Draws a red rectangle
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2); // Draws a blue circle
ctx.fill();

// destination-out:
// This operation keeps only the parts of the existing content that do not overlap with the new shape, discarding the rest of the existing content.
// It uses the new shape as a mask and erases the pixels of the existing content that are inside this mask.
// The resulting image will have the existing content visible only where it does not overlap with the new shape.

ctx.globalCompositeOperation = "destination-out";
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100); // Draws a red rectangle
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2); // Draws a blue circle
ctx.fill();

// darker:
// This operation displays the darker color of the existing content and the new shape at each pixel.
// It compares the color values of corresponding pixels in both the existing content and the new shape, and keeps the darker color.
// The resulting image will have areas where the new shape is darker than the existing content displayed as the new shape, and areas where the existing content is darker displayed as the existing content.

ctx.globalCompositeOperation = "darker";
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100); // Draws a red rectangle
ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
ctx.fillRect(75, 75, 100, 100); // Draws a semi-transparent blue rectangle
