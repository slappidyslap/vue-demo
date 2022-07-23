<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template lang="">
  <div>
    <h4>Создание поста</h4>
    <form @submit.prevent>
      <input
        v-model="post.title"
        class="inp"
        type="text"
        placeholder="Название"
      >
      <input
        v-model="post.desc"
        class="inp"
        type="text"
        placeholder="Описание"
      >
      <MyButton
        class="btn"
        @click="createPost"
      >
        Создать
      </MyButton>
    </form>
  </div>
</template>
<script>

export default {
  data() {
    return {
      post: {
        title: '',
        desc: '',
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();

      this.$emit('createPost', this.post);

      this.post = {
        title: '',
        desc: '',
      };
    },
  },
};
</script>
<style scoped lang="scss">
.inp {
  margin-bottom: 5px;
  width: 100%;
  border: 1px solid rgb(68, 193, 137);
  padding: 10px 15px;
  background: none;

  &:focus {
    outline: none;
    border: 1px solid rgb(54, 151, 107);
  }
}
</style>
