//script da pagina de visualização de todos os cards

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
    },
    card06 = {
        nome: 'Nico Robin',
        figura: '<img src="image/card-06.png" alt="Card">',
        forca: 60,
        hp: 70,
        resistencia: 80,
        velocidade: 75,
        haki: 35
    },
    card07 = {
        nome: 'Franky',
        figura: '<img src="image/card-07.png" alt="Card">',
        forca: 60,
        hp: 60,
        resistencia: 90,
        velocidade: 80,
        haki: 30
    },
    card08 = {
        nome: 'Brook',
        figura: '<img src="image/card-08.png" alt="Card">',
        forca: 65,
        hp: 95,
        resistencia: 75,
        velocidade: 85,
        haki: 60
    },
    card09 = {
        nome: 'Jinbe',
        figura: '<img src="image/card-09.png" alt="Card">',
        forca: 80,
        hp: 80,
        resistencia: 85,
        velocidade: 40,
        haki: 75
    },
    card10 = {
        nome: 'Dracule Mihawk',
        figura: '<img src="image/card-10.png" alt="Card">',
        forca: 90,
        hp: 70,
        resistencia: 75,
        velocidade: 90,
        haki: 100
    },
    card11 = {
        nome: 'Shanks',
        figura: '<img src="image/card-11.png" alt="Card">',
        forca: 95,
        hp: 70,
        resistencia: 80,
        velocidade: 80,
        haki: 100
    },
    card12 = {
        nome: 'Marco',
        figura: '<img src="image/card-12.png" alt="Card">',
        forca: 70,
        hp: 100,
        resistencia: 90,
        velocidade: 75,
        haki: 70
    },
    card13 = {
        nome: 'Portgas D. Ace',
        figura: '<img src="image/card-13.png" alt="Card">',
        forca: 90,
        hp: 85,
        resistencia: 80,
        velocidade: 70,
        haki: 70
    },
    card14 = {
        nome: 'Buggy',
        figura: '<img src="image/card-14.png" alt="Card">',
        forca: 50,
        hp: 50,
        resistencia: 80,
        velocidade: 40,
        haki: 10
    },
    card15 = {
        nome: 'Charlotte Katakuri',
        figura: '<img src="image/card-15.png" alt="Card">',
        forca: 85,
        hp: 80,
        resistencia: 80,
        velocidade: 90,
        haki: 90
    },
    card16 = {
        nome: 'Water D. Law',
        figura: '<img src="image/card-16.png" alt="Card">',
        forca: 70,
        hp: 60,
        resistencia: 50,
        velocidade: 80,
        haki: 65
    },
    card17 = {
        nome: 'Bartolomeo',
        figura: '<img src="image/card-17.png" alt="Card">',
        forca: 50,
        hp: 65,
        resistencia: 85,
        velocidade: 40,
        haki: 35
    },
    card18 = {
        nome: 'Bartolomew Kuma',
        figura: '<img src="image/card-18.png" alt="Card">',
        forca: 90,
        hp: 80,
        resistencia: 70,
        velocidade: 75,
        haki: 75
    },
    card19 = {
        nome: 'Bon Clay',
        figura: '<img src="image/card-19.png" alt="Card">',
        forca: 65,
        hp: 70,
        resistencia: 75,
        velocidade: 80,
        haki: 30
    },
    card20 = {
        nome: 'Boa Hancock',
        figura: '<img src="image/card-20.png" alt="Card">',
        forca: 75,
        hp: 70,
        resistencia: 75,
        velocidade: 80,
        haki: 75
    },
    card21 = {
        nome: 'Capone Gang Bege',
        figura: '<img src="image/card-21.png" alt="Card">',
        forca: 50,
        hp: 50,
        resistencia: 90,
        velocidade: 30,
        haki: 25
    },
    card22 = {
        nome: 'Eustass Kid',
        figura: '<img src="image/card-22.png" alt="Card">',
        forca: 80,
        hp: 80,
        resistencia: 85,
        velocidade: 65,
        haki: 50
    },
    card23 = {
        nome: 'Jozu',
        figura: '<img src="image/card-23.png" alt="Card">',
        forca: 60,
        hp: 70,
        resistencia: 100,
        velocidade: 40,
        haki: 40
    },
    card24 = {
        nome: 'Jack',
        figura: '<img src="image/card-24.png" alt="Card">',
        forca: 80,
        hp: 90,
        resistencia: 90,
        velocidade: 60,
        haki: 45
    },
    card25 = {
        nome: 'Killer',
        figura: '<img src="image/card-25.png" alt="Card">',
        forca: 85,
        hp: 60,
        resistencia: 50,
        velocidade: 85,
        haki: 45
    },
    card26 = {
        nome: 'Niji',
        figura: '<img src="image/card-26.png" alt="Card">',
        forca: 55,
        hp: 50,
        resistencia: 40,
        velocidade: 95,
        haki: 25
    },
    card27 = {
        nome: 'Reiju',
        figura: '<img src="image/card-27.png" alt="Card">',
        forca: 30,
        hp: 95,
        resistencia: 60,
        velocidade: 50,
        haki: 25
    },
    card28 = {
        nome: 'Sakazuki Akainu',
        figura: '<img src="image/card-28.png" alt="Card">',
        forca: 95,
        hp: 80,
        resistencia: 90,
        velocidade: 70,
        haki: 90
    },
    card29 = {
        nome: 'Kaido',
        figura: '<img src="image/card-29.png" alt="Card">',
        forca: 90,
        hp: 80,
        resistencia: 100,
        velocidade: 50,
        haki: 85
    },
    card30 = {
        nome: 'Edward Newgate',
        figura: '<img src="image/card-30.png" alt="Card">',
        forca: 95,
        hp: 95,
        resistencia: 90,
        velocidade: 75,
        haki: 95
    },
    card31 = {
        nome: 'Gol D. Roger',
        figura: '<img src="image/card-31.png" alt="Card">',
        forca: 100,
        hp: 80,
        resistencia: 80,
        velocidade: 80,
        haki: 100
    },
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
