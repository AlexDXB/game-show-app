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

function addPhraseToDisplay(phrase) {
    for (let i = 0; i < phrase.length; i++) {
    const li = phrase[i];
    const liItem = document.createElement("li");
    liItem.textContent = li;
    const list = document.querySelector('#phrase ul')
    list.appendChild(liItem);

    if (li >= 'A' && li <= 'Z' || li >= 'a' && li <= 'z'  ) {
        liItem.classList.add('letter');

    } else {
        liItem.classList.add('space');
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
            
            let letterFound = checkLetter(btn);
            if ( letterFound === null) {
                let tries = document.querySelectorAll('.tries img')[missed];
                tries.src = "images/lostHeart.png";
                missed++;
            }
        };
        
        checkWin();
});

function checkWin() {
    const liLetter = document.getElementsByClassName('letter');
    const liShow = document.getElementsByClassName('show');
    if ( liLetter.length === liShow.length) {
        overlay.className = 'win';
        overlay.children[0].textContent = 'U win';
        startButton.textContent = "Let's play again?";
        overlay.style.display = 'flex';
        reset()
    } else if (missed >= 5 ) {
        overlay.className = 'lose';
        overlay.children[0].textContent = 'You Lose!';  
        startButton.textContent = "Let's play again?";     
        overlay.style.display = 'flex';
        reset()
    };
   
};
function reset () {
    
    const li = document.querySelectorAll('ul');
    
    missed = 0;
    li.innerHTML = "";
    
    
    for (let i = 0; i < button.length; i++) {
        button[i].className = "";
        button[i].disabled = false;
    }
    for (let i = 0; i < li.length; i++ ) {
            li[i].className = "";
            li[i].textContent = "";
    }
    let tries = document.querySelectorAll('li.tries');
    for (let i = 0; i < tries.length; i++) {
        
        tries[i].firstElementChild.src = "images/liveHeart.png";
    }
    const newRandomPhrase = getRandomPhraseAsArray();
     addPhraseToDisplay(newRandomPhrase);
    
};
    

