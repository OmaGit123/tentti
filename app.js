

var tulostus = document.getElementById("tulostussivutbtn")

tulostus.onclick = function() {

    document.querySelector(".active").classList.remove("active")
    document.querySelector("#tulostussivu").classList.add("active")
    console.log("KIITOS tästä upeasta ja intensiivisestä pika-kurssista :)!!!!");
}

//KUVANPIILOTUS


var kuvan = document.getElementById("kuvanpiilotussivubtn")

kuvan.onclick = function() {

document.querySelector(".active").classList.remove("active")
document.querySelector("#kuvanpiilotussivu").classList.add("active")

}

var piilotakuva = document.getElementById("piilotakuvabtn")

piilotakuva.onclick = function() {
    document.getElementById("kuvaid").hidden=true


}



//OTSIKONVAIHTO

var otsikon = document.getElementById("otsikonvaihtobtn");
otsikon.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#otsikonvaihtosivu").classList.add("active")
}

//var vaihdaotsikko = document.getElementById("vaihdaotsikkobtn")

//vaihdaotsikko.onclick = function() {
  //  document.getElementById("vaihdaotsikkobtn")


//}
var otsikonvaihto = document.getElementById("vaihdaotsikkobtn");
otsikonvaihto.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#otsikonvaihtosivu2").classList.add("active")
}
