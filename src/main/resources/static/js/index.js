
const app = Vue.createApp({
    data() {
        return {
            message: 'hello world',
            users: [],
            userName: '',
            userAddress: '',
            isOpen: false
        }
    },
    methods: {
        postUser(event) {
            event.preventDefault();
            let data = { userName: this.userName, userAddress: this.userAddress };
            axios
                .post('http://localhost:8080/addUser', data)
                .then(() => this.getData())
                .catch(error => console.log(error));
            this.userName = "";
            this.userAddress = "";
        },
        deleteUser(event, userId) {
            event.preventDefault();
            axios
                .delete(`http://localhost:8080/deleteUser/${userId}`)
                .then(() => this.getData())
                .catch(error => console.log(error));
        },
        updateUser(event, userId) {
            event.preventDefault();
            let data = { userName: this.userName, userAddress: this.userAddress };
            axios
                .put(`http://localhost:8080/updateUser/${userId}/`, data)
                .then(() => this.getData())
                .catch(error => console.log(error));
        },
        openUpdate() {
            this.isOpen = !this.isOpen;
        },
        getData() {
            axios
                .get('http://localhost:8080/findAllUsers')
                .then(res => {
                    this.users = res.data;
                })
                .catch(error => console.log(error))
            this.userName = "";
            this.userAddress = "";
        }
    },
    mounted() {
        this.getData();
    }
});

app.mount('#app');