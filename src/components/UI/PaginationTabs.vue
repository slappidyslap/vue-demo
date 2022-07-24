<template>
    <div class="pagination">
        <div v-for="page in pages" :key="page">
            <PaginationButton :page="page"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaginationTabs',
    props: {
        pages: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
}
</style>
