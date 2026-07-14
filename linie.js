const linie = {

P01 Linia Powiatowa:{

    "Cisówka - Pętla":[
        {n:"Mińsk Mazowiecki /Dw. PKP/ 02"},
        {n:"Rondo Bitwy Warszawskiej 1920r. 01"},
        {n:"Kazikowskiego 03"},
        {n:"Urząd Miasta 03"},
        {n:"11 Listopada 02"},
        {n:"Boczna 02"},
        {n:"Leśna (Mińsk Mazowiecki) 06"},
        {n:"Krasickiego 03"},
        {n:"Urocza 02"},
        {n:"Kościelna (Królewiec) 02"},
        {n:"Arynów 04"},
        {n:"Arynów 02"},
        {n:"Wspólna 02"},
        {n:"Strażacka (Brzóze) 02"},
        {n:"Długa (Brzóze) 02"},
        {n:"Kościelna (Żuków) 02"},
        {n:"Mińska (Żuków) 02"},
        {n:"Wybranieckich 02"},
        {n:"Wspólna (Cyganka) 02"},
        {n:"Gorzanka mostek 02"},
        {n:"Gorzanka przejazd kolejowy 02"},
        {n:"Gorzanka 02"},
        {n:"Walercin Stary 02"},
        {n:"Walercin kapliczka 02"},
        {n:"Szkolna (Pustelnik) 02"},
        {n:"Pustelnik-Kościół 02"},
        {n:"Cisówka 02"},
        {n:"Cisówka - Pętla 01"}
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
