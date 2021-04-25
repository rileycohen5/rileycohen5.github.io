function play() {
  var audio = new Audio("assets/tunes/Have It All ft.Raphaella.mp3");  
  audio.play();
  console.log('yes')
}

  document.getElementById("music").onclick = play;


