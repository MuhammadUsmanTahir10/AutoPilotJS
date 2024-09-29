# AutoPilotJS
Coding Self-Driving Cars with AI and JS

# Self-Driving Car Simulation with JavaScript
# Overview
Ever thought a car could drive itself? In this project, we explore how a few lines of code can transform an ordinary car into a self-driving wonder. Using JavaScript, sensors, and neural networks, this project simulates a self-driving car that navigates roads, avoids obstacles, and makes autonomous decisions—just like the real thing. The car continuously learns from its environment, improving over time with every simulation run.

# Project Highlights
Language: JavaScript
Key Components: Sensors, Neural Networks, AI-based decision making
Features:
Simulated driving environment with realistic physics
AI-based navigation and obstacle avoidance
Real-time sensor data processing
Visualization of car’s decision-making process

# The Code in Action
1. JavaScript’s Role
JavaScript acts as the brain of the self-driving car, controlling how it moves and makes decisions. It interacts with the car’s electronic control units (ECUs) to manipulate steering, acceleration, and braking. Through well-crafted algorithms, JavaScript turns lines of code into a dynamic driving experience.

2. Sensors and Cameras
Sensors and cameras serve as the car's eyes and ears, providing a 360-degree awareness of the environment. LiDAR, radar, and visual cameras work together to capture the surroundings, allowing the car to detect lanes, obstacles, and potential hazards. This sensory input feeds into the car's neural network, helping it make real-time decisions.

3. The Yellow Lines: Car’s Vision
In the simulation, yellow lines represent the directions in which the car’s cameras are focused. These lines guide the car, acting as a protective force field to prevent collisions. Black sections on the yellow lines signal potential dangers, helping the car navigate safely.

4. Neural Network (NN)
The neural network acts as the car’s digital brain, processing sensor inputs to make driving decisions. This NN learns from each run, improving its performance over time. The display shows the neural network’s real-time reactions, demonstrating how it adapts to different situations.

Key Code: Car.js
The Car.js file is the core of the project, defining how the car operates. Here’s an overview of the important parts:

# Class Car
Constructor: Initializes the car with parameters like position, dimensions, control type, and maximum speed.

Initialization: Sets up speed, acceleration, and the car’s orientation. The car can be controlled by AI, a human, or act as a dummy.

Sensor and Neural Network Setup: Equips the car with a sensor for environment perception and a neural network for decision-making.

Controls: Handles different control types (keyboard, AI, dummy).

Update Method: Moves the car, updates its shape, and checks for collisions. Processes sensor data through the neural network for decision-making.

Assess Damage: Checks for collisions with road borders or traffic.

Create Polygon: Calculates the car’s position and shape.

Move Method: Manages the car’s movement based on input controls, speed, and friction.

Draw Method: Visualizes the car on the canvas, including the sensors if enabled.

Learning and Adaptation: The car learns continuously, capturing data each time it runs. Over time, it crashes less frequently as it learns from each attempt, just like real-world self-driving cars. The concept of Fleet Learning is incorporated, allowing the car to share data and insights with other simulated vehicles, creating a smarter, more adaptive system.

# Getting Started
To explore the code in detail, follow these steps:

Clone the repository:

git clone [your-repo-url]

Open the project in your preferred code editor.
Run the simulation by opening the main HTML file in your browser.

# Future Enhancements
Incorporate more advanced sensors for enhanced perception.
Improve the neural network for faster and more accurate decision-making.
Expand the simulation to include more complex driving scenarios and road conditions.

# Contributing
Contributions are welcome! If you have ideas for enhancing the simulation or improving the AI algorithms, feel free to submit a pull request or open an issue.

# Credit: https://medium.com/@krish.bhoopati556/coding-the-road-ahead-self-driving-cars-with-javascript-and-ai-1995ecb2c1ec
