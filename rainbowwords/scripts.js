const nextWord = new Array();
const redWords = ['the', 'a', 'see', 'I', 'to', 'by', 'my', 'am', 'at', 'go'];
const orangeWords = ['man', 'no', 'is', 'can', 'and', 'you', 'an', 'it', 'has', 'ran'];
const yellowWords = [ 'he', 'she', 'did', 'in', 'put', 'sits', 'me', 'with', 'big', 'good'];
const greenWords = ['his', 'very', 'got', 'on', 'here', 'of', 'lot', 'not', 'are', 'was'];
const blueWords = ['had', 'be', 'do', 'ten', 'but', 'up', 'look', 'want', 'him', 'us'];
const violetWords = ['for', 'her', 'yes', 'help', 'too', 'they', 'six', 'have', 'some', 'we'];
const pinkWords = ['get', 'hot', 'or', 'where', 'if', 'stop', 'come', 'from', 'red', 'as'];
const grayWords = ['that', 'our', 'cut', 'must', 'said', 'when', 'off', 'will', 'down', 'so'];
const peachWords = ['back', 'let', 'were', 'what', 'then', 'this', 'could', 'now', 'tell', 'well'];
const limeWords = ['your', 'who', 'same', 'take', 'know', 'out', 'home', 'like', 'many', 'right']

//Initialize array
saveSettings()

function changeWordColor() {
    let word = document.getElementById('updateWord');
    if (redWords.indexOf(word.innerHTML) != -1) {
        word.style.color = "red";
    } else if (orangeWords.indexOf(word.innerHTML) != -1) {
        word.style.color = "orange";
    } else if (yellowWords.indexOf(word.innerHTML) != -1) {
        word.style.color = "yellow";
    } else if (greenWords.indexOf(word.innerHTML) != -1) {
        word.style.color = "green";
    } else if (blueWords.indexOf(word.innerHTML) != -1) {
        word.style.color = "blue";
    } else if (violetWords.indexOf(word.innerHTML) != -1) {
        word.style.color = "violet";
    } else if (pinkWords.indexOf(word.innerHTML) != -1) {
        word.style.color = "pink";
    } else if (grayWords.indexOf(word.innerHTML) != -1) {
        word.style.color = "gray";
    } else if (peachWords.indexOf(word.innerHTML) != -1) {
        word.style.color = "#E6896B";
    } else if (limeWords.indexOf(word.innerHTML) != -1) {
        word.style.color = "lime";
    } else {
        word.style.color = "black";
    }
   
}
function updateWord() {
        let word = document.getElementById('updateWord');
        if (nextWord.indexOf(word.innerHTML) > -1) {
            let currentWord = nextWord.indexOf(word.innerHTML) + 1
            if (nextWord[currentWord] === undefined) {
                word.innerHTML = "Out of words!"
            } else {
                word.innerHTML = nextWord[currentWord]
            }
        } else {
            sliderCheck(nextWord[0]);
        }
    changeWordColor();
}

function sliderCheck(wordCheck) {
    //Checks to make sure at least one slider is enabled.
    let word = document.getElementById('updateWord');
    if (wordCheck === undefined) {
        word.innerHTML = "There are no words selected."
    } else {
        word.innerHTML = wordCheck
    }
}

function randomWord() {
    sliderCheck(nextWord[Math.floor(Math.random() * nextWord.length)])
    changeWordColor();
}


function saveSettings() {
    //Empty Array
    nextWord.length = 0;

    //Check if switches are on
    const redSwitch = document.getElementById("redSwitch");
    if (redSwitch.checked == true) {
        for(let i=0; i < redWords.length; i++) {
            nextWord.push(redWords[i])
        }
    }

    const orangeSwitch = document.getElementById("orangeSwitch");
    if (orangeSwitch.checked == true) {
        for(let i=0; i < orangeWords.length; i++) {
            nextWord.push(orangeWords[i])
        }
    }

    const yellowSwitch = document.getElementById("yellowSwitch");
    if (yellowSwitch.checked == true) {
        for(let i=0; i < yellowWords.length; i++) {
            nextWord.push(yellowWords[i])
        }
    }

    const greenSwitch = document.getElementById("greenSwitch");
    if (greenSwitch.checked == true) {
        for(let i=0; i < greenWords.length; i++) {
            nextWord.push(greenWords[i])
        }
    }

    const blueSwitch = document.getElementById("blueSwitch");
    if (blueSwitch.checked == true) {
        for(let i=0; i < blueWords.length; i++) {
            nextWord.push(blueWords[i])
        }
    }

    const violetSwitch = document.getElementById("violetSwitch");
    if (violetSwitch.checked == true) {
        for(let i=0; i < violetWords.length; i++) {
            nextWord.push(violetWords[i])
        }
    }

    const pinkSwitch = document.getElementById("pinkSwitch");
    if (pinkSwitch.checked == true) {
        for(let i=0; i < pinkWords.length; i++) {
            nextWord.push(pinkWords[i])
        }
    }

    const graySwitch = document.getElementById("graySwitch");
    if (graySwitch.checked == true) {
        for(let i=0; i < grayWords.length; i++) {
            nextWord.push(grayWords[i])
        }
    }

    const peachSwitch = document.getElementById("peachSwitch");
    if (peachSwitch.checked == true) {
        for(let i=0; i < peachWords.length; i++) {
            nextWord.push(peachWords[i])
        }
    }

    const limeSwitch = document.getElementById("limeSwitch");
    if (limeSwitch.checked == true) {
        for(let i=0; i < limeWords.length; i++) {
            nextWord.push(limeWords[i])
        }
    }

    if (nextWord[0] === undefined) {
        let word = document.getElementById('updateWord');
        word.innerHTML = "There are no words selected."
        changeWordColor();
    }

}

function popUp() {
    document.getElementsByClassName("popUp")[0].style.display = "inline";
}

function popUpClose() {
    document.getElementsByClassName("popUp")[0].style.display = "none";
}