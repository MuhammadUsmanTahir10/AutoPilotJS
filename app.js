// Main application logic
const canvas = document.getElementById('carCanvas');
canvas.width = 800;
canvas.height = 600;

const ctx = canvas.getContext('2d');
const roadBorders = []; // Define road borders
const traffic = []; // Define traffic vehicles

const car = new Car(400, 300, 30, 50, "AI"); // Example car initialization

function animate() {
    car.update(roadBorders, traffic); // Update the car's state
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    car.draw(ctx, true); // Draw the car with sensors visible
    requestAnimationFrame(animate); // Loop animation
}

animate();
