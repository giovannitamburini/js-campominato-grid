/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// PSEUDO CODICE
/*
- creo un bottone nel body HTML e lo richiamo in js
- creo un div-container all'interno del quale inserirò gli elementi che si creeranno all'evento click del prossimo punto
- creo un evento click nel bottone
- creo una serie di comandi all'interno dell'evento click tali per cui al premere del bottone:
  ° si creano 100 caselle uguali disposte in una griglia 10x10 (disposizione tramite css)
  ° ad ognuna delle caselle devo aggiungere un evento click tale per cui:
    ° la cella cliccata si colora di azzuro
    ° genero un messaggio in console contenente l'indice della cella cliccata
*/

//- creo un bottone nel body HTML e lo richiamo in js
let generatorElement = document.getElementById('generator');

// - creo un div-container all'interno del quale inserirò gli elementi che si creeranno all'evento click del prossimo punto
let cellContainerElement = document.getElementById('cell-container');

generatorElement.addEventListener('click', function() {

    contatore = 0;

    while ( contatore < 100) {

        createCell(cellContainerElement, contatore + 1);

        contatore++
    }

})






//FUNCTION

function createCell (container, index) {

    let cell = document.createElement('div');
    cell.innerHTML = index;
    cell.style.width = '50px';
    cell.style.height = '50px';
    cell.style.border = '1px solid black';
    container.append(cell);
}