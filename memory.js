var imgCards=[];
var flipCard=[];
var placedCard=[];
var flippedCards = 0;

function shuffleCards(mix){
  img.sort(mix);
}

function mixUp(){
  var randomValue = Math.random();
  if(randomValue > 0.5){
    return 1;
  }else{
    return -1;
  }
}

function makeBoard(){
  shuffleCards(mixUp());
  for( var i; i<imgCards.length; i++){
    var board ='<div id= "card" ' + i + '><div>';
  }
  document.getElementById("gamePlace").innerHTML = board
  checkIfCardIsMatch();
}
function checkIfCardIsMatch(){
  document.getElementById("card");
  for (var i=0 ; i <imgCards.length; i++){
  card[i].addEventListener( "click", function(){
    if(flipCard.length < 2){
      this.innerHTML = imgCards[i];
      if(flipCard.length==0){
        flipCard.push(imgCards[i]);
        placedCard.push(this.id);
      else if (flipCard.length==1) {
        flipCard.push(imgCards[i]);
        placedCard.push(this.id);
        if(flipCard[0]===flipCard[1]){
          flippedCards += 2;
          flipCard =[];
          placedCard =[];
          if(flippedCards = imgCards.length){
            alert("You completed the game! Good job!")
          }
        }
      }

      }
    else {
        
    }
    }
  });
  }
}




}

function filpCardsOver(){

}

window.addEventListener(makeBoard());
