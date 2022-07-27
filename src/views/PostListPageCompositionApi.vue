<template>
    <div>
        <div class="post__control">
            <!-- МЕГА ВАЖНО!1!!! -->
            <MyInput
                class="post__search"
                :model-value="searchQuery"
                @update:model-value="setSearchQuery"
                placeholder="Поиск"
            >
            </MyInput>
            <!-- МЕГА ВАЖНО!1!!! -->
            <drop-down
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
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
        <post-list
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <div v-else>Идет загрузка...</div>
        <div
            ref="observer"
            class="observer"
        >
        </div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import usePosts from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        PostForm,
        // eslint-disable-next-line vue/no-unused-components
        PostList,
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
    },
    data() {
        return {
            isShow: false,
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По описанию' },
            ],
        };
    },
    // eslint-disable-next-line no-unused-vars
    setup(props) {
        const { posts, totalPage } = usePosts(10);
        const { selectedSort, sortedPosts } = useSortedPosts(posts);
        const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts);

        return {
            posts,
            totalPage,
            selectedSort,
            sortedPosts,
            searchQuery,
            sortedAndSearchedPosts,
        };
    },

};

</script>

<style lang="scss" scoped>
.post__control {
  display: flex;
  column-gap: 5px;
}
.post__create {
  flex: 0 1 auto;
  margin-bottom: 5px;
}

.post__sort-options {
  margin-bottom: 5px;
  flex: 0 1 auto;
}

.post__search {
  flex: 1 1 auto;
}

.observer {
  height: 30px;
}
</style>
