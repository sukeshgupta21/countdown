// Set the target date to 19th October 2024
const targetDate = new Date("October 19, 2024 23:59:59").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(() => {

    // Get the current date and time
    const now = new Date().getTime();

    // Find the distance between now and the target date
    const distance = targetDate - now;

    // Calculate the days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown element
    document.getElementById("countdown").innerHTML = `
        <img src="https://img.icons8.com/color/48/000000/calendar--v1.png" class="icon"> 
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Countdown Finished!";
    }

}, 1000);

// Display a warning message every 10 seconds
setInterval(() => {
    const warning = document.getElementById("warning");
    warning.style.display = 'block';
    setTimeout(() => {
        warning.style.display = 'none';
    }, 3000); // Hide the warning after 3 seconds
}, 10000);
