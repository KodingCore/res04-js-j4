function exercice1()
{
    let btnColor = document.getElementById("btn-change-color");
    let box1 = document.getElementById("box1");
    btnColor.addEventListener("click", function(){
        box1.style.backgroundColor = "blue";
    });
}
exercice1();

function exercice2()
{
    let btnMove = document.getElementById("btn-move");
    let box2 = document.getElementById("box2");
    btnMove.addEventListener("click", function(){
        box2.classList.add("move");
    });
}
exercice2();

function exercice3()
{
    let ingredients = ["Salade", "Tomate", "Oignon"];
    let ul = document.getElementsByTagName("ul");
    let btnIngredient = document.getElementById("btn-add-ingredients");
    let newText;
    let newLi;
    
    btnIngredient.addEventListener("click", function(){
         
        for(let ingredient of ingredients){
            newLi = document.createElement("li");
            newText = document.createTextNode(ingredient);
            
            ul[0].appendChild(newLi);
            newLi.appendChild(newText);
        }
    })
}
exercice3();

function exercice4()
{
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
    
    let btn = document.getElementById("btn-add-hero");
    let tbody = document.getElementsByTagName("tbody");
    let tr;
    let td;
    let td2;
    let nodeName;
    let nodeSecret;
    let i = 0;
    
    btn.addEventListener("click", function(){
        if(i<heroes.length ){
            tr = document.createElement("tr");
            
            td = document.createElement("td");
            td2 = document.createElement("td");
            
            nodeName = document.createTextNode(heroes[i].name);
            nodeSecret = document.createTextNode(heroes[i].secret);
            
            tbody[0].appendChild(tr);
            tr.appendChild(td);
            td.appendChild(nodeName);
            tr.appendChild(td2);
            td2.appendChild(nodeSecret);
        }
        i++;
    });
}
exercice4();



function exercice5()
{
    let blue = document.getElementById("blue");
    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let btn = document.getElementById("btn-turn");
    
    btn.addEventListener("click", function(){
        blue.setAttribute("id", "green");
        green.setAttribute("id", "blue");
    });
}

exercice5();

function exercice6()
{
    let ball = document.getElementById("ball");
    let btn = document.getElementById("btn-roll");
    
    btn.addEventListener("click", function(){
        ball.classList.add("roll");
    })
}

exercice6();