var answer = cAnswer[ Math.floor(Math.random() * cAnswer.length) ]
var c = document.getElementById(`colors`)
var winturn = 0
var score = ""
  function update() {
    document.getElementById(`write_h`).innerHTML = `Wordle Lite`
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
            score = score + "🟩"
            document.getElementById(`b${turn}2`).textContent = a[1]
            score = score + "🟩"
            document.getElementById(`b${turn}3`).textContent = a[2]
            score = score + "🟩"
            document.getElementById(`b${turn}4`).textContent = a[3]
            score = score + "🟩"
            document.getElementById(`b${turn}5`).textContent = a[4]
            score = score + "🟩<br>"
            document.getElementById(`b${turn}1`).style.backgroundColor = ("#00c02b")
            document.getElementById(`b${turn}2`).style.backgroundColor = ("#00c02b")
            document.getElementById(`b${turn}3`).style.backgroundColor = ("#00c02b")
            document.getElementById(`b${turn}4`).style.backgroundColor = ("#00c02b")
            document.getElementById(`b${turn}5`).style.backgroundColor = ("#00c02b")
            win()
            return
          }else{
            let i = 0
            do{
              i += 1
              if (getLetter(i, a) == getLetter(i, answer)){
                document.getElementById(`b${turn}${i}`).textContent = a[i-1]
                document.getElementById(`b${turn}${i}`).style.backgroundColor = ("#00c02b")
                score = score+"🟩"
                if (i==5){
                  score = score + "<br>"
                }
              }else{
                if (answer.includes(a[i-1])){
                  document.getElementById(`b${turn}${i}`).textContent = a[i-1]
                  document.getElementById(`b${turn}${i}`).style.backgroundColor = ("yellow")
                  score = score+"🟨"
                  if (i==5){
                    score = score + "<br>"
                  }
                }else{
                  document.getElementById(`b${turn}${i}`).textContent = a[i-1]
                  document.getElementById(`b${turn}${i}`).style.backgroundColor = ("gray")
                  score = score+"⬜"
                  if (i==5){
                    score = score + "<br>"
                  }
                }
              }
            }while(i<5)
            if (turn==6){
            lose()
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
  function win(){
    score = `${turn}/6<br>${score}`
    document.getElementById(`winscreen`).innerHTML = (`<h3>You Won!</h3><p>${score}</p><button onclick="closePopUp()">Close</button>`)
    document.getElementById(`winscreen`).style.display = ("block")
    document.getElementById ("textarea").disabled = "disabled"
  }
  function lose(){
    document.getElementById(`winscreen`).innerHTML = (`<h3>You Lost!</h3><p>${score}</p><button onclick="closePopUp()">Close</button>`)
    document.getElementById(`winscreen`).style.display = ("block")
    document.getElementById ("textarea").disabled = "disabled"
  }
  function closePopUp(){
    document.getElementById(`winscreen`).style.display = ("none")
  }
