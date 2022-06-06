const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const button = document.getElementsByTagName('button')
let missed = 0;

let phrases = [
    'JavaScript',
    'Java',
    'Python',
    'Kotlin',
    'Swift',
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
        list.classList.add('space');

    } else {
        list.classList.add('letter');
    }
  } 
};
const wordSplit = addPhraseToDisplay(randomWordValue);

function checkLetter(button) {
    const li = document.querySelectorAll('li');
     let matchFound = null;

    for ( let i = 0; i < li.length; i++ ) {
        if ( button.textContent === li[i].textContent.toLowerCase()) {
            li[i].classList.add('show');
             matchFound = button.textContent;

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
});

function checkWin() {
    const liLetter = document.getElementsByClassName('letter');
    const liShow = document.getElementsByClassName('show');
    if ( liLetter.length === liShow.length) {
        overlay.classList.add('win');
        overlay.children[0].textContent = 'U win'
        overlay.style.display = 'flex';
        
    } else if (missed >= 5 ) {
        overlay.classList.add('lose');
        overlay.children[0].textContent = 'You Lose!';
        overlay.style.display = flex;

    };

};
