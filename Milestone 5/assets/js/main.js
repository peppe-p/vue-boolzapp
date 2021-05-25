/* 
Milestone 5 opzionale
●Cancella messaggio: cliccando sul messaggio appare
un menu a tendina chepermette di cancellare il messaggio selezionato.

●Visualizzazione ora e ultimo messaggio inviato/ricevutonella lista dei contatti
*/

const app = new Vue({
    el: "#root",
    data: {
        index: 0,
        preview: this.lastMsg,
        hover: false,
        time: function () {
            let ora = "0" + parseInt(Math.random() * 24);
            let minuti = parseInt(Math.random() * 59);
            let orario = ora + ":" + minuti
            return orario;
        },
        textMessage: "",
        textSearch: "",
        timeLive: function () {
            let d = new Date();
            let giorno = d.getDate();
            let mese = d.getMonth();
            let anno = d.getFullYear();
            let ore = d.getHours();
            let minuti = d.getMinutes();
            let dataCompleta = `${giorno}/${mese}/${anno}  ${ore}:${minuti}`;
            return dataCompleta;
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },
                ],
                state: "Online",
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
                state: "Online",
            },

            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
                state: "Online",
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
                state: "Online",
            },
        ],

    },
    methods: {
        selectedContact(i) {
            return this.index = i;
        },

        /* INVIA IL MESSAGGIO SCRITTO NELL'IMPUT E RICEVI RISPOSTA*/
        sendMessage(i) {
            this.contacts[i].messages.push(
                {
                    date: this.timeLive(),
                    text: this.textMessage,
                    status: 'sent',
                },
            );
            this.textMessage = "";
            setTimeout(() => {
                this.contacts[i].messages.push(
                    {
                        date: this.timeLive(),
                        text: "Ok",
                        status: 'received',
                    },
                );
            }, 1000);
        },

        prova() {
            console.log("ciao funziona");
        }
    },

    mounted() {
        /* PREMENDO IL TASTO ENTER, AVVIA LA FUNZIONE sendMessage */
        window.addEventListener("keydown", (element) => {
            if (element.key == "Enter") {
                this.sendMessage(this.index);
            }
        });

    },

    watch: {
        /* FILTRO PER RICERCA DEI CONTATTI */
        textSearch: function () {
            this.contacts.forEach(contact => {
                let name = contact.name.toLowerCase();
                let ricerca = this.textSearch;
                if (ricerca == "") {
                    contact.visible = true;
                } else if (name.includes(ricerca.toLowerCase())) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        },

    }
});

