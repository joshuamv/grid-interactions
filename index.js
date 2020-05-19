
$(document).ready(function() {
  //wait for html

  $(".btn").click(function(){
    if( $(this).hasClass("color1") ) {
      $(this).removeClass("color1");
      $(this).addClass("color2");
    }

    if( $(this).hasClass("color2") ) {
      $(this).removeClass("color2");
      $(this).addClass("color1");
    }

    if( $(this).hasClass("color3") ) {
      $(this).removeClass("color3");
      $(this).addClass("color4");
    }

    if( $(this).hasClass("color4") ) {
      $(this).removeClass("color4");
      $(this).addClass("color3");
    }

  });
});




function colorChange() {

}


function mini() {

}


function sky() {
  //sound of birds
  //clouds move
}

function clap() {
  //sound
}


function polkaDot() {

}

function alcohol() {

}


function glide() {

}


function spin() {

}
