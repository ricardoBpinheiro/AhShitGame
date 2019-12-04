var pointcount = 0;
var multiplier = 1;
var aux = 0;

// Upgrades
var autoClick = 0; 
var farms = 0; 
var cows = 0;
var grandma = 0;
var bike = 0;

function update(){
    document.getElementById('text').value = pointcount;
    document.title = pointcount + " Shit Points";

    document.getElementById('ammountMultipler').innerHTML = "Multiplier Upgrade x" + (multiplier + 1);
    document.getElementById('ammountMultipler2').innerHTML = "x" + (multiplier + 1);
    document.getElementById('costMultiplier').innerHTML = ((multiplier + 1) * 100) + " Shit Points";
    document.getElementById('currentMultiplier').innerHTML = "Your Current Multiplier is x" + (multiplier);

    document.getElementById('ammountAutoClick').innerHTML = "You Own " + autoClick + " Auto Clickers";
    document.getElementById('costAutoClick').innerHTML = ((autoClick + 1) * 12) + " Shit Points";
    document.getElementById('ammountFarms').innerHTML = "You Own " + farms + " Farms";
    document.getElementById('costFarms').innerHTML = ((farms + 1) * 15) + " Shit Points";
    document.getElementById('ammountCows').innerHTML = "You Own " + cows + " Cows";
    document.getElementById('costCows').innerHTML = ((cows + 1) * 30) + " Shit Points";
    document.getElementById('ammountGrandma').innerHTML = "You Own " + grandma + " Grandmas";
    document.getElementById('costGrandma').innerHTML = ((grandma + 1) * 100) + " Shit Points";
    document.getElementById('ammountBike').innerHTML = "You Own " + bike + " Bikes";
    document.getElementById('costBike').innerHTML = ((bike + 1) * 300) + " Shit Points"

    document.getElementById('pointsPerSecond').innerHTML = "You Are Gaining " + (((autoClick) + (farms * 2) + (cows * 3) + (grandma * 4) + (bike * 10)) * multiplier) + " Shit Points per/s";
}

function timer(){
    pointcount = pointcount + autoClick * multiplier;
    pointcount = pointcount + farms * 2 * multiplier;
    pointcount = pointcount + cows * 3 * multiplier;
    pointcount = pointcount + grandma * 4 * multiplier;
    pointcount = pointcount + bike * 10 * multiplier;
    update();
}
setInterval(timer, 1000);

function add(){
    pointcount = pointcount + 1;
    aux = aux + 1;
    document.getElementById("cj").src = "img/cj.png";
    update();
}

function save(){
    localStorage.setItem("pointcount", pointcount);
    localStorage.setItem("autoClick", autoClick);
    localStorage.setItem("farms", farms);
    localStorage.setItem("cows", cows);
    localStorage.setItem("grandma", grandma);
    localStorage.setItem("bike", bike);
    localStorage.setItem("multiplier", multiplier);
}

function load(){
    pointcount = localStorage.getItem("pointcount");
    pointcount = parseInt(pointcount);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    farms = localStorage.getItem("farms");
    farms = parseInt(farms);
    cows = localStorage.getItem("cows");
    cows = parseInt(cows);
    grandma = localStorage.getItem("grandma");
    grandma = parseInt(grandma);
    bike = localStorage.getItem("bike");
    bike = parseInt(bike);
    multiplier = localStorage.getItem("multiplier");
    multiplier = parseInt(multiplier);
    update();
}

//Compra de Upgrades
function buyAutoClick(){
    if(pointcount >= ((autoClick + 1) * 12)){
        pointcount = pointcount - ((autoClick + 1) * 12);
        autoClick = autoClick + 1;
        update();
    }
}
function buyFarm(){
    if(pointcount >= ((farms + 1) * 15)){
        pointcount = pointcount - ((farms + 1) * 15);
        farms = farms + 1;
        update();
    }
}

function buyCow(){
    if(pointcount >= ((cows + 1) * 30)){
        pointcount = pointcount - ((cows + 1) * 30);
        cows = cows + 1;
        update();
    }
}

function buyGrandma(){
    if(pointcount >= ((grandma + 1) * 100)){
        pointcount = pointcount - ((grandma + 1) * 100);
        grandma = grandma + 1;
        update();
    }
}

function buyBike(){
    if(pointcount >= ((bike + 1) * 300)){
        pointcount = pointcount - ((bike + 1) * 300);
        bike = bike + 1;
        update();
    }
}

function buyMultiplier(){
    if(pointcount >= ((multiplier + 1) * 100)){
        pointcount = pointcount - ((multiplier + 1) * 100);
        multiplier = multiplier + 1;
        update();
    }
}
