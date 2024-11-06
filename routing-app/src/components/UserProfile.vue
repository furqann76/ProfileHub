<!-- client/src/components/schoolProfile.vue -->
<template>
    <div class="container">
        <h1>User Profile</h1>
        <div v-if="user">
            <p><strong>First Name:</strong> {{ user.first_name }}</p>
            <p><strong>Last Name:</strong> {{ user.last_name }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Phone:</strong> {{ user.phone }}</p>
            <p><strong>Address:</strong> {{ user.address }}</p>
            <p><strong>Password:</strong> {{ user.password }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
        <div>
            <router-link to="/" class="btn btn-primary">Return to Home</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: null
        };
    },
    mounted() {
        const userId = this.$route.params.id;
        axios.get(`http://localhost:5000/api/users/${userId}`)
            .then(response => {
                this.user = response.data;
            });
    }
};
</script>
