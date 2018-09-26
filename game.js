const cardIcons = ['gem', 'plane', 'anchor', 'bolt', 'cube', 'leaf', 'bicycle', 'bomb' ];
let openedCards = [];
let cardLoop = 0;
let list = $('.deck');
let moves = 0;
let counter = $('.moves')

//declare cards globally
let cards = [...$('.card')]  //... spread converts nodelist to true array

// declaring variable of matchedCards
let matchedCard = $(".match");
const startGame = () => {
    while(cardLoop < 2){
        shuffleCards(cardIcons);
        for(let i = 0; i <cardIcons.length; i++){
            list.append( `<li class="card" type="${cardIcons[i]}">
            <i class="fa fa-${cardIcons[i]}"></i>
        </li>`)
        }
        cardLoop +=1
    }
    //collect all cards that were created, and add event listener to each
    let cards = [...$('.card')]  //... spread converts nodelist to true array
    for(let j = 0; j < cards.length; j++){
        card = cards[j]
        card.addEventListener("click", displayCard)
        card.addEventListener("click", cardOpen);
    }
}

// array randomizer algorithm
const shuffleCards = (array) => {
    var i = 0
        , j = 0
        , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}
const displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
    
}

// check for matches

const cardOpen = function () {
    openedCards.push(this)
    let len = openedCards.length;
    if(openedCards.length === 2){
        moveCounter();
        console.log(moves)
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unMatched();
        }
    }
}


//handle matches
const matched = function(){
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    openedCards = [];
}

//handle unmatches

const unMatched = function(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        enable();
        openedCards = [];
    },1100);  
}

//disable cards temporarily
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

//enable cards and disable matched cards
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(let i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}

function moveCounter(){    
    moves++;    
    counter.html(moves);
}

window.onload = startGame();