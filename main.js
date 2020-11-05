$(document).ready(function(){
//     milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.


//definisco array di oggetti

    const icons = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        }
    ];



    // definire un array di colori e associare ad ogni
    // tipo di icona un colore.
    // Visualizzare le icone di colore diverso in base al
    // tipo.


    //creo array di colori
    const colors = ['green', 'pink', 'blue'];
    const iconType = [];

    //scorro ogni oggetto di icons per prendere il suo type
    icons.forEach((currentIcon) => {
        const {name, prefix, type, family} = currentIcon;
        if (!iconType.includes(type)) {
            iconType.push(type);
        }

    });

    console.log(iconType);
    //aggiungere una select per filtrare le icone in
    // base al tipo.
    // Popolare le options della select dinamicamente
    // e, ogni volta che cambia il valore selezionato,
    // visualizzare le icone corrispondenti.

    //aggiungo option per ogni tipo di icona
    iconType.forEach((thisIconType) => {
        console.log(thisIconType);
        $('.select').append(`
            <option value="${thisIconType}">${thisIconType}</option>"
        `)

    });



    // Utilizzando la funzione forEach e il template
    // literal, visualizzare in pagina tutte le icone con il
    // proprio nome.

    icons.forEach((thisIcon) => {
        // console.log(thisIcon);
        const {name, prefix, type, family} = thisIcon;
        // console.log(thisIcon);
        //prendo l'indice di ogni type dell'oggetto
        const indexOfType = iconType.indexOf(type);
        // console.log(name, indexOfType);
        //recupero colore corrispondente del tipo
        const iconColor = colors[indexOfType];
        // console.log(iconColor);

        $('.icon-container').append(`
            <div class='icons'>
                <i class="${family} ${prefix}${name} fa-2x" style="color: ${iconColor}""></i>
                <p>${name}</P>
            </div>`);
    });








});
