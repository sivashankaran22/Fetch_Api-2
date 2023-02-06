const para = document.createElement("p");
para.setAttribute("class","text-center para_txt");
para.textContent ="🪶🪶🪶 Any man who must say 'I am the King' is no true King.!!!!! GAME OF THRONES QUOTES";
document.body.append(para);

const quot4 = document.createElement("img");
quot4.setAttribute("class","pho");
quot4.setAttribute("src","./Gotlogo.svg.png");

const div1 = document.createElement("div");
div1.setAttribute("class","div_content");
div1.appendChild(quot4);

document.body.append(div1);

const button = document.createElement("button");
button.setAttribute("class","btn");
button.textContent ="KINGDOM.....🌠 !!!";
document.body.append(button);


// -----------------! Table content
// table----------------------------!
const table = document.createElement("table");
table.setAttribute("class","table table-bordered");
table.setAttribute("id","tebody");

document.body.append(table)

// tablerow-----------------------!
const tablerow = document.createElement("tr");
tablerow.setAttribute("class","tab-row");
table.appendChild(tablerow);

// tablehead----------------------!
const tablehead1 = document.createElement("th");
tablehead1.setAttribute("class","tablehead");
tablehead1.setAttribute("id","tb1");
tablehead1.innerText ="Name";
tablerow.appendChild(tablehead1)

const tablehead2 = document.createElement("th");
tablehead2.setAttribute("class","tablehead");
tablehead2.setAttribute("id","tb2");
tablehead2.innerText ="sentence"
tablerow.appendChild(tablehead2)

const tablehead3 = document.createElement("th");
tablehead3.setAttribute("class","tablehead");
tablehead3.setAttribute("id","tb3");
tablehead3.innerText ="Slug"
tablerow.appendChild(tablehead3)

const tablehead4 = document.createElement("th");
tablehead4.setAttribute("class","tablehead");
tablehead4.setAttribute("id","tb4");
tablehead4.innerText ="House_Name"
tablerow.appendChild(tablehead4)

const tablehead5 = document.createElement("th");
tablehead5.setAttribute("class","tablehead");
tablehead5.setAttribute("id","tb5");
tablehead5.innerText ="House_Slug"
tablerow.appendChild(tablehead5);

// tablebody-----------------------!
const tabbody = document.createElement("tbody");
tabbody.setAttribute("class","tbody");
tabbody.setAttribute("id","tabbody");
table.appendChild(tabbody);

// -------------------!API functions
const gotRecord = async () => {
    const response = await fetch("https://api.gameofthronesquotes.xyz/v1/random/80");
    const details = await response.json();
    console.log(details);
    createcol(details)
};
const createcol = (details) => {
    let Tableval = "";
    details.map(details => {
    Tableval += `<tr>
        <td>${details.character.name}</td>
        <td class = checkid>${details.sentence}</td>
        <td>${details.character.slug}</td>
        <td>${details.character.house.name}</td>
        <td>${details.character.house.slug}</td>
    </tr> ` ;

    });
   document.getElementById('tabbody').innerHTML=Tableval;
};
gotRecord();
