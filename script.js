const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions (adjust as needed)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load the image
const image = new Image();
image.src = './assets/img/glo_face.png'; // Replace with your image path

// Background color
const backgroundColor = 'lightblue';

// Image position variables
let imageX = 0;
let imageY = 0;

// Event listener for mouse movement
canvas.addEventListener('mousemove', (event) => {
  // Update image position to follow the mouse
  imageX = event.clientX - image.width / 2;
  imageY = event.clientY - image.height / 2;

  // Clear the canvas
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the image at the new position
  ctx.drawImage(image, imageX, imageY);
});

// Load the image and start the animation
image.onload = () => {
  ctx.drawImage(image, imageX, imageY);
};
