
let coderList = [
    {
        name: "MARCOS",
        img: "Archivos/marcianitas/Marciano1.png",
        id: 0,
        life: true
    },
    {
        name: "MARGARITA",
        img: "Archivos/marcianitas/Marciano2.png",
        id: 1,
        life: true
    },
    {
        name:"CLAUDETTE",
        img:"Archivos/marcianitas/Marciano3.png",
        id:2,
        life: true
    },
    {
        name:"MAGDALENA",
        img:"Archivos/marcianitas/Marciano1.png",
        id:3,
        life: true
    },
    {
        name:"ALDARA",
        img:"Archivos/marcianitas/Marciano2.png",
        id:4,
        life: true
    },
    {
        name:"MARY",
        img:"Archivos/marcianitas/Marciano3.png",
        id:5,
        life: true
    },
    {
        name:"ROCIO",
        img:"Archivos/marcianitas/Marciano1.png",
        id:6,
        life: true
    },
    {
        name:"CELE",
        img:"Archivos/marcianitas/Marciano2.png",
        id:7,
        life: true
    },
    {
        name:"ROSMERY",
        img:"Archivos/marcianitas/Marciano3.png",
        id:8,
        life: true
    },
    {
        name:"CARMEN",
        img:"Archivos/marcianitas/Marciano1.png",
        id:9,
        life: true
    },
    {
        name:"JENNIFER",
        img:"Archivos/marcianitas/Marciano2.png",
        id:10,
        life: true
    },
    {
        name:"DELIA",
        img:"Archivos/marcianitas/Marciano3.png",
        id:11,
        life: true
    },
    {
        name:"NOHE",
        img:"Archivos/marcianitas/Marciano1.png",
        id:12,
        life: true
    },
    {
        name:"EVA",
        img:"Archivos/marcianitas/Marciano2.png",
        id:13,
        life: true
    },
    {
        name:"AINHOA",
        img:"Archivos/marcianitas/Marciano3.png",
        id:14,
        life: true
    },
    {
        name:"MIRIAM",
        img:"Archivos/marcianitas/Marciano1.png",
        id:15,
        life: true
    },
    {
        name:"MILA",
        img:"Archivos/marcianitas/Marciano2.png",
        id:16,
        life: true
    },
    {
        name:"MARTA",
        img:"Archivos/marcianitas/Marciano3.png",
        id:17,
        life: true
    },
    {
        name:"MARIA",
        img:"Archivos/marcianitas/Marciano1.png",
        id:18,
        life: true
    },
    {
        name:"ROSIBEL",
        img:"Archivos/marcianitas/Marciano2.png",
        id:19,
        life: true
    },
    {
        name:"ANYI",
        img:"Archivos/marcianitas/Marciano3.png",
        id:20,
        life: true
    },
    {
        name:"CELIA",
        img:"Archivos/marcianitas/Marciano1.png",
        id:21,
        life: true
    },
    {
        name:"DIANA",
        img:"Archivos/marcianitas/Marciano2.png",
        id:22,
        life: true
    },
    {
        name:"ANA",
        img:"Archivos/marcianitas/Marciano3.png",
        id:23,
        life: true
    },{
        name:"PAOLA",
        img:"Archivos/marcianitas/Marciano1.png",
        id:24,
        life: true
    },
    {
        name:"SERGIO",
        img:"Archivos/marcianitas/Marciano2.png",
        id:25,
        life: true
    },
    {
        name:"MIRIAM Q",
        img:"Archivos/marcianitas/Marciano3.png",
        id:26,
        life: true
    }
];

let addMartian = document.getElementById('addMartian');


for (let i= 0; i < coderList.length; i++) {
    var divElement = document.createElement("div");
    var imgElement = document.createElement("img");
    var pElement = document.createElement("p");

    divElement.id = "divItem" + (i + 1);
    divElement.className = "player";
    imgElement.id = "imgItem" + (i + 1);
    pElement.id = "pItem" + (i + 1);
    pElement.innerText = coderList[i].name;
    imgElement.src= coderList[i].img;

    addMartian.appendChild(divElement);
    divElement.appendChild(pElement);
    divElement.appendChild(imgElement);

}

let newOne = document.querySelector('#buttons') 

function add() {
    
    newOne.innerHTML += `<div id="form"><input type="text" id="name" name="user_name"> 
    <a href="#" onClick="create()" class="myButton">CREATE</a></div>`;
   

}
function create() {
    let reset = document.getElementById('form');
    let newMartian = document.querySelector('input').value;
    coderList.push({name: newMartian, img: 'Archivos\marcianitas\Marciano3.png', id:coderList.length});
    var divElement = document.createElement("div");
    var pElement = document.createElement("p");
    pElement.innerText = newMartian;
    divElement.id = "newPlayer";
    addMartian.appendChild(divElement);
    divElement.appendChild(pElement);
    reset.innerHTML= "";
}
   
function winner() {

    let nameList = coderList.map(player => player.name);
    let grab = Math.floor(Math.random() * nameList.length - 1)+1;
    coderList.forEach(element => { if(element.id == grab){
    addMartian.innerHTML = `<div id="ganador"><h1>${element.name},</h1><br><h2>¡La garra te ha elegido!<br>!OOOOOOOOOOOOOOOOOOOH!</div>`;

    }});
   
}

const botonGo = document.querySelector("#btPlay")
botonGo.addEventListener("click", winner)

function reset() {
    let divPlayer = document.querySelector("#newPlayer");
    addMartian.innerHTML = "";
    printMartians();
    coderList.length(-1)
    coderList.forEach(element => { 
        if (element.id == 'newPlayer'){
            divPlayer.innerHTML = "";  
        }})
    }      
    


function printMartians() {
    for (let i= 0; i < coderList.length; i++) {
        var divElement = document.createElement("div");
        var imgElement = document.createElement("img");
        var pElement = document.createElement("p");
    
        divElement.id = "divItem" + (i + 1);
        divElement.className = "player";
        imgElement.id = "imgItem" + (i + 1);
        pElement.id = "pItem" + (i + 1);
        pElement.innerText = coderList[i].name;
        imgElement.src= coderList[i].img;
    
        addMartian.appendChild(divElement);
        divElement.appendChild(pElement);
        divElement.appendChild(imgElement);
    
    }
}




