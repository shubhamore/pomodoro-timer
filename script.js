let box = document.getElementById('box')
let startStop = document.querySelector(".start-stop")
let btn = document.querySelectorAll(".btn")
let time = 300
let isWorking = false
updateTime()
btn.forEach(b => {
    b.addEventListener("click", function () {
        checkWorking()
        time = b.dataset.time
        updateTime()
    })
})
function checkWorking() {
    if (isWorking) {
        isWorking = false
        startStop.textContent = "Start"
    }
}
function updateTime() {
    let temp = time
    let min = ("0"+Math.floor(temp / 60)).slice(-2)
    temp %= 60
    let sec =("0"+temp).slice(-2)
    box.textContent = min + ":" + sec
}
startStop.addEventListener("click", function () {
        if (isWorking == false) {
            startStop.textContent = "Stop"
            isWorking = true
            var t = setInterval(() => {
                if(time>0&&isWorking){
                    time--
                    updateTime()
                }
                else{
                    stop(t)
                }
            }, 1000)
        }
        else{
            checkWorking()
        }
})
function stop(t) {
    if (t) {
        clearInterval(t)
    }
}