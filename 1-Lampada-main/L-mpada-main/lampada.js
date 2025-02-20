const lamp = document.getElementById('lamp');

const TurnOn = document.getElementById('TurnOn');

const TurnOff = document.getElementById('TurnOff');

function isLampBroken (){
    return lamp.src.indexOff('quebrada')> -1
}

function lampOn(){
    if(!isLampBroken()){
lamp.src= './img/ligada.jpg';
    }
}
function lampOff(){
    if(!isLampBroken){
lamp.src='./img/desligada.jpg';
    }
}





