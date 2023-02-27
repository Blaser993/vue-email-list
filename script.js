console.log("ciao")

const { createApp } = Vue

createApp({

    data() {
        return {
        mail: 'ciao',
        mails: [],
        }
    },

    methods: {
        fetchMails(){
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((res) => {
            console.log(res.data.response)
            this.mails.push(res.data.response) 
        })
        },

    },

    mounted(){
        for(let i = 0; i < 10; i++){
            this.fetchMails()
        }
    },


}).mount('#app')




