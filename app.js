const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const button = document.getElementsByTagName('button')
let missed = 0;

let phrases = [
    'JavaScript function',
    'Java lang',
    'Python snake',
    'Kotlin dog',
    'Swift ios',
];

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});


// return a random phrase from an array
function getRandomPhraseAsArray(){
   const randomNumber = Math.floor(Math.random() * phrases.length)
   const indexArray = phrases[randomNumber];
   const splitCharacters = indexArray.split('');
   return splitCharacters;
};
const randomWordValue = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay() {
    for (let i = 0; i < randomWordValue.length; i++) {
    const li = randomWordValue[i];
    const liItem = document.createElement("li");
    liItem.textContent = li;
    const list = document.querySelector('#phrase ul')
    list.appendChild(liItem);

    if (li === " " ) {
        liItem.classList.add('space');

    } else {
        liItem.classList.add('letter');
    }
  } 
};
addPhraseToDisplay(randomWordValue);

function checkLetter(button) {
    const li = document.querySelectorAll('li');
     let matchFound = null;

    for ( let i = 0; i < li.length; i++ ) {
        if ( button.textContent === li[i].textContent.toLowerCase()) {
            li[i].classList.add('show');
             matchFound = button.textContent;
             li[i].style.transition = 'all 1.5s ease-out';

        } 
    }
    return matchFound;
}

qwerty.addEventListener('click', (e) => {
        let btn = e.target;
        if (btn.tagName === 'BUTTON') {
            btn.className = 'chosen';
            btn.disabled = 'true';
            
        };
        let letterFound = checkLetter(btn);
        if ( letterFound === null) {
            let tries = document.querySelectorAll('.tries img')[missed];
            tries.src = "images/lostHeart.png";
            missed++;
        }
        checkWin();
});

function checkWin() {
    const liLetter = document.getElementsByClassName('letter');
    const liShow = document.getElementsByClassName('show');
    if ( liLetter.length === liShow.length) {
        overlay.classList.add('win');
        overlay.children[0].textContent = 'U win';
        overlay.style.display = 'flex';
        reset()
    } else if (missed >= 5 ) {
        overlay.classList.add('lose');
        overlay.children[0].textContent = 'You Lose!';       
        overlay.style.display = 'flex';
        reset()
    };
   
};
function reset () {
    startButton.textContent = "Let's play again?";
    const li = document.querySelectorAll('ul');
    missed = 0;
    for (let i = 0; i < button.length; i++) {
        button[i].className = "";
        button[i].disabled = 'false';
    }
    for (let i = 0; i < li.length; i++ ) {
            li[i].className = "";
            li[i].textContent = "";
    }
    let tries = document.querySelectorAll('li.tries');
    for (let i = 0; i < tries.length; i++) {
        
        tries[i].firstElementChild.src = "images/liveHeart.png";
    }
    const randomWordValue = getRandomPhraseAsArray(phrases);
     addPhraseToDisplay(randomWordValue);
    
};
    

