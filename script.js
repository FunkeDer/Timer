let user_input_time = document.getElementById("user_input_time")
let button = document.getElementById("button")

let previousTimer = null; // initialize previous timer variable

function consoleLogFunction(){
  let semicircleRed = document.getElementById('semicircle-red')
  let semicircleBlue = document.getElementById('semicircle-blue')
  let semicircleWhite = document.getElementById('semicircle-white')
  let time = document.getElementById('user_input_time')
  let timer = document.getElementById('timer')

  let hr = 0
  let min = 0
  let sec = time.value

  let hours = hr * 360000
  let minutes = min * 60000
  let seconds = sec * 1000
  let setTime = hours + minutes + seconds
  let startTime = Date.now()
  let futureTime = startTime + setTime

  // clear previous timer loop
  if (previousTimer) {
    clearInterval(previousTimer);
    previousTimer = null;
  }

  let timerLoop = setInterval(couterDownTimer)
  couterDownTimer()

  // if(time.value == ''){
  //   alert('Enter time')
  // }

  function couterDownTimer(){

    let currentTime = Date.now()
    let remainingTime = futureTime - currentTime
    let angle = (remainingTime / setTime) * 360
      
    timer.innerHTML = Math.round((remainingTime / 1000))*(+1)

    if(angle > 180){
      semicircleRed.style.transform = 'rotate(180deg)'
      semicircleBlue.style.transform = `rotate(${angle}deg)`
      semicircleWhite.style.display = 'none'
    }else{
      semicircleBlue.style.transform = `rotate(${angle}deg)`
      semicircleRed.style.transform = `rotate(${angle}deg)`
      semicircleWhite.style.display = 'block'
    }

    if(remainingTime < 0){
      clearInterval(timerLoop)
      alert('time is out')
    }
  }

  // update previous timer variable
  previousTimer = timerLoop;
}

button.addEventListener('click', consoleLogFunction);
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    consoleLogFunction();
  }
});