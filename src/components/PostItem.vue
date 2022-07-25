<template lang="">
    <div class="post">
        <div class="post__body">
            {{ post.id }}
            <div> <strong class="post__title">Название:</strong> {{ post.title }}</div>
            <div> <strong class="post__desc">Описание:</strong> {{ post.body }}</div>
        </div>
        <div class="post__remove">
            <MyButton
                class="btn"
                @click="$emit('remove', post)"
            >
                Удалить
            </MyButton>
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
  column-gap: 5px;

  &__body {
    flex: 1 1 auto;
    padding: 15px;
    border: 1px solid rgb(68, 193, 137);
    color:rgb(58, 166, 118);
    border-radius: 5px;
  }

  &__title {
    color: rgb(41, 119, 84);
  }

  &__desc {
    color: rgb(41, 119, 84);
  }

  &__remove {
    max-height: 100%;
  }
}
.btn {
  height: 100%;
}
</style>
