
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.



const {createApp} = Vue;

createApp ({

  data() {

    return {
      mailList: []

    };//return

  },//data

  methods: {

  },//methods

  mounted() {
    for (let i = 1; i<=10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then( 
          (output) => {

            console.log (i, output)

            this.mailList.push(output.data.response)
          });        
    }

  }

}).mount("#app")

