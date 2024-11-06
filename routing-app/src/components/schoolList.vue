<!-- client/src/components/Home.vue -->
<template>
    <div class="container">
        <h1>school List</h1>
        <router-link to="/add-school" class="btn btn-primary">Add New school</router-link>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>school Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="school in school" :key="school.id">
                    <td>{{ school.id }}</td>
                    <td>{{ school.school_name }}</td>
                    <td>{{ school.phone }}</td>
                    <td>
                        <router-link :to="'/school/' + school.id" class="btn btn-info">View Detail</router-link>
                    </td>
                    <td>
                        <button @click="deleteschool(school.id)" type="button" class="btn btn-danger">Delete</button>
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
            school: []
        };
    },
    mounted() {
        axios.get('http://localhost:5000/api/school')
            .then(response => {
                this.school = response.data;
            });
    },
    methods: {
        deleteschool(schoolId){
            //alert(userId);
            axios.delete(`http://localhost:5000/api/school/${schoolId}`)
            .then(response => {
                //console.log(response.data.message);
                alert(response.data.message);
                this.$router.go('/school');
            });
        }

    }
      };
</script>
