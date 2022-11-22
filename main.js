// ESERCIZIO

// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue({
    el: '#app',
    data: {

        emails: [],
    },
    mounted() {


    },
    beforeUpdate() {

    },
    methods: {

        genera() {


            for (i = 0; i < 10; i++) {


                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {


                    this.emails.push(response.data.response)


                })

            }



        }
    }
})