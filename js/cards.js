const deckFull = [
    card00 = {
        nome: 'Monkey D. Luffy',
        figura: '<img src="image/card-00.png" alt="Card">',
        forca: 95,
        hp: 70,
        resistencia: 60,
        velocidade: 75,
        haki: 80
    },
    card01 = {
        nome: 'Roronoa Zoro',
        figura: '<img src="image/card-01.png" alt="Card">',
        forca: 85,
        hp: 90,
        resistencia: 75,
        velocidade: 70,
        haki: 70 
    },
    card02 = {
        nome: 'Nami',
        figura: '<img src="image/card-02.png" alt="Card">',
        forca: 90,
        hp: 40,
        resistencia: 40,
        velocidade: 60,
        haki: 30
    },
    card03 = {
        nome: 'Usopp',
        figura: '<img src="image/card-03.png" alt="Card">',
        forca: 50,
        hp: 60,
        resistencia: 50,
        velocidade: 85,
        haki: 60
    },
    card04 = {
        nome: 'Sanji',
        figura: '<img src="image/card-04.png" alt="Card">',
        forca: 80,
        hp: 70,
        resistencia: 60,
        velocidade: 90,
        haki: 65
    },
    card05 = {
        nome: 'Tony Tony Chopper',
        figura: '<img src="image/card-05.png" alt="Card">',
        forca: 45,
        hp: 75,
        resistencia: 90,
        velocidade: 80,
        haki: 30
    }

];


function montaCartas () {

    for (i = 0; i <= deckFull.length-1; i++) {
        document.body.innerHTML += `<div id="carta-p1">
        <h1 id="nomeP1">${deckFull[i].nome}</h1>
        <p id="figuraP1">${deckFull[i].figura}</p>
        <div class="fundo-atr">
            <table>
                <tr>
                    <td class="table-atr">Força</td>
                    <td id="forcaP1">${deckFull[i].forca}</td>
                </tr>
                <tr>
                    <td class="table-atr">HP</td>
                    <td id="hpP1">${deckFull[i].hp}</td>
                </tr>
                <tr>
                    <td class="table-atr">Resistência</td>
                    <td id="resistenciaP1">${deckFull[i].resistencia}</td>
                </tr>
                <tr>
                    <td class="table-atr">Velocidade</td>
                    <td id="velocidadeP1">${deckFull[i].velocidade}</td>
                </tr>
                <tr>
                    <td class="table-atr">Haki</td>
                    <td id="hakiP1">${deckFull[i].haki}</td>
                </tr>
            </table>
        </div>
    </div>`;
    }
};

montaCartas();
// for (i = 0; i <= 8; i++) {
//     campo.innerHTML += `<p>Olá</p>`
// }



