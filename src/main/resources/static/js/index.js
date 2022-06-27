const app = Vue.createApp({
    data() {
        return {
            message: 'hello world',
            items: []
        }
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                this.items = res.data;
            })
            .catch(error => console.log(error))
    }
});

app.mount('#app');