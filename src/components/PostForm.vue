<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template lang="">
    <div>
        <h4 class="title">Создание поста</h4>
        <form @submit.prevent>
            <MyInput
                v-model.trim="post.title"
                class="inp"
                type="text"
                placeholder="Название"
            />
            <MyInput
                v-model.trim="post.desc"
                class="inp"
                type="text"
                placeholder="Описание"
            />
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
.title {
  color: rgb(41, 119, 84);
  text-align: center;
  margin-bottom: 5px;
}

.inp.inp {
  min-width: 100%;
}
.btn.btn {
  min-width: 100%
}
</style>
