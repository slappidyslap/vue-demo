<template>
    <h3 style="color: rgb(41, 119, 84);">Пагинация</h3>
    <div class="page__wrapper">
        <div v-for="page in totalPage" :key="page">
            <button
                :class="page == currentPage ? 'active-page' : 'page'"
                @click="$emit('changePage', page)"
            >
                {{ page }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaginationTabs',
    props: {
        totalPage: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.page__wrapper{
  display: flex;

  & div:last-child button {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  & div:first-child button {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
}

.page {
  border: 1px solid rgb(68, 193, 137);
  color: rgb(58, 166, 118);
  min-width: 30px;
  min-height: 30px;
  background: none;

}

.active-page {
  border: 1px solid rgb(68, 193, 137);
  min-width: 30px;
  min-height: 30px;
  color: white;
  background-color: rgb(58, 166, 118);
}
</style>
