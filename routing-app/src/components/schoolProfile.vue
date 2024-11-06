<!-- client/src/components/UserProfile.vue -->
<template>
    <div class="container">
        <h1>school Profile</h1>
        <div v-if="school">
            <p><strong>school Name:</strong> {{ school.school_name }}</p>
            <p><strong>Phone:</strong> {{ school.phone }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
        <div>
            <router-link to="/school" class="btn btn-primary">Return to Home</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            school: null
        };
    },
    mounted() {
        const schoolId = this.$route.params.id;
        axios.get(`http://localhost:5000/api/school/${schoolId}`)
            .then(response => {
                this.school = response.data;
            });
    }
};
</script>
