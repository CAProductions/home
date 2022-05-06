function ui(ui){
  if(ui=="black"){
    document.getElementById(`body`).style.color = ("black")
    var guessboxes = document.getElementsByClassName("guess_box")
    for (let i = 0; i < guessboxes.length; i++) {
   const element = guessboxes[i];
   element.style.border = "5px solid black"
    }
  }else{
    document.getElementById(`body`).style.color = ("white")
    var guessboxes = document.getElementsByClassName("guess_box")
    for (let i = 0; i < guessboxes.length; i++) {
   const element = guessboxes[i];
   element.style.border = "5px solid white"
 }

  }
}
function toggleColors(){
    cv = c.value
    if(cv=="b1"){
      document.getElementById(`body`).style.backgroundImage = ("none")
      document.getElementById(`body`).style.backgroundColor = ("white")
      ui("black")
  }
  if(cv=="b2"){
    document.getElementById(`body`).style.backgroundImage = ("none")
    document.getElementById(`body`).style.backgroundColor = ("black")
    ui("white")
}
if(cv=="b3"){
  document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, rgba(255,255,255,1) 13%, rgba(173,173,173,1) 100%)")
  document.getElementById(`body`).style.backgroundColor = ("white")
  ui("black")
}
if(cv=="b4"){
  document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, #434343 0%, black 100%)")
  document.getElementById(`body`).style.backgroundColor = ("white")
  ui("white")
}
if(cv=="g1"){
  document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, blue, green)")
  document.getElementById(`body`).style.backgroundSize = ("initial")
  ui("white")
}
if(cv=="g2"){
  document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, rgb(2, 0, 128), rgb(255, 42, 0))")
  document.getElementById(`body`).style.backgroundSize = ("initial")
  ui("white")
}
if(cv=="g3"){
  document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, red, orange)")
  document.getElementById(`body`).style.backgroundSize = ("initial")
  ui("black")

}
if(cv=="g4"){
  document.getElementById(`body`).style.backgroundImage = ("radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)")
  document.getElementById(`body`).style.backgroundSize = ("initial")
  ui("black")
}
if(cv=="g5"){
  document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)")
  document.getElementById(`body`).style.backgroundSize = ("initial")
  ui("black")
}
if(cv=="g6"){
  document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)")
  document.getElementById(`body`).style.backgroundSize = ("initial")
  ui("black")
}
if(cv=="g7"){
  document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, #d53369 0%, #daae51 100%)")
  document.getElementById(`body`).style.backgroundSize = ("initial")
  ui("black")
}
if(cv=="g8"){
  document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, #fcff9e 0%, #c67700 100%)")
  document.getElementById(`body`).style.backgroundSize = ("initial")
  ui("black")
}
if(cv=="g9"){
  document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)")
  document.getElementById(`body`).style.backgroundSize = ("initial")
  ui("black")
}
if(cv=="g10"){
  document.getElementById(`body`).style.backgroundImage = ("radial-gradient(circle, rgba(246,159,218,1) 18%, rgba(225,180,248,1) 58%, rgba(219,232,252,1) 80%, rgba(255,255,255,1) 100%)")
  document.getElementById(`body`).style.backgroundSize = ("initial")
  ui("black")
}
if(cv=="i1"){
    document.getElementById(`body`).style.background = ("url('assets/img/background0.jpg')")
    document.getElementById(`body`).style.backgroundSize = ("800px")
    ui("black")
  }
  if(cv=="i2"){
    document.getElementById(`body`).style.background = ("url('assets/img/background1.jpg')")
    document.getElementById(`body`).style.backgroundSize = ("800px")
    ui("black")
  }
  if(cv=="i3"){
    document.getElementById(`body`).style.background = ("url('assets/img/background2.jpg')")
    document.getElementById(`body`).style.backgroundSize = ("800px")
    ui("black")
  }
  if(cv=="dg1"){
    document.getElementById(`body`).style.background = ("url('assets/img/dog1.png')")
    document.getElementById(`body`).style.backgroundSize = ("100%")
    ui("black")
  }
  if(cv=="dg2"){
    document.getElementById(`body`).style.background = ("url('assets/img/dog2.png')")
    document.getElementById(`body`).style.backgroundSize = ("100%")
    ui("black")
  }
  if(cv=="dg3"){
    document.getElementById(`body`).style.background = ("url('assets/img/dog3.png')")
    document.getElementById(`body`).style.backgroundSize = ("100%")
    ui("black")
  }
  if(cv=="s1"){
    document.getElementById(`body`).style.background = ("url('assets/img/dog1.png')")
    document.getElementById(`body`).style.backgroundSize = ("100%")
    ui("black")
  }
  if(cv=="s2"){
    document.getElementById(`body`).style.background = ("url('assets/img/dog2.png')")
    document.getElementById(`body`).style.backgroundSize = ("100%")
    ui("black")
  }
  if(cv=="s3"){
    document.getElementById(`body`).style.background = ("url('assets/img/dog3.png')")
    document.getElementById(`body`).style.backgroundSize = ("100%")
    ui("black")
  }
  localStorage.setItem(`bg`, cv)
  }
c.onchange = toggleColors
if(localStorage.length>0){
  c.value = localStorage.getItem(`bg`)
  toggleColors()
}