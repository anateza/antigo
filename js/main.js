$("").on("click", function(){
  $("").hide();
  $("").show();
});

var musica = new Audio('');
var tentativas = 3;
var tentativas2 =3;
var certo = 0;
var end = false;

music1 = new Audio('musica/amor-de-fim-de-noite-letra.mp3');
music2 = new Audio('musica/algumas-frases-prod-papatinho.mp3');
music3 = new Audio('musica/kenny-g.mp3');
music4 = new Audio('musica/cheia-de-marra.mp3');
music5 = new Audio('musica/quando-a-vontade-bater.mp3');


$("section.inicio button").on("click", function(){
  music1.play();
  music2.play();
  
  $("section").hide();
  $("section.cantores-1").show();
});

$("section.cantores-1 ul img.certo").one("click", function() {
  $(this).css({opacity: 0.7});
      certo++;
      $("span.certo").text(certo);

  if (this.className === "certo 9") {
    music1.pause();
    
  }else if (this.className === "certo 6") {
    music2.pause();
  }

  if (certo == 2) {

    music3.play();
    music4.play();
    music5.play();
    
    $("section").hide();
    $("section.cantores-4").show();
    
  }
});
$("section.cantores-4 ul img.certo").one("click", function() {
  $(this).css({opacity: 0.7});
      certo++;
      $("span.certo").text(certo);

  if (this.className === "certo 1") {
    music3.pause();
    
  }else if (this.className === "certo 3") {
    music4.pause();
  }
  else if (this.className === "certo 4") {
    music5.pause();
  }

  if (certo == 5) {

    musiccorrect = new Audio('musica/correct.mp3');
    musiccorrect.play();
    
    $("section").hide();
    $("section.cantores-3").show();
    
  }
});

var erros = 0;
$("section.cantores-1 ul img.errado").one("click",function(){
  tentativas--;
  $(this).css({
    opacity: 0.5
  });
  if(tentativas < 1){
    music1.pause();
    music2.pause();
    musicaerror = new Audio("musica/game-over-acarde.wav");
    musicaerror.play();

    //transição de tela
    $("section").hide();
    $("section.cantores-2").show();

  }
  document.querySelector(".valTentativas").innerHTML = tentativas;

});

var erros = 0;
$("section.cantores-4 ul img.errado").one("click",function(){
  tentativas2--;
  $(this).css({
    opacity: 0.5
  });
  if(tentativas2 < 1){
    music5.pause();
    music4.pause();
    music3.pause();
    musicaerror = new Audio("musica/game-over-acarde.wav");
    musicaerror.play();

    //transição de tela
    $("section").hide();
    $("section.cantores-2").show();

  }
  document.querySelector(".valTentativas2").innerHTML = tentativas2;

});

$("#home").on('click',function(){
  $('section.inicio').show();
  document.location.reload();
});
$("#home").on('click',function(){
  $('section.cantores-4').hide();
  $('section.inicio').show();
  document.location.reload();
});


$('section.cantores-2 button').on('click',function(){
  $('section').hide();
  $('section.inicio').show();
  document.location.reload();
});

$('section.cantores-3 button').on('click',function(){
  $('section').hide();
  $('section.inicio').show();
  document.location.reload();
});

