import { ref, computed } from 'vue';

export default function useSortedPosts(posts) {
    const selectedSort = ref('');

    // eslint-disable-next-line arrow-body-style
    const sortedPosts = computed(() => {
        // eslint-disable-next-line max-len
        return [...posts.value].sort((post1, post2) => post1[selectedSort.value]?.localeCompare(post2[selectedSort.value]));
    });

    return {
        selectedSort, sortedPosts,
    };
}
