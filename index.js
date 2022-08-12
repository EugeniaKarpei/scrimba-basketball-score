let homeScore = 0;
let guestScore = 0;

function addScore1home(){
    addScore("home-score", 1)
}

function addScore2home(){
    addScore("home-score", 2)
}

function addScore3home(){
    addScore("home-score", 3)
}

function addScore1guest(){
    addScore("guest-score", 1)
}

function addScore2guest(){
    addScore("guest-score", 2)
}

function addScore3guest(){
    addScore("guest-score", 3)
}

function addScore(id, amount){
    let displayNumber = 0;
    if (id == "guest-score") {
        guestScore += amount;
        displayNumber = guestScore;
    } 
    else if (id == "home-score"){
        homeScore += amount;
        displayNumber = homeScore;
    }
    
    document.getElementById(id).textContent = displayNumber;
    highlightWinner(homeScore, guestScore);
}

function newGame(){
    homeScore = 0;
    guestScore = 0;
    document.getElementById("guest-score").textContent = guestScore;
    document.getElementById("home-score").textContent = homeScore;
    highlightWinner(0, 0);
}

function highlightWinner(home, guest){
    if (home > guest){
        addHighlightClass("home-score-box");
        removeHighlightClass("guest-score-box");
    } else if (home == guest && home > 0 && guest > 0){
        addHighlightClass("home-score-box");
        addHighlightClass("guest-score-box");
    } else if (home < guest){
        addHighlightClass("guest-score-box");
        removeHighlightClass("home-score-box");
    } else {
        removeHighlightClass("home-score-box");
        removeHighlightClass("guest-score-box");
    }
    
}

function addHighlightClass(id){
    var element = document.getElementById(id);
    element.classList.add("highlighted");
}

function removeHighlightClass(id){
    var element = document.getElementById(id);
    element.classList.remove("highlighted");
}