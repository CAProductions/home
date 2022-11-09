if(localStorage.getItem(`games`)==undefined || localStorage.getItem(`games`)== null){
  localStorage.setItem(`win`, 0)
  localStorage.setItem(`loss`, 0)
  localStorage.setItem(`games`, 0)
}
var answer = cAnswer[Math.floor(Math.random() * cAnswer.length)]
var c = document.getElementById(`colors`)
var winturn = 0
var score = ""
function update() {
  document.getElementById(`write_h`).innerHTML = `Wordle Lite`
  console.log(`write: ${answer}`)
}
update()
function check() {
  var a = document.getElementById("textarea").value
  var a = a.toLowerCase()
  if (a.length == 5) {
    if (allowed.includes(a) || cAnswer.includes(a)) {
      document.getElementById("textarea").value = ""

      turn += 1
      if (answer == a) {
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
      } else {
        let i = 0
        do {
          i += 1
          if (getLetter(i, a) == getLetter(i, answer)) {
            document.getElementById(`b${turn}${i}`).textContent = a[i - 1]
            document.getElementById(`b${turn}${i}`).style.backgroundColor = ("#00c02b")
            score = score + "🟩"
            if (i == 5) {
              score = score + "<br>"
            }
          } else {
            if (answer.includes(a[i - 1])) {
              document.getElementById(`b${turn}${i}`).textContent = a[i - 1]
              document.getElementById(`b${turn}${i}`).style.backgroundColor = ("yellow")
              score = score + "🟨"
              if (i == 5) {
                score = score + "<br>"
              }
            } else {
              document.getElementById(`b${turn}${i}`).textContent = a[i - 1]
              document.getElementById(`b${turn}${i}`).style.backgroundColor = ("gray")
              score = score + "⬜"
              if (i == 5) {
                score = score + "<br>"
              }
            }
          }
        } while (i < 5)
        if (turn == 6) {
          lose()
        }
      }
    } else {
      Toast.show('Word isnt included in word list.', 'error')
    }
  } else {
    Toast.show('Make sure word is 5 letters', 'error')
  }
}
function getLetter(n, string) {
  return `${string[n - 1]}  `
}
function updateTXT() {
  var a = document.getElementById("textarea").value
  var a = a.toLowerCase()
  let i1 = 0
  do {
    i1 += 1
    if (a[i1 - 1] !== undefined && a[i1 - 1] !== " ") {
      document.getElementById(`b${turn + 1}${i1}`).textContent = a[i1 - 1]
    } else {
      document.getElementById(`b${turn + 1}${i1}`).textContent = "?"

    }
  } while (i1 < 5)
}
setInterval(updateTXT, 100)
document.getElementById(`textarea`).addEventListener("input", () => {
  updateTXT()
})
function win() {
  var prevStats = `<p>Wins: ${localStorage.getItem(`win`)}<br>Losses: ${localStorage.getItem(`loss`)}<br>Games: ${localStorage.getItem(`games`)}</p>`
  lsPlus.addInt(`win`, 1)
lsPlus.addInt(`games`, 1)

  score = `${turn}/6<br>${score}`
  document.getElementById(`winscreen`).innerHTML = (`<h3>You Won!</h3><p>${score}</p>${prevStats}<button onclick="closePopUp()">Close</button>`)
  document.getElementById(`winscreen`).style.display = ("block")
  document.getElementById("textarea").disabled = "disabled"
}
function lose() {
  var prevStats = `<p class="bg">Wins: ${localStorage.getItem(`win`)}<br>Losses: ${localStorage.getItem(`loss`)}<br>Games: ${localStorage.getItem(`games`)}</p>`
  lsPlus.addInt(`loss`, 1)
  lsPlus.addInt(`games`, 1)
  //localStorage.setItem(`games`, localStorage.getItem(`games`)+1)
  document.getElementById(`winscreen`).innerHTML = (`<h3 class="bg">You Lost!</h3><p class="bg">${score}</p><p class="bg">The answer was: ${answer}</p>${prevStats}<button  class="bg" onclick="closePopUp()">Close</button>`)
  document.getElementById(`winscreen`).style.display = ("block")
  document.getElementById("textarea").disabled = "disabled"
}
function closePopUp() {
  document.getElementById(`winscreen`).style.display = ("none")
}
const lsPlus = {}
lsPlus.getItemLength = function (item) {
    return (localStorage.getItem(item).length)
}
lsPlus.getItemInt = function (item) {
    return (parseInt(localStorage.getItem(item)))
}
lsPlus.addInt = function (name, n) {
    //adds a number to a item in localstorage
    let parsedLocalStorage = parseInt(localStorage.getItem(name))
    let parsedNewStorage = parsedLocalStorage + n
    localStorage.setItem(name, parsedNewStorage)
}
lsPlus.subInt = function (name, n) {
    //subtracts a number from a item in localstorage
    let parsedLocalStorage = parseInt(localStorage.getItem(name))
    let parsedNewStorage = parsedLocalStorage - n
    localStorage.setItem(name, parsedNewStorage)
}
lsPlus.multInt = function (name, n) {
    //adds a number to a item in localstorage
    let parsedLocalStorage = parseInt(localStorage.getItem(name))
    let parsedNewStorage = parsedLocalStorage * n
    localStorage.setItem(name, parsedNewStorage)
}
lsPlus.divInt = function (name, n) {
    //subtracts a number from a item in localstorage
    let parsedLocalStorage = parseInt(localStorage.getItem(name))
    let parsedNewStorage = parsedLocalStorage / n
    localStorage.setItem(name, parsedNewStorage)
}
lsPlus.set = function (name, newStored) {
    localStorage.setItem(name, newStored)
}
function setStats(){
  var prevStats = `<p>Wins: ${localStorage.getItem(`win`)}<br>Losses: ${localStorage.getItem(`loss`)}<br>Games: ${localStorage.getItem(`games`)}<br>W/L ratio: ${localStorage.getItem(`wins`)/localStorage.getItem(`games`)}</p>`
}
