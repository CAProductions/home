var answer = cAnswer[ Math.floor(Math.random() * cAnswer.length) ]
var score = ""
  function update() {
    document.getElementById(`write_h`).innerHTML = `Wordle Free`
    console.log(`write: ${answer}`)
  }
  update()
  function check () {
    var a = document.getElementById ("textarea").value
    var a = a.toLowerCase()
      if (a.length == 5){
        if (allowed.includes(a) || cAnswer.includes(a)){
        document.getElementById ("textarea").value = ""

          turn += 1
          if (answer==a){
            
            document.getElementById(`b${turn}1`).textContent = a[0]
            score = score+""
            document.getElementById(`b${turn}2`).textContent = a[1]
            document.getElementById(`b${turn}3`).textContent = a[2]
            document.getElementById(`b${turn}4`).textContent = a[3]
            document.getElementById(`b${turn}5`).textContent = a[4]
            document.getElementById(`b${turn}1`).style.backgroundColor = ("#00c02b")
            document.getElementById(`b${turn}2`).style.backgroundColor = ("#00c02b")
            document.getElementById(`b${turn}3`).style.backgroundColor = ("#00c02b")
            document.getElementById(`b${turn}4`).style.backgroundColor = ("#00c02b")
            document.getElementById(`b${turn}5`).style.backgroundColor = ("#00c02b")
            Toast.show(`You got it!`, `sucsess`)
            return
          }else{
            let i = 0
            do{
              i += 1
              if (getLetter(i, a) == getLetter(i, answer)){
                document.getElementById(`b${turn}${i}`).textContent = a[i-1]
                document.getElementById(`b${turn}${i}`).style.backgroundColor = ("#00c02b")
              }else{
                if (answer.includes(a[i-1])){
                  document.getElementById(`b${turn}${i}`).textContent = a[i-1]
                  document.getElementById(`b${turn}${i}`).style.backgroundColor = ("yellow")
                }else{
                  document.getElementById(`b${turn}${i}`).textContent = a[i-1]
                  document.getElementById(`b${turn}${i}`).style.backgroundColor = ("gray")
                }
              }
            }while(i<5)
            if (turn==5){
            Toast.show(`the correct word was ${answer}`, `sucsess`)
          }
          }
        }else{
          Toast.show('That Word is Not included in word list', 'error')
        }
      }else{
        Toast.show('Make sure word is 5 letters', 'error')
      }
  }
  function getLetter (n, string) {
    return `${string[n-1]}  `
  }
  var mode = 1
  function toggleMode() {
if (mode==1){
  mode = 0
  document.getElementById(`body`).style.backgroundColor = ("lineat")
  document.getElementById(`body`).style.color = ("white")
  document.getElementById(`mode_btn`).textContent = (`Light Mode`)
  var guessboxes = document.getElementsByClassName("guess_box")
  for (let i = 0; i < guessboxes.length; i++) {
      const element = guessboxes[i];
      element.style.border = "5px solid white"
  }

}else{
  mode = 1
  document.getElementById(`body`).style.backgroundColor = ("white")
  document.getElementById(`body`).style.color = ("black")
  document.getElementById(`mode_btn`).textContent = (`Dark Mode`)
  var guessboxes = document.getElementsByClassName("guess_box")
  for (let i = 0; i < guessboxes.length; i++) {
      const element = guessboxes[i];
      element.style.border = "5px solid black"
  }

}
  }
function updateTXT(){
  var a = document.getElementById ("textarea").value
  var a = a.toLowerCase()
  let i1 = 0
  do{
    i1 += 1
    if (a[i1-1]!==undefined){
    document.getElementById(`b${turn+1}${i1}`).textContent = a[i1-1]
  }else{
    document.getElementById(`b${turn+1}${i1}`).textContent = "?"

  }
  }while(i1<5)
}
setInterval(updateTXT, 100)
document.getElementById(`textarea`).addEventListener("input", () => {
  updateTXT()
})
var rdm = Math.random() * 3
if (Math.floor(rdm)==0){
  document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, blue, green)")
  }
if (Math.floor(rdm)==1){
document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, rgb(2, 0, 128), rgb(255, 42, 0))")
}
if (Math.floor(rdm)==2){
  document.getElementById(`body`).style.backgroundImage = ("linear-gradient(90deg, red, orange)")
  }
