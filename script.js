let user_input_time = document.getElementById("user_input_time")
let  = document.getElementById("button")

function consoleLogFunction(){

let semicircleRed = document.getElementById('semicircle-red')
let semicircleBlue = document.getElementById('semicircle-blue')
let semicircleWhite = document.getElementById('semicircle-white')
let time = document.getElementById('user_input_time')
let timer = document.getElementById('timer')

let hr = 0
let min = 0
let sec = Number(time.value)

let hours = hr * 360000
let minutes = min * 60000
let seconds = sec * 1000
let setTime = hours + minutes + seconds
let startTime = Date.now()
let futureTime = startTime + setTime

let timerLoop = setInterval(couterDownTimer)
couterDownTimer()

function couterDownTimer(){

    let currentTime = Date.now()
    let remainingTime = futureTime - currentTime
    let angle = (remainingTime / setTime) * 360


    if(timer.innerHTML = Math.round((remainingTime / 1000)) == 0){
        timer.innerHTML = Math.round((remainingTime / 1000)).toLocaleString('en-US', {minimumFractionDigits:2, useGrouping: true})

    }else{
        timer.innerHTML = Math.round((remainingTime / 1000))
    }


    if(angle > 180){
        semicircleRed.style.transform = 'rotate(180deg)'
        semicircleBlue.style.transform = `rotate(${angle}deg)`
        semicircleWhite.style.display = 'none'
    }else{
        semicircleBlue.style.transform = `rotate(${angle}deg)`
        semicircleRed.style.transform = `rotate(${angle}deg)`
        semicircleWhite.style.display = 'block'
    }

    if(remainingTime<0){
        clearInterval(timerLoop)
        // semicircleBlue.style.display = 'none'
        // semicircleRed.style.display = 'none'
        // semicircleWhite.style.display = 'none'
    }

    if (!time) {
        alert('Error');
      }

}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      couterDownTimer();
    }
  });


}