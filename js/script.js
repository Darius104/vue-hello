// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//
// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        testoH1: 'Image:',
        image: 'https://picsum.photos/id/1005/600/200'
    }
});