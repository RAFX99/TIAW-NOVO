
let lugares = [
    {
        local: "Thermas Resort",
        imagem: "https://drive.google.com/uc?export=download&id=1SUYgAIF5v974OyR__pHAlRWLdlxh55sv",
        desc: "O Machadinho Thermas Resort SPA é uma excelente opção para pessoas que visitam Machadinho, oferecendo um ambiente familiar e várias comodidades que vão tornar a sua estadia mais especial.",
        estado: "Rio Grande do Sul",
        destaque: "O Machadinho Thermas"
    },
    {
        local: "Thermas Resort",
        imagem: "https://drive.google.com/uc?export=download&id=1SUYgAIF5v974OyR__pHAlRWLdlxh55sv",
        desc: "O Machadinho Thermas Resort SPA é uma excelente opção para pessoas que visitam Machadinho, oferecendo um ambiente familiar e várias comodidades que vão tornar a sua estadia mais especial.",
        estado: "Rio Grande do Sul",
        destaque: "O Machadinho Thermas"
    },

    {
        local: "Thermas Resort",
        imagem: "https://drive.google.com/uc?export=download&id=1SUYgAIF5v974OyR__pHAlRWLdlxh55sv",
        desc: "O Machadinho Thermas Resort SPA é uma excelente opção para pessoas que visitam Machadinho, oferecendo um ambiente familiar e várias comodidades que vão tornar a sua estadia mais especial.",
        estado: "Rio Grande do Sul",
        destaque: "O Machadinho Thermas"
    },
    {
        local: "Thermas Resort",
        imagem: "https://drive.google.com/uc?export=download&id=1SUYgAIF5v974OyR__pHAlRWLdlxh55sv",
        desc: "O Machadinho Thermas Resort SPA é uma excelente opção para pessoas que visitam Machadinho, oferecendo um ambiente familiar e várias comodidades que vão tornar a sua estadia mais especial.",
        estado: "Rio Grande do Sul",
        destaque: "O Machadinho Thermas"
    },
    {
        local: "Thermas Resort",
        imagem: "https://drive.google.com/uc?export=download&id=1SUYgAIF5v974OyR__pHAlRWLdlxh55sv",
        desc: "O Machadinho Thermas Resort SPA é uma excelente opção para pessoas que visitam Machadinho, oferecendo um ambiente familiar e várias comodidades que vão tornar a sua estadia mais especial.",
        estado: "Rio Grande do Sul",
        destaque: "O Machadinho Thermas"
    },
    

]

      

let estadoSelect = document.getElementById("opcoes").value;
let destaques = ";"
lugares.forEach(lugar => {
    if(lugar.estado===estadoSelect){
        destaques+=`
        <div class="card">
              <img src="https://drive.google.com/uc?export=download&id=1dT1BTFRy4ES08YgwaIU8HWit9r7A7O8b" class="card-img-top" alt="Jogo 1">
              <div class="card-body">
                <h3 class="card-title" >${lugar.titulo}</h3>
                <div class="card-text">${texto}<br><b>Localidade:</b> <p>Rio Grande do Sul</p>
                  </div>
                <!--texto deve haver o mesmo número de linha em todos os cards-->
              </div>
              <button class="open-modal-button">
                Veja mais
              </button>
        
              <div class="modal-container">
                <div class="modal">
                  <p>
                    A Cascata do Caracol
                  </p>
                </div>
              </div>
        
            </div>
        
          </div>`
    }
});
getElementById("locaiDoEstado").innnerHTML = destaques;

