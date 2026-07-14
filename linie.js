const linie = {

P01:{

    "Cisówka - Pętla":[
        {n:"Mińsk Mazowiecki /Dw. PKP/ 02"},
        {n:"Rondo Bitwy Warszawskiej 1920r. 01"},
        {n:"Kazikowskiego 03"},
        {n:"Urząd Miasta 03"},
        {n:"11 Listopada 02"}
    ],

    "Mińsk Mazowiecki /Dw. PKP/":[
        {n:"Dworzec"},
        {n:"Kościół"},
        {n:"Rynek"}
    ]

},

P02:{

    "Rynek (Stanisławów)":[
        {n:"Okuniew 01"},
        {n:"Jeździecka 01"},
        {n:"Szosowa 01"},
        {n:"Rynek (Stanisławów)"}
    ],

    "Okuniew":[
        {n:"Rynek (Stanisławów)"},
        {n:"Szosowa 02"},
        {n:"Jeździecka 02"},
        {n:"Okuniew 02"}
    ]

},

P03:{

  "Michałów - Pętla":[
    {n:"Okuniew 01"}
],

  "Okuniew":[
    {n:"Michałów - Pętla"}
  ]

}

};

const header = document.getElementById("header");
const content = document.getElementById("content");


function menu(){

    header.innerHTML = "Menu";

    content.innerHTML = `

    <div class="card" onclick="listaLinii()">
        🚌 Trasy linii
    </div>

    `;

}



function listaLinii(){

    header.innerHTML = "Trasy linii";

    content.innerHTML = `

    <div class="back" onclick="menu()">
        ← Powrót
    </div>

    `;


    for(let linia in linie){

        content.innerHTML += `

        <div class="card" onclick="kierunki('${linia}')">
            ${linia}
        </div>

        `;

    }

}



function kierunki(linia){

    header.innerHTML = linia;

    content.innerHTML = `

    <div class="back" onclick="listaLinii()">
        ← Powrót
    </div>

    `;


    for(let kierunek in linie[linia]){

        content.innerHTML += `

        <div class="card" onclick="trasa('${linia}','${kierunek}')">
            ${kierunek}
        </div>

        `;

    }

}



function trasa(linia,kierunek){

    header.innerHTML = linia+" → "+kierunek;


    content.innerHTML = `

    <div class="back" onclick="kierunki('${linia}')">
        ← Powrót
    </div>

    <div class="route">

    </div>

    `;


    let route=document.querySelector(".route");


    linie[linia][kierunek].forEach(przystanek=>{


        route.innerHTML += `

        <div class="stop">

            <div class="circle"></div>

            <div class="name">
                ${przystanek.n}
            </div>

        </div>

        `;


    });


}


// start aplikacji

menu();
