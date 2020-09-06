var windowWidth = 0
var windowHeight = 0

function adjustGameScreenSize() {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    
    console.log(windowHeight, windowWidth)
}


var mosquitoMaxWidth = 90
var mosquitoMaxHeight = 90

function insertRandomMosquito() {
    var insertPosX = Math.floor(Math.random() * (windowWidth - mosquitoMaxWidth))
    var insertPosY = Math.floor(Math.random() * (windowHeight - mosquitoMaxHeight))

    var mosquito = document.createElement('img')

    mosquito.src = 'img/mosca.png'
    mosquito.className = randomMosquitoSize()
    mosquito.style.position = 'absolute'
    mosquito.style.top = insertPosY + 'px'
    mosquito.style.left = insertPosX + 'px'
    
    document.body.appendChild(mosquito)

    console.log(insertPosY, insertPosX)
}

function randomMosquitoSize() {
    var classth = Math.floor(Math.random() * 3)

    switch(classth) {
    case 0:
        return 'mosquito1'
    case 1:
        return 'mosquito2'
    case 2:
        return 'mosquito3'
    }
}
