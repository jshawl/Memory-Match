//will add the images afterward
var imgCards=[getImage("avatars/leafers-seed"),
    getImage("avatars/leafers-seedling"),
    getImage("avatars/leafers-sapling"),
    getImage("avatars/leafers-tree"),
    getImage("avatars/leafers-ultimate"),
    getImage("avatars/marcimus"),
    getImage("avatars/mr-pants"),
    getImage("avatars/mr-pink"),
    getImage("avatars/old-spice-man"),
    getImage("avatars/robot_female_1")
    getImage("avatars/leafers-seed"),
        getImage("avatars/leafers-seedling"),
        getImage("avatars/leafers-sapling"),
        getImage("avatars/leafers-tree"),
        getImage("avatars/leafers-ultimate"),
        getImage("avatars/marcimus"),
        getImage("avatars/mr-pants"),
        getImage("avatars/mr-pink"),
        getImage("avatars/old-spice-man"),
        getImage("avatars/robot_female_1")
  ];
var flipCard=[];
var flippedCards = 0;

function shuffleCards(){
  Array.prototype.shuffle = function()
  {
    var i = this.length, j, temp;
    while ( --i )
    {
      j = Math.floor( Math.random() * (i + 1));
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  };
  imgCards.shuffle();
}

function makeBoard(){
  shuffleCards();
  var board = '';
  for( var i = 0; i<imgCards.length; i++){
    board += '<div class = "card">'
    board += '<img src = "'+ imgCards[i] +'"/>'
    board += '</div>'
  }
document.getElementById('gamePlace').innerHTML = board;
$("img").hide();
}

$(".card").click(function(){
  if (flipCard.length < 2 &&  ($(this).children("img").hasClass("up")) === false) {
    $(this).children("img").show();
    $(this).children("img").addClass("up");
    if (flipCard.length = 0){
      flipCard.push($(this).children("img").attr("src"));
      if (flipCard.length = 1) {
        flipCard.push($(this).children("img").attr("src"));
        if(flipCard[0]===flipCard[1]){
          $(".card").children("img[src='" + flipCard[1] + "']").addClass("match");
          flippedCards += 2;
          flipCard =[];
          if(flippedCards === imgCards.length){
            alert("You Win");
          }
        }
        else{
          setTimeout(function() {
          $("img").not(".match").hide();
          $("img").not(".match").removeClass("up");
          }, 500);
          flipCard =[];
        }


      }
    }
  }
});







// window.addEventListener(makeBoard());
