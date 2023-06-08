const {createApp} = Vue;

//Implemento funzione createApp

createApp({
    data() {
        return {
            //Array Oggetti
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            //Creo un indice dove prende il primo elemento dell'array
            activeImage: 0,
        }
    },
    // nel metodo created di VUEJS invoco la funzione autoScroll
    created() {
        this.startAutoScroll();
    },
    methods: {
        changeImg(index){
            this.activeImage = index;
        },
        // creo la funzione per andare avanti con le immagini e la collego al DOM del pulsante corrispondente
        nextImg(){
            // incremento di uno l'activeImger
            this.activeImage++;
            //Controllo se e' arrivato alla fine dell'array e lo faccio tornare all'inizio
            if(this.activeImage > this.slides.length - 1){
                this.activeImage = 0
            }
        },
        // creo la funzione per andare indietro con le immagini e la collego al DOM del pulsante corrispondente
        prevImg(){
            // incremento di uno l'activeImger
            this.activeImage--;
            //Controllo se e' arrivato all'inizio dell'array e lo faccio tornare alla fine
            if(this.activeImage < 0){
                this.activeImage = this.slides.length - 1;
            }
        },
        // Implemento la funzione Autoscroll ogni 3 secondi
        startAutoScroll(){
            this.autoScroll = setInterval(()=> {
                this.nextImg()
            }, 3000)
        },
        // Funzione per stoppare l'autoscroll
        stopAutoscroll(){
            clearInterval(this.autoScroll);
        }
    },
}).mount('#app')
