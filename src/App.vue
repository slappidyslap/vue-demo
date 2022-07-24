<template>
    <div class="post__control">
        <MyInput
            class="post__search"
            v-model="searchQuery"
            placeholder="Поиск"
        >
        </MyInput>
        <MyDropdown
            v-model="selectedSort"
            :options="sortOptions"
            class="post__sort-options"
        />
        <MyButton
            @click="hidePopup"
            class="post__create"
        >
            Создать пост
        </MyButton>
        <MyPopup v-model:isShow="isShow">
            <post-form class="popup__form" @createPost="createPost" />
        </MyPopup>
    </div>
    <h3 style="color: rgb(41, 119, 84);">Пагинация</h3>
    <div class="page__wrapper">
        <button
            v-for="pageNum in totalPage"
            :key="pageNum"
            class="page"
            :class="page == pageNum ? 'active-page' : ''"
            @click="changePage(pageNum)"
        >
            {{ pageNum }}
        </button>
    </div>
    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios';

export default {
    components: {
        PostForm,
        PostList,
    },
    data() {
        return {
            posts: [],
            isShow: false,
            isPostsLoading: false,
            selectedSort: '',
            page: 1,
            limit: 10,
            totalPage: 0,
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По описанию' },
            ],
            searchQuery: '',
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.isShow = false;
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
        hidePopup() {
            this.isShow = true;
        },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    },
                });
                this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.posts = response.data;
            } catch (err) {
                // eslint-disable-next-line no-alert
                alert(err);
            } finally {
                this.isPostsLoading = false;
            }
        },
        changePage(pageNum) {
            this.page = pageNum;
            this.fetchPosts();
        },
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        sortedPosts() {
            // eslint-disable-next-line max-len
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        },
        sortedAndSearchedPosts() {
            // eslint-disable-next-line max-len
            return this.sortedPosts.filter((post) => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },
    },
};

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding: 20px;
}

.popup__form button {
  min-width: 100%
}

.post__control {
  display: flex;
  column-gap: 5px;
}
.post__create {
  flex: 0 1 auto;
}

.post__sort-options {
  margin-bottom: 5px;
  flex: 0 1 auto;
}

.post__search {
  flex: 1 1 auto;
}

.page__wrapper {
  display: flex;

  & button:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  & button:first-child {
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
  color: white;
  background: rgb(58, 166, 118);
}
</style>
