
const app = Vue.createApp({
    data() {
        return {
            users: [],
            userId: '',
            userName: '',
            userAddress: '',
            editUser: null,
            isEdit: false
        }
    },
    methods: {
        postUser(event) {
            event.preventDefault();
            let name = this.userName.replace(/\s/g, "");
            let address = this.userAddress.replace(/\s/g, "");
            if (name.length > 0 && address.length > 0) {
                if (this.editUser == null) {
                    let data = { userName: this.userName, userAddress: this.userAddress };
                    axios
                        .post('http://localhost:8080/addUser', data)
                        .then(() => this.getData())
                        .catch(error => console.log(error));
                    this.userName = "";
                    this.userAddress = "";
                } else {
                    let data = { userName: this.userName, userAddress: this.userAddress };
                    let userId = this.userId;
                    axios
                        .put(`http://localhost:8080/updateUser/${userId}/`, data)
                        .then(() => this.getData())
                        .catch(error => console.log(error));
                    this.editUser = null;
                    this.isEdit = false;
                    this.userName = "";
                    this.userAddress = "";
                }
            }
        },
        deleteUser(event, userId) {
            event.preventDefault();
            axios
                .delete(`http://localhost:8080/deleteUser/${userId}`)
                .then(() => this.getData())
                .then(() => console.log("foo"))
                .catch(error => console.log(error));
        },
        updateUser(event, index) {
            event.preventDefault();
            this.editUser = index;
            this.isEdit = true;
            this.userId = this.users[index].userId;
            this.userName = this.users[index].userName;
            this.userAddress = this.users[index].userAddress;
        },
        cancelUpdate() {
            this.editUser = null;
            this.isEdit = false;
            this.userId = "";
            this.userName = "";
            this.userAddress = "";
        },
        getData() {
            axios
                .get('http://localhost:8080/findAllUsers')
                .then(res => {
                    this.users = res.data;
                    setTimeout(() => {
                        $("#datatable").DataTable({
                            retrieve: true,
                            lengthMenu: [
                                [5, 10, 25, 50, -1],
                                [5, 10, 25, 50, "All"],
                            ],
                            pageLength: 5,
                        })
                    });
                })
                .catch(error => console.log(error))
        }
    },
    mounted() {
        this.getData();
    }
});

app.mount('#app');
