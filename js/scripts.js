
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.



const {createApp} = Vue;

createApp ({

  data() {

    let init = Date.now();
    console.log(init);

    return {
      timeesecution: 0,
      mailList: []

    };//return

  },//data

  methods: {
    
    // generateMail () {
    //   for (let i = 1; i<=10; i++) {
    //     axios
    //       .get("https://flynn.boolean.careers/exercises/api/random/mail")
    //       .then( 
    //         (output) => {
  
    //           console.log (i, output)

    //           this.mailList.push(output.data.response)
    //         });        
    //   }},

    },//methods

   mounted() {
    const self = this;
    let start = Date.now();
    for (let i = 1; i<=10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then( 
          (output) => {

            console.log (i, output)

            this.mailList.push(output.data.response)
          });
    }
    let timeTaken = Date.now()
    console.log(this.init);
    console.log('------------------------------------');
    console.log(start);
    console.log('------------------------------------');
    console.log(timeTaken);

    this.timeesecution = timeTaken - start;
    console.log("Total time taken : " + this.timeTaken + " milliseconds");
  }
  

  
}).mount("#app")

