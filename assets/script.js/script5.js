function play() {
    var audio = new Audio("assets/tunes/solitude.mp3");  
    audio.play();
  }
  
    document.getElementById("music").onclick = play;