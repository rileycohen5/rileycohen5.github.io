function setVisible() {
    document.getElementById("mygenre_box1").style.visibility = "visible";
    console.log('hello')
}

function setHidden() {
  document.getElementById("mygenre_box1").style.visibility = "hidden";
  console.log('no')
}


function myFunction() {
  var box = document.getElementById("mygenre_box1");
  box.classList.toggle("element");
  console.log('yes')
}

function myFunction2() {
    var box = document.getElementById("mygenre_box2");
    box.classList.toggle("element2");
    console.log('yes')
  }


  function myFunction3() {
    var box = document.getElementById("mygenre_box3");
    box.classList.toggle("element3");
    console.log('yes')
  }

  function myFunction4() {
    var box = document.getElementById("mygenre_box4");
    box.classList.toggle("element4");
    console.log('yes')
  }

  function myFunction5() {
    var box = document.getElementById("mygenre_box5");
    box.classList.toggle("element5");
    console.log('yes')
  }

  function myFunction6() {
    var box = document.getElementById("mygenre_box6");
    box.classList.toggle("element6");
    console.log('yes')
  }

//console.log(document.getElementsByTagName("*"));
//document.getElementById("clicky").onclick = setVisible;
//document.getElementById("mygenre_box1").onclick = setHidden;
document.getElementById("clicky1").onclick = myFunction;
document.getElementById("clicky2").onclick = myFunction2;
document.getElementById("clicky3").onclick = myFunction3;
document.getElementById("clicky4").onclick = myFunction4;
document.getElementById("clicky5").onclick = myFunction5;
document.getElementById("clicky6").onclick = myFunction6;