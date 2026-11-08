// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("colorBtn");
    
    // Array of nice background colors to cycle through
    const colors = ["#f4f7f6", "#e8f8f5", "#fef9e7", "#f4ecf7", "#ebf5fb"];
    let colorIndex = 0;

    button.addEventListener("click", () => {
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
        
        // Console log for debugging
        console.log("Background color changed to: " + colors[colorIndex]);
    });
});