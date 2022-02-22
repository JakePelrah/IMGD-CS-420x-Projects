All simulations use 1000000 agents.

Space: I started by using a sharpen kernel. I set the "speed" on the mold to 0.2, the sensor distance to 2.0
and the concentration to 0.05. I created a plane with a 3d effect by altering gl_Position in the simulation shader. Particles give the appearance of stars, the mold streams from the center of the screen.

Neon: This example uses a variation on the sobel kernel. The "speed" of the reaction is set to 0.06.
The sensor distance is increated to 10.0 and the concentration is doubled. The initial burst of particles was created by modifying the simulation buffer.

Thread: This example is closest to the original mold simulation.  The "speed" is 0.15, sensor distance os 2.0
and the concentration is .01. This creates little "threads" that are left behind from the mold trails.

Creeping: This is my favorite preset. I modified the simulation buffer to only populate the left side of the screen. The sensor distance is set to 1.2. This creates vines that creep and search to the right.

The additional controls are speed, tint, distance, pointSize and kernel type. Increasing poinSize creates some interesting alterations of the presets.


