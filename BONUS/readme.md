PROBLEMA:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue. Nello zip allegato trovate le immagini, il file index.html, il file js con già l'array di oggetti impostato ed il file css.

1. Inserisco l'array nel data() del JS;

2. Inserisco fuori dal return un indice con valore 0;

3. Creo dei Methods:
    3.1- Inserisco la funzione per il cambio immagine in base alla posizione dell'array;
    
    3.2- Inserisco la funzione per scorrere in avanti l'img corrispondente all'indice      dell'array, inoltre metto un if che mi controlli se sono arrivato all'ultima immagine dell'array mi riporta l'indice stesso in posizione 0;

    3.3- Inserisco la funzione per scorrere indietro l'img corrispondente all'indice      dell'array, inoltre metto un if che mi controlli se sono arrivato all'ultima immagine dell'array mi riporta l'indice stesso all'ultima posizione dell'array;

4. Implemento nel DOM con BIND una classe che assegni la classe ACTIVE (vedi CSS) alle THUMB nel caso in cui la posizione dell'immagine visualizzata corrisponda all'indice dell'array; altrimenti non assegno nessuna classe;

5. Implemento un ciclo V-FOR per scorrere tutte le immagini dell'array;


BONUS
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce


1. Implementata funzione CHANGEIMG cambia direttamente l'immagine visualizzata nell'ITEM:

2. Creo un metodo CREATED, dove implemento il this con la funzione.

2.1 
Creo una funzione AUTOPLAY in modo che cambi immagine ogni 3 secondi in maniera automatica e la assegno come classe nel DOM;

3. Creo un ulteriore funzione di StartAutoScroll e StopAutoScroll  e le applico nel DOM all'ITEM con le funzioni MOUSEOVER E MOUSELEAVE;
