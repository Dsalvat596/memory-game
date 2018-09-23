const cardIcons = ['gem', 'plane', 'anchor', 'bolt', 'cube', 'leaf', 'bicycle', 'bomb' ];
let cardLoop = 0;
let list = $('.deck');

const createCards = () => {
    while(cardLoop < 2){
        shuffleCards(cardIcons);
        for(let i = 0; i <cardIcons.length; i++){
            list.append( `<li class="card match" type="${cardIcons[i]}">
            <i class="fa fa-${cardIcons[i]}"></i>
        </li>`)
        }
        cardLoop +=1
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

createCards();