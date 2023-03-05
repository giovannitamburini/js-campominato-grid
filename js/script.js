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

let difficultyElement = document.getElementById('difficulty');

// - creo un evento click sul bottone
generatorElement.addEventListener('click', function() {

    // - imposto un contatore che mi servirà per uscire dal ciclo while
    contatore = 0;

    /* CODICE NON OTTIMIZZATO --------------------------

    // - condizione difficoltà selezionata = easy
    if (difficultyElement.value == 'easy') {
        // - creo un ciclo while che si ripete tante volte quante sono le caselle di cui necessito(in questo caso 100)
        while ( contatore < 100) {
            // - richiamo la funzione generatrice di cella
            createCell(cellContainerElement, contatore + 1, '50px');

            // - aggiungo un unità al contatore per non creare un loop infinito
            contatore++
        }
    }

    // - condizione difficoltà selezionata = normal
    if (difficultyElement.value == 'normal') {

        while ( contatore < 81) {
            // - richiamo la funzione generatrice di cella
            createCell(cellContainerElement, contatore + 1, 'calc( 500px / 9)');
    
            // - aggiungo un unità al contatore per non creare un loop infinito
            contatore++
        }
    }

    // - condizione difficoltà selezionata = hard
    if (difficultyElement.value == 'hard') {

        while ( contatore < 49) {
            // - richiamo la funzione generatrice di cella
            createCell(cellContainerElement, contatore + 1, 'calc(500px / 7)');

            // - aggiungo un unità al contatore per non creare un loop infinito
            contatore++
        }
    }
    
    FINE CODICE NON OTTIMIZZATO ------------------------------ */

    // CODICE OTTIMIZZATO

    // creo una variabile per indicare il numero di celle da creare in base alla difficoltà selezionata
    let numberCells = 0;
    // creo una varibaile per impostare la misura della cella in px in base alla difficoltà selezionata
    let cellPixel;

    // - condizione difficoltà selezionata = easy
    if (difficultyElement.value == 'easy') {

        //numero celle
        numberCells = 100;
        //misura in px della singola cella
        cellPixel = '50px';
        
    // - condizione difficoltà selezionata = normal
    } else if (difficultyElement.value == 'normal') {

        //numero celle
        numberCells = 81;
        //misura in px della singola cella
        cellPixel = 'calc( 500px / 9)';

    // - condizione difficoltà selezionata = hard
    } else {

        //numero celle
        numberCells = 49;
        //misura in px della singola cella
        cellPixel = 'calc(500px / 7)';

    }

    // creo un ciclo che generi la griglia
    while (contatore < numberCells) {

        // - richiamo la funzione generatrice di cella
        createCell(cellContainerElement, contatore + 1, cellPixel);

        // - aggiungo un unità al contatore per non creare un loop infinito
        contatore++
    }

    // FINE CODICE OTTIMIZZATO

})

//FUNCTION

//- funzione generatrice di cella
function createCell (container, index, pixel) {

    //creo un elemento div
    let cell = document.createElement('div');

    //inserisco qualcosa(in questo caso il parametro 'index') all'interno dell'elemento creato
    cell.innerHTML = index;

    //modifico lo stile dell'elemento creato
    cell.style.width = pixel;
    cell.style.height = pixel;
    cell.style.border = '1px solid black';

    //modifico lo stile per posizionare centralmente il contenuto della cella creata
    cell.style.display = 'flex';
    cell.style.justifyContent = 'center';
    cell.style.alignItems = 'center';

    //appendo ad un elemento (in questo caso il parametro 'container') la cella creata
    container.append(cell);

    //aggiungo un evento click al parametro cella
    cell.addEventListener('click', function() {

        //aggiungo/cambio il background dell'elemento cell
        cell.style.backgroundColor = '#00FFFF';

        //stampo in console il parametro index inserito all'interno dell'elemento cell
        console.log(index);
    })

    return cell

}