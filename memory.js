//will add the images afterward
var imgCards=[ "https://lh3.googleusercontent.com/ZZPdzvlpK9r_Df9C3M7j1rNRi7hhHRvPhlklJ3lfi5jk86Jd1s0Y5wcQ1QgbVaAP5Q=w300",
    "https://lh3.googleusercontent.com/ZZPdzvlpK9r_Df9C3M7j1rNRi7hhHRvPhlklJ3lfi5jk86Jd1s0Y5wcQ1QgbVaAP5Q=w300",
    "https://g.twimg.com/Twitter_logo_blue.png",
    "https://g.twimg.com/Twitter_logo_blue.png",
    "http://us.mullenlowe.com/wp-content/uploads//2013/10/instagramlogo.jpg",
    "http://us.mullenlowe.com/wp-content/uploads//2013/10/instagramlogo.jpg",
    "http://theappshowbox.com/wp-content/uploads/2015/10/LinkedIn-Logo.png",
    "http://theappshowbox.com/wp-content/uploads/2015/10/LinkedIn-Logo.png",
    "https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/93616/area14mp/image-20150902-6700-t2axrz.jpg",
    "https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/93616/area14mp/image-20150902-6700-t2axrz.jpg",
    "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",
    "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",
    "http://archiveteam.org/images/1/15/Apple-logo.jpg",
    "http://archiveteam.org/images/1/15/Apple-logo.jpg",
    "http://dri1.img.digitalrivercontent.net/Storefront/Site/msusa/images/promo/en-US/msstore_400x400.jpg",
    "http://dri1.img.digitalrivercontent.net/Storefront/Site/msusa/images/promo/en-US/msstore_400x400.jpg",
    "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-glossy-green-orbs-icons-alphanumeric/102895-3d-glossy-green-orb-icon-alphanumeric-dollar-sign.png",
    "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-glossy-green-orbs-icons-alphanumeric/102895-3d-glossy-green-orb-icon-alphanumeric-dollar-sign.png",
    "http://www.multimedialab.be/blog/wp-content/uploads/2009/04/logo_ps.gif",
    "http://www.multimedialab.be/blog/wp-content/uploads/2009/04/logo_ps.gif"
  ];
var flipCard=[];
var flippedCards = 0;

var choice = prompt("What game difficulty do you want? \n Easy \n Medium \n Hard");
choice = choice.toLowerCase();

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
    board += '<img src = "'+imgCards[i]+'"/>'
    board += '</div>'
  }
  document.getElementById('gamePlace').innerHTML = board;
  document.getElementsByTagName("p")[0].innerHTML = "flipped cards: "+ counter;
  $("img").hide();
}

if(choice === "hard"){
  counter = 50;
  makeBoard();
  $(".card").click(function(){
    if(counter > 0) {
      if ((flipCard.length < 2) && ($(this).children("img").hasClass("up")) === false) {
        $(this).children("img").css("background-color","white");
        $(this).children("img").show();
        $(this).children("img").addClass("up");
        if (flipCard.length === 0){
          flipCard.push($(this).children("img").attr("src"));
          counter--;
          document.getElementsByTagName("p")[0].innerHTML = "flips left: "+ counter;
        }
        else if (flipCard.length === 1) {
            flipCard.push($(this).children("img").attr("src"));
            counter--;
            document.getElementsByTagName("p")[0].innerHTML = "flips left: "+ counter;
            if(flipCard[0]===flipCard[1]){
              $(".card").children("img[src='"+flipCard[1]+"']").addClass("match");
              flippedCards += 2;
              flipCard =[];
              if(flippedCards === imgCards.length){
                document.getElementsByTagName("p")[0].innerHTML = "You Completed the Game. The amount of flips you have left is "+ counter;
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
  else if (counter === 0) {
    document.getElementsByTagName("p")[0].innerHTML = "flips left: "+ counter + "\n Game Over!";
  }
  });
  }
else if(choice === "medium"){
  counter = 74;
  makeBoard();
  $(".card").click(function(){
    if(counter > 0) {
      if ((flipCard.length < 2) && ($(this).children("img").hasClass("up")) === false) {
        $(this).children("img").css("background-color","white");
        $(this).children("img").show();
        $(this).children("img").addClass("up");
        if (flipCard.length === 0){
          flipCard.push($(this).children("img").attr("src"));
          counter--;
          document.getElementsByTagName("p")[0].innerHTML = "flips left: "+ counter;
        }
        else if (flipCard.length === 1) {
            flipCard.push($(this).children("img").attr("src"));
            counter--;
            document.getElementsByTagName("p")[0].innerHTML = "flips left: "+ counter;
            if(flipCard[0]===flipCard[1]){
              $(".card").children("img[src='"+flipCard[1]+"']").addClass("match");
              flippedCards += 2;
              flipCard =[];
              if(flippedCards === imgCards.length){
                document.getElementsByTagName("p")[0].innerHTML = "You Completed the Game. The amount of flips you have left is "+ counter;
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
  else if (counter === 0) {
    document.getElementsByTagName("p")[0].innerHTML = "flips left: "+ counter + "\n Game Over!";
  }
 });
}
else if (choice === "easy") {
  counter =0;                                                                                                            makeBoard();
  $(".card").click(function(){
    if ((flipCard.length < 2) && ($(this).children("img").hasClass("up")) === false) {
      $(this).children("img").css("background-color","white");
      $(this).children("img").show();
      $(this).children("img").addClass("up");
      if (flipCard.length === 0){
        flipCard.push($(this).children("img").attr("src"));
        counter++;
        document.getElementsByTagName("p")[0].innerHTML = "flipped cards: "+ counter;
      }
      else if (flipCard.length === 1) {
          flipCard.push($(this).children("img").attr("src"));
          counter++;
          document.getElementsByTagName("p")[0].innerHTML = "flipped cards: "+ counter;
          if(flipCard[0]===flipCard[1]){
            $(".card").children("img[src='"+flipCard[1]+"']").addClass("match");
            flippedCards += 2;
            flipCard =[];
            if(flippedCards === imgCards.length){
              document.getElementsByTagName("p")[0].innerHTML = "You Completed the Game. Your flip count is "+ counter;
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
  });
}
















// // window.addEventListener(makeBoard());
