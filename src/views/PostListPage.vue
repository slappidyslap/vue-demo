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
        <!-- <div
            v-intersection="
                {
                    fun: loadMorePosts,
                    currentPage: page,
                    totalPage,
                }"
            ref="observer"
            class="observer"
        >
        </div> -->
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
import {
    mapState, mapGetters, mapMutations, mapActions,
} from 'vuex';

export default {
    components: {
        PostForm,
        PostList,
    },
    data() {
        return {
            // posts: [],
            isShow: false,
            // isPostsLoading: false,
            // selectedSort: '',
            // page: 1,
            // limit: 10,
            // totalPage: 0,
            // sortOptions: [
            //     { value: 'title', name: 'По названию' },
            //     { value: 'body', name: 'По описанию' },
            // ],
            // searchQuery: '',
        };
    },
    methods: {
        // МЕГА ВАЖНО!1!!!
        ...mapMutations({
            setPage: 'postStoreModule/setPage',
            setSearchQuery: 'postStoreModule/setSearchQuery',
            setSelectedSort: 'postStoreModule/setSelectedSort',
        }),
        ...mapActions({
            loadMorePosts: 'postStoreModule/loadMorePosts',
            fetchPosts: 'postStoreModule/fetchPosts',
        }),

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
        // async fetchPosts() {
        //     try {
        //         const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        //             params: {
        //                 _page: this.page,
        //                 _limit: this.limit,
        //             },
        //         });
        //         this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
        //         this.posts = response.data;
        //     } catch (err) {
        //         // eslint-disable-next-line no-alert
        //         alert(err);
        //     }
        // },
        // async loadMorePosts() {
        //     try {
        //         this.page += 1;
        //         const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        //             params: {
        //                 _page: this.page,
        //                 _limit: this.limit,
        //             },
        //         });
        //         this.posts = [...this.posts, ...response.data];
        //     } catch (err) {
        //         // eslint-disable-next-line no-alert
        //         alert(err);
        //     }
        // },
        // changePage(pageNum) {
        //     this.page = pageNum;
        //     this.fetchPosts();
        // },
    },
    mounted() {
        this.fetchPosts();
        console.log(this.$refs.observer);
        const options = {
            rootMargin: '0px',
            threshold: 1.0,
        };
        const callback = (entries) => {
            if (entries[0].isIntersecting && this.page < this.totalPage) {
                this.loadMorePosts();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
    computed: {

        ...mapState({
            posts: (state) => state.postStoreModule.posts,
            isPostsLoading: (state) => state.postStoreModule.isPostsLoading,
            selectedSort: (state) => state.postStoreModule.selectedSort,
            page: (state) => state.postStoreModule.page,
            limit: (state) => state.postStoreModule.limit,
            totalPage: (state) => state.postStoreModule.totalPage,
            sortOptions: (state) => state.postStoreModule.sortOptions,
            searchQuery: (state) => state.postStoreModule.searchQuer,

        }),
        ...mapGetters({
            sortedAndSearchedPosts: 'postStoreModule/sortedAndSearchedPosts',
            sortedPosts: 'postStoreModule/sortedPosts',

        }),
        // sortedPosts() {
        // eslint-disable-next-line max-len
        //     return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        // },
        // sortedAndSearchedPosts() {
        // eslint-disable-next-line max-len
        //     return this.sortedPosts.filter((post) => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        // },
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
