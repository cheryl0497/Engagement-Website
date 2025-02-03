document.addEventListener("DOMContentLoaded", function() {
    function updateCountdown() {
        const weddingDate = new Date("January 4, 2026 00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        if (timeLeft <= 0) {
            document.querySelector(".countdown").innerHTML = 
                "<h2>🎉 The Wedding Day has Arrived! 🎉</h2>";
            clearInterval(countdownInterval); // Stop the countdown
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
});
