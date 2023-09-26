const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const cards = [
    'a',
    'e',
    'i',
    'o',
    'u',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disableCards = document.querySelectorAll ('disabled-card');

    if (disableCards.lenght === 20) {
        alert('Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}');
    }
}
r
const checkCards = () => {
    const firstCards = firstCard.getAttribute('data-cards');
    const secondCards = secondCard.getAttribute('data-cards');

    if(firstCards === secondCards){

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCardCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);
    }
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}

const createCard = (cards) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${cards}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-cards', cards)

  return card;
}

const loadGame = () => {
    const duplicateCards = [...cards, ...cards];
  
    const shuffledArray = duplicateCards.sort(() => Math.random() - 0.5);
  
    shuffledArray.forEach((cards) => {
      const card = createCard(cards);
      grid.appendChild(card);
    });
  }
  
  const startTimer = () => {
  
    this.loop = setInterval(() => {
      const currentTime = +timer.innerHTML;
      timer.innerHTML = currentTime + 1;
    }, 1000);
  
  }
  
  window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
  }