<template>
    <input
        :value="page"
        type="button"
        class="pagination__button"
        @click="$emit('update:postsPage', postsPage)"
    />
</template>

<script>
export default {
    name: 'PaginationButton',
    props: {
        page: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            postsPage: 1,
        };
    },
};
</script>

<style lang="scss" scoped>
// .pagination__button {
//     background: none;
//     border: 1px solid rgb(68, 193, 137);
//     color: rgb(58, 166, 118);
//     min-width: 30px;
//     min-height: 30px;
// }
</style>
