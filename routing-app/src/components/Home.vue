<!-- client/src/components/Home.vue -->
<template>
    <div class="container">
        <h1>User List</h1>
        <router-link to="/add-user" class="btn btn-primary">Add New User</router-link>
        <router-Link to="/school" class ="ms-4 btn btn-dark">school list</router-Link>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.last_name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>
                        <router-link :to="'/user/' + user.id" class="btn btn-info">View Profile</router-link>
                    </td>
                    <td>
                        <button @click="deleteuser(user.id)" type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            users: []
        };
    },
    mounted() {
        axios.get('http://localhost:5000/api/users')
            .then(response => {
                this.users = response.data;
            });
    },
    methods: {
        deleteuser(userId){
            //alert(userId);
            axios.delete(`http://localhost:5000/api/users/${userId}`)
            .then(response => {
                //console.log(response.data.message);
                alert(response.data.message);
                this.$router.go('/');
            });
        }

    }
      };
</script>
