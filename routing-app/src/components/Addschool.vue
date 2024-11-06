<!-- client/src/components/AddUser.vue -->
<template>
    <div class="container">
        <h1>Add New school</h1>
        <form @submit.prevent="addschool">
            <div class="mb-3">
                <label for="school_name" class="form-label">school Name</label>
                <input type="text" v-model="school_name" class="form-control" id="school_name" required />
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="text" v-model="phone" class="form-control" id="phone" required />
            </div>
            <button type="submit" class="btn btn-success">Add school</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            school_name: '',
            phone: ''
        };
    },
    methods: {
        addschool() {
            const school = {
                school_name: this.school_name,
                phone: this.phone
            };
            console.log(school);
            axios.post('http://localhost:5000/api/school', school)
                .then(() => {
                    this.$router.push('/');
                });
        }
    }
};
</script>
