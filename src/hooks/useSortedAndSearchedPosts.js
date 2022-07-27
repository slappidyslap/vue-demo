import { ref, computed } from 'vue';

export default function useSortedPosts(sortedPosts) {
    const searchQuery = ref('');

    // eslint-disable-next-line arrow-body-style
    const sortedAndSearchedPosts = computed(() => {
        // eslint-disable-next-line max-len
        return sortedPosts.value.filter((post) => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });

    return {
        searchQuery, sortedAndSearchedPosts,
    };
}
