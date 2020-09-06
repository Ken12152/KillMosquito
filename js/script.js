var windowWidth = 0
var windowHeight = 0

function adjustGameScreenSize() {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    
    console.log(windowHeight, windowWidth)
}


var mosquitoWidth = 50
var mosquitoHeight = 50

function insertRandomMosquito() {
    var insertPosX = Math.floor(Math.random() * (windowWidth - mosquitoWidth))
    var insertPosY = Math.floor(Math.random() * (windowHeight - mosquitoHeight))

    var mosquito = document.createElement('img')

    mosquito.src = 'img/mosca.png'
    mosquito.className = 'mosquito'
    mosquito.style.top = insertPosY + 'px'
    mosquito.style.left = insertPosX + 'px'
    
    document.body.appendChild(mosquito)

    console.log(insertPosY, insertPosX)
}
