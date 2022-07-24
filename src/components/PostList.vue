<template lang="">
    <div v-show="posts.length > 0">
        <h3 class="title">Список постов</h3>
        <transition-group name="post-list">
            <post-item
                v-for="post in posts"
                :key="post.id"
                :post="post"
                @remove="$emit('remove', post)"
            />
        </transition-group>
    </div>
    <h3 v-show="posts.length === 0" class="err">Список постов пуст</h3>
</template>
<script>
import PostItem from './PostItem.vue';

export default {
    components: { PostItem },
    emits: ['remove'],
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
};
</script>
<style>
.err {
  color: rgb(41, 119, 84);
  text-align: center;
}

.title {
  color: rgb(41, 119, 84);
  text-align: center;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
