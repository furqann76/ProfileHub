<!-- client/src/components/AddUser.vue -->
<template>
    <div class="container">
        <h1>Add New User</h1>
        <form @submit.prevent="addUser">
            <div class="mb-3">
                <label for="first_name" class="form-label">First Name</label>
                <input type="text" v-model="first_name" class="form-control" id="first_name" required />
            </div>
            <div class="mb-3">
                <label for="last_name" class="form-label">Last Name</label>
                <input type="text" v-model="last_name" class="form-control" id="last_name" required />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" v-model="email" class="form-control" id="email" required />
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="text" v-model="phone" class="form-control" id="phone" required />
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <textarea v-model="address" class="form-control" id="address" rows="4" ></textarea>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" id="password" required />
            </div>
            <button type="submit" class="btn btn-success">Add User</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            password: ''
        };
    },
    methods: {
        addUser() {
            const user = {  //JS OBJECT
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                phone: this.phone,
                address: this.address,
                password: this.password
                
            };

            
            console.log(user);
            axios.post('http://localhost:5000/api/users', user)
                .then(() => {
                    this.$router.push('/');
                });
        }
    }
};
</script>
