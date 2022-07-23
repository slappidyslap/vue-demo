<template>
  <post-form @createPost="createPost"/>
  <post-list :posts="posts"/>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  components: {
    PostForm, PostList,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Пост о Java',
          desc: 'Java > Javascript',
        },
        {
          id: 2,
          title: 'Пост о Kotlin?',
          desc: 'Kotlin.JS!!111!!!010)!!',
        },
        {
          id: 3,
          title: 'Пост о Groovy',
          desc: 'Стильно, красиво и молодежно',
        },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding: 20px;
}
</style>
