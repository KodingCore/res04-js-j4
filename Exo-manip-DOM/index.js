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
    let btn = document.getElementById("btn-add-hero");
    let tbody = document.getElementsByTagName("tbody");
    
    
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
    
    let hero;
    let tr;
    let td;
    let td2;
    let nodeName;
    let nodeSecret;
    
    for(hero of heroes){
        btn.addEventListener("click", function(){
            tr = document.createElement("tr");
            tbody.appendChild(tr);
            td = document.createElement("td");
            tr.appendChild(td);
            nodeName = document.createTextNode(hero.name);
            td.appendChild(nodeName);
            td2 = document.createElement("td");
            tr.appendChild(td);
            nodeSecret = document.createElement(hero.sercet);
            td2.appendChild(nodeName);
        });
    }
    
    /*in tbody
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
    
    */
    
}
exercice4();

function exercice5()
{

}

function exercice6()
{

}