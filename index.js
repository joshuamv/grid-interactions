
var code = [];

var simon = [];

var imgSrc = ["img/break1.svg", "img/break2.svg", "img/break3.svg", "img/break4.svg", "img/break5.svg", "img/break6.svg", "img/break7.svg"];
var counter = 0;


$(document).ready(function() {
  //wait for html

  $(".colorChange").click(function(){
    if( $(this).hasClass("color1") ) {
      $(this).removeClass("color1");
      $(this).addClass("color2");
    }else{
      $(this).addClass("color1");
      $(this).removeClass("color2");
    }
  });

  $("#break-img").on("click", changeSrc);

});

function checkSimon() {
  if (simon[0] == 2 && simon[1] == 4 && simon[2] == 4 && simon[3] == 2){
    console.log("okoko");
    $(".simon-btn").hide();
    $(".simon-answer").show();
  }else{
    simon = [];
  }
}

function simonReset(){
  simon = [];
  $('#simon-beep')[0].play();
}

function simonEntered(color) {
  if ((simon.length) > 2) {
    simon.push(color);
    checkSimon();
    console.log(simon);
    simon = [];
    $('#simon-beep')[0].play();
  }else{
    simon.push(color);
    console.log(simon);
    $('#simon-beep')[0].play();
  }
}

function checkCode() {
  if (code[0] == 2 && code[1] == 3 && code[2] == 3 && code[3] == 5){
    code = ["UNLOCKED"]
    $("#screen-text").text(code.join(""));
    $(".key").prop("onclick", null).off("click");
    $(".button").addClass(".button-active");
    $('#ok')[0].play();
  }else{
    code = [];
    code.push("ERROR");
    $("#screen-text").text(code.join(""));
    $('#error')[0].play();
  }
}

function keyEntered(number) {
  $("#screen-text").text(code);
  if (code == "ERROR") {
    code = [];
    code.push(number);
    console.log(code.join(""));
    $("#screen-text").text(code.join(""));
    $('#key-beep')[0].play();
  }else{
    code.push(number);
    console.log(code.join(""));
    $("#screen-text").text(code.join(""));
    $('#key-beep')[0].play();
  }
}

function changeSrc() {
  if (counter == 6) {
    return;
  } else{
    counter = (counter+1)%imgSrc.length;
    $("#break-img").attr("src", imgSrc[counter]);
    $('#crack')[0].play();
  }
}

function ping() {
  $('#rec')[0].play();
  $("#order-screen-text").text("CRACK, SIMON");
}
