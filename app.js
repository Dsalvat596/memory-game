let cardIcons = ['diamond', 'paper-plane-o', 'anchor', 'bolt', 'cube', 'leaf', 'bicycle', 'bomb' ];
let cardLoop = 0;
let list = $('.deck');

while(cardLoop < 2){
    for(let i = 0; i <cardIcons.length; i++){
        list.append( `<li class="card match" type="${cardIcons[i]}">
        <i class="fa fa-${cardIcons[i]}"></i>
    </li>`)
    }
    cardLoop +=1
}