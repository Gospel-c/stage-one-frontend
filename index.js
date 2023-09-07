document.addEventListener("DOMContentLoaded", function() {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    function updateEverySecond() {
        const currentDate = new Date();
    
        const currentDayOfTheWeek = document.querySelector("[data-testid='currentDayOfTheWeek']");
        currentDayOfTheWeek.textContent = weekDays[currentDate.getUTCDay()];
        
        const currentUTCTime = document.querySelector("[data-testid='currentUTCTime']");
        const hours = String(currentDate.getUTCHours()).padStart(2, '0');
        const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
        currentUTCTime.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateEverySecond();

    setInterval(updateEverySecond, 1000);

});