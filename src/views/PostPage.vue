<template>
    <div>
        {{
            postId + '\ntitle:' + title + '\nbody:' + body + '\n' + userId
        }}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            postId: this.$route.params.id,
            title: '',
            body: '',
            userId: 0,
        };
    },

    methods: {
        async fetchPostInfoById() {
            try {
                // eslint-disable-next-line prefer-template
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + this.postId);
                this.title = response.data.title;
                this.body = response.data.body;
                this.userId = response.data.userId;
            } catch (err) {
                // eslint-disable-next-line no-alert
                alert(err);
                console.error(err);
            }
        },
    },

    mounted() {
        this.fetchPostInfoById();
    },

};
</script>

<style lang="scss" scoped>

</style>
