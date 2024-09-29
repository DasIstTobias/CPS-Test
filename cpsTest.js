var score;
var duration;
const selectElement = document.getElementById('duration');
var startTime;
var ended = true;
var timerTxt = document.getElementById("timer");
var scoreTxt = document.getElementById("score");
var clicksTxt = document.getElementById("clicks");
var startButton = document.getElementById("start");
var clickArea = document.getElementById("clickarea");
selectElement.addEventListener("change", () => {
    const selectedIndex = selectElement.selectedIndex;
    duration = selectElement.options[selectedIndex].text;
    console.log("Ausgewaehlte Zeit in Sekunden:", duration);
});
var show = function(elem) {
    elem.style.display = 'inline';
};
var hide = function(elem) {
    elem.style.display = 'none';
};
function startCPS() {
    hide(startButton);
    score = -1;
    ended = false;
    startTime = new Date().getTime();
    var timerId = setInterval(function() {
        var total = (new Date().getTime() - startTime) / 1000;
        if (total < duration) {
            timerTxt.textContent = total.toFixed(3);
            clicksTxt.textContent = (score / total).toFixed(2);
        } else {
            ended = true;
            clearInterval(timerId);
            endCPS();
        }
    }, 1);
}
function endCPS() {
    var clicksPerSecond = (score / duration).toFixed(2);
    timerTxt.textContent = Number(duration).toFixed(3);
    clicksTxt.textContent = clicksPerSecond;
    show(startButton);
    setTimeout(function() {
        alert('Ergebniss: \n Klicks: ' + score + '\n Zeit: ' + duration +
        ' Sekunden \n Klicks/s: ' + clicksPerSecond);
    }, 10);
}
startButton.addEventListener("click", function(e) {
    startCPS();
});
clickArea.addEventListener("click", function(e) {
    if (!ended) {
        score++;
        scoreTxt.textContent = score;
    }
});
