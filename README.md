# Two Fingers Touch Distance

This script calculates the distance between two fingers (two touch points) on a touch-enabled device. It utilizes JavaScript's touch events to determine the Euclidean distance between two touch points and logs the result in the console.

## Features

- Detects when two fingers touch the screen simultaneously.
- Calculates the Euclidean distance between the two touch points.
- Logs the distance (in pixels) to the browser console.

## How It Works

1. Listens for the `touchstart` event using `window.addEventListener`.
2. Checks if two touch points are detected (`e.touches.length === 2`).
3. Retrieves the X and Y coordinates of the two touch points.
4. Calculates the distance using the formula:  
\[
   \text{distance} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
\]
5. Logs the calculated distance in pixels to the console.

## Code Example

```javascript
// Two fingers touch distance calculation
window.addEventListener('touchstart', start);

function start(e) {
    if (e.touches.length === 2) {
        let [w1, h1] = [e.touches[0].clientX, e.touches[0].clientY];
        let [w2, h2] = [e.touches[1].clientX, e.touches[1].clientY];
        let tempDistance = (w1 - w2) ** 2 + (h1 - h2) ** 2;
        let currentDistance = Math.sqrt(tempDistance);
        console.log(currentDistance + 'px');
    }
}
