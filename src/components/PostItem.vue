<template lang="">
  <div class="post">
    <div class="post__body">
      <div> <strong>Название:</strong> {{ post.title }}</div>
      <div> <strong>Описание:</strong> {{ post.desc }}</div>
    </div>
    <div class="post__remove">
      <MyButton class="btn">Удалить</MyButton>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
.post {
  display: flex;
  margin-bottom: 5px;
  justify-content: space-between;
  column-gap: 5px;

  &__body {
    flex: 1 1 auto;
    padding: 15px;
    border: 1px solid rgb(68, 193, 137);
  }

  &__remove {
    max-height: 100%;
  }
}
.btn {
  height: 100%;
}
</style>
